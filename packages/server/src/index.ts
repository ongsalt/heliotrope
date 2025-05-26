import { os } from "@orpc/server";
import { type } from "arktype";

const Image = type({
	id: "number",
	createdAd: "Date",
});

const base = os.$context<{ headers: Headers, env: { DB_URL: string } }>()

const addImage = base
	.input(Image)
	.handler(({ input }) => {

	});

export const router = {
	image: {
		create: addImage
	}
};
