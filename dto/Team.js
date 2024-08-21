import Entity from "~/dto/Entity.js";

export default class Team extends Entity {

    post = "";
    name = "";

    /**
     *
     * @param obj
     * @return {Team}
     */
    static createFromObj(obj) {
        /**
         *
         * @type {Team}
         */
        const entity = Entity.createFromObj(obj, Team);
        if (obj.name) entity.name = obj.name;
        if (obj.post) entity.post = obj.post;

        return entity;
    }

}