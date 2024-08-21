import params, {paramOrder} from "~/lists/params.js";

export default class Entity {

    /**
     * @type {number}
     */
    id;
    /**
     * @type {string}
     */
    url;
    /**
     * @type {string}
     */
    img;
    /**
     * @type {string}
     */
    title;
    /**
     *
     * @type {Entity[]}
     */
    children = [];
    gallery = [];
    description = "";
    content = "";
    params = {};
    order = '';
    price = '';
    video = "";
    link = "";

    get localUrl() {
        const url = this.url.replaceAll("https://backend.letostyle.ru", "");
        if (url.includes("category")) return url;
        return this.link || "/product" + url;
    }

    get blogUrl() {
        const url = this.url.replaceAll("https://backend.letostyle.ru", "");
        return "/blog" + url;
    }

    get slider() {
        return [{
            name: this.title,
            img: this.img
        }];
    }

    get sortedParams() {
        const paramsArr = Object.entries(this.params);
        return paramsArr.sort((a, b) => {
            const aI = paramOrder.indexOf(a[0]);
            const bI = paramOrder.indexOf(b[0]);
            if (aI === bI) return 0;
            if (aI === -1) return 1;
            if (bI === -1) return -1;

            return aI < bI ? -1 : 1
        })
            .map(el => {
                return {
                    id: el[0],
                    name: params[el[0]],
                    value: el[1]
                };
            });
    }

    /**
     *
     * @param obj
     * @param classObj
     * @return {Entity}
     */
    static createFromObj(obj, classObj = null) {
        if (!classObj) classObj = Entity;

        const entity = new classObj(obj.id, obj.title);
        [entity.url, entity.img] = [obj.url, obj.picture];
        if (obj.children) entity.children = obj.children.map(el => classObj.createFromObj(el));
        if (obj.gallery) entity.gallery = obj.gallery.map(el => "https://backend.letostyle.ru" + el);
        if (obj.description) entity.description = obj.description;
        if (obj.content) entity.content = obj.content;
        if (obj.cost) entity.price = obj.cost;
        if (obj.order) entity.order = obj.order;
        if (obj.video) entity.video = obj.video;
        if (obj.link) entity.link = obj.link;
        for (let param in params) {
            if (Object.hasOwn(obj, param)) entity.params[param] = obj[param];
        }
        entity.sortChildren();

        return entity;
    }

    constructor(id, title) {
        this.id = id;
        this.title = title;
    }

    sortChildren() {
        this.children.sort((a, b) => {
            return a.order.localeCompare(b.order);
        });
    }

}