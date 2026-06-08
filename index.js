import express from "express";
import { apiReference } from "@scalar/express-api-reference";
import fs from "node:fs";
import path from "node:path";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;

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
		theme: "purple",
		pathRouting: {
			basePath: "/",
		},
		sources: [
			{
				title: "Authentication v1",
				slug: "auth-v1",
				url: "/api/auth-v1.yaml",
				default: true,
			},
			{
				title: "Coupons v1",
				slug: "coupons-v1",
				url: "/api/coupons-v1.yaml",
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
