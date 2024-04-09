import {
	defineWorkersConfig,
	readD1Migrations,
} from '@cloudflare/vitest-pool-workers/config';
import path from 'node:path';

export default defineWorkersConfig(async () => {
	const migrationsPath = path.join(__dirname, 'migrations');
	const migrations = await readD1Migrations(migrationsPath);

	return {
		test: {
			setupFiles: ['./test/apply-migrations.ts'],
			poolOptions: {
				workers: {
					singleWorker: true,
					wrangler: { configPath: './wrangler.toml' },
					miniflare: {
						bindings: { TEST_MIGRATIONS: migrations },
					},
				},
			},
		},
	};
});
