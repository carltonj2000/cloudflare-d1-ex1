// test/index.spec.ts
import { env } from 'cloudflare:test';
import { it, expect } from 'vitest';
import { UserRow } from '../src/types';

it('should insert and query user', async () => {
	const user = await env.DB.prepare(
		'insert into users(name, email) values(?,?) returning *'
	)
		.bind('name', 'email@example.com')
		.first<UserRow>();
	expect(user).toEqual({ id: 1, name: 'name', email: 'email@example.com' });

	const userById = await env.DB.prepare('select * from users where id = ?')
		.bind(user!.id)
		.first<UserRow>();
	expect(userById).toEqual({ id: 1, name: 'name', email: 'email@example.com' });
});
