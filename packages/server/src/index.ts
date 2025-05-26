import { os } from "@orpc/server";
import { type } from "arktype";

const Image = type({
	id: "number",
	createdAd: "Date",
});

interface S3Client { } // common s3 interface for cf r2
interface Context {
	headers: Headers;
	env: { DB_URL: string; };
	s3: S3Client;
}

const base = os.$context<Context>();

const addImage = base
	.input(Image)
	.handler(({ input }) => {

	});

export const router = {
	image: {
		create: addImage
	}
};
