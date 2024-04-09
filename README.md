# Cloudflare D1 Example 1

## Code History

The code in this repository is based on:

- https://youtu.be/oZLxF5NgvPc?si=Eh-nwchXeShEQhII

## Creation History

```bash
npm create cloudflare@latest
cd cloudflare-d1-ex1
npx wrangler d1 create cloudflare-d1-ex1
npx wrangler d1 delete cloudflare-d1-ex1
npx wrangler d1 migrations list cloudflare-d1-ex1
npx wrangler d1 migrations create cloudflare-d1-ex1 add_users_table
npx wrangler d1 migrations apply cloudflare-d1-ex1
npx wrangler d1 migrations apply cloudflare-d1-ex1 --remote=true
```
