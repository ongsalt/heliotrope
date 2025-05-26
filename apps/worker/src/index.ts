import { router } from "@heliotrope/server";
import { RPCHandler } from '@orpc/server/fetch';
import { CORSPlugin } from '@orpc/server/plugins';

const handler = new RPCHandler(router, {
	plugins: [
		new CORSPlugin()
	]
});

export default {
	async fetch(request, env, ctx) {
		const { matched, response } = await handler.handle(request, {
			prefix: '/rpc',
			context: {
				env: {
					DB_URL: ""
				},
				headers: request.headers
			}
		});

		if (matched) {
			return response;
		}

		return new Response('Not found', { status: 404 });
	}
} satisfies ExportedHandler<Env>;
