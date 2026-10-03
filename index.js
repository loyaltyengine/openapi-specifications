import express from "express";
import {apiReference} from "@scalar/express-api-reference";
import {httpServerHandler} from "cloudflare:node";
import "dotenv/config";

const app = express();

app.use(
    "/",
    apiReference({
        pageTitle: "Loyalty Engine API Reference",
        theme: "elysiajs",
        layout: "classic",
        defaultOpenAllTags: true,
        hideTestRequestButton: true,
        hideClientButton: false,
        pathRouting: {
            basePath: "/",
        },
        sources: [
            {
                title: "Authentication and Users API",
                slug: "auth",
                url: "/auth-v1.yaml",
                default: true,
            },
            {
                title: "Properties API",
                slug: "properties",
                url: "/properties-v1.yaml",
            },
            {
                title: "Coupons API",
                slug: "coupons",
                url: "/coupons-v1.yaml",
            },
            {
                title: "Points API",
                slug: "points",
                url: "/points-v1.yaml",
            },
        ],
    }),
);

app.listen(3000);
export default httpServerHandler({ port: 3000 });
