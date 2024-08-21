// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";


export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: false},
    css: [
        '~/assets/style/main.scss',
    ],
    resolve: {
        alias: {
            "@": resolve(".")
        }
    },
    target: "static",
    generate: {
        fallback: true
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: [
                "/200.html"
            ]
        }
    },
    plugins: ['~/plugins/clickOutside.client.js'],

    hooks: {
        'pages:extend'(pages) {
            pages.push(
                {
                    name: "catalog-id",
                    path: "/category/:path",
                    file: resolve("pages/catalog.vue")
                },
                {
                    name: "product-link",
                    path: '/product/:pathMatch(.*)*',
                    file: resolve("pages/card.vue")
                },
                {
                    name: "blog-path",
                    path: "/blog/:pathMatch(.*)*",
                    file: resolve("pages/blog-article.vue")
                }
            )
        }
    }
})