# THE BEDH STACK

## [Bun](https://bun.sh/)

## [Elysia](https://elysiajs.com/)

## [Drizzle](https://orm.drizzle.team/)

## [HTMX](https://htmx.org/)

Also: [typed-html](https://github.com/nicojs/typed-html), [tailwind-css](https://tailwindcss.com/), [drizzle](https://orm.drizzle.team/), [hyperscript](https://hyperscript.org/) and [fly.io](https://fly.io/)


# TO RUN LOCALLY

1. Clone this repo

2. Install [Bun](https://bun.sh)

3. Run `bun install` to install dependencies

4.1. Run `bun run db:gm` to push the database schema to your database
```log
❯ bun run db:gm
$ bunx drizzle-kit generate:mysql
[0.04ms] ".env"
drizzle-kit: v0.19.10
drizzle-orm: v0.27.2

No config path provided, using default 'drizzle.config.ts'
Reading config file '/home/pc/projects/the-beth-stack/drizzle.config.ts'
Reading schema files:
/home/pc/projects/the-beth-stack/src/db/schema.ts

0 tables


No schema changes, nothing to migrate 😴
```

5. Run `bun run db:pm` to push the database schema to your database
```log
❯ bun run db:pm
$ bunx drizzle-kit push:mysql
[0.05ms] ".env"
drizzle-kit: v0.19.10
drizzle-orm: v0.27.2

No config path provided, using default 'drizzle.config.ts'
Reading config file '/home/pc/projects/the-beth-stack/drizzle.config.ts'
300 |           } else
301 |             throw this[bunSocketInternal] = null, new Error("Invalid socket");
302 |         });
303 |     } else if (path)
304 | 
305 |       bunConnect({
        data: this,
        unix: path,
        socket: Socket2.#Handlers,
        tls
      }).catch((error) => {
         ^
error: Failed to connect
      at connect (node:net:305:6)
      at new _Connection (/home/pc/projects/the-beth-stack/node_modules/drizzle-kit/index.cjs:33946:26)
      at /home/pc/projects/the-beth-stack/node_modules/drizzle-kit/index.cjs:35263:13
      at createConnection2 (/home/pc/projects/the-beth-stack/node_modules/drizzle-kit/index.cjs:35542:29)
      at /home/pc/projects/the-beth-stack/node_modules/drizzle-kit/index.cjs:37649:17
      at connectToMySQL (/home/pc/projects/the-beth-stack/node_modules/drizzle-kit/index.cjs:37644:28)
      at /home/pc/projects/the-beth-stack/node_modules/drizzle-kit/index.cjs:53084:27
error: "drizzle-kit" exited with code 1 (SIGHUP)
error: script "db:pm" exited with code 1 (SIGHUP)

```
6. Run `bun run dev` to start the dev server

