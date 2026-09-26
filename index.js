import express from "express";
import { apiReference } from "@scalar/express-api-reference";
import fs from "node:fs";
import path from "node:path";
import "dotenv/config";

const app = express();

app.get("/api/:filename", (req, res) => {
	const filePath = path.join(process.cwd(), "dist", req.params.filename);
	if (fs.existsSync(filePath)) {
		res.setHeader("Content-Type", "text/yaml; charset=utf-8");
		return res.sendFile(filePath);
	}

	res.status(404).send(`File not found at: ${filePath}`);
});

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
				url: "/api/auth-v1.yaml",
				default: true,
			},
			{
				title: "Properties API",
				slug: "properties",
				url: "/api/properties-v1.yaml",
			},
			{
				title: "Coupons API",
				slug: "coupons",
				url: "/api/coupons-v1.yaml",
			},
			{
				title: "Points API",
				slug: "points",
				url: "/api/points-v1.yaml",
			},
		],
	}),
);

export default app;

if (process.env.NODE_ENV !== "production") {
	const port = process.env.PORT || 3000;
	app.listen(port, () => {
		console.log(`Scalar express app listening locally on port ${port}`);
	});
}
