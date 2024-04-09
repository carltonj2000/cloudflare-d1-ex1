export interface Env {
	DB: D1Database;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const firstItem = await env.DB.prepare(
			'insert into items(name) values(?) returning *'
		)
			.bind('item_1')
			.first<ItemRow>();

		const updateItem = await env.DB.prepare(
			'update items set name = ? where name = ? returning *'
		)
			.bind('updated_name', firstItem!.name)
			.first<ItemRow>();

		const items = (await env.DB.prepare('select * from items').all<ItemRow>())
			.results;

		return new Response(JSON.stringify({ items }, null, 2));
	},
};
