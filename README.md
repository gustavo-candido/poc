# Requirements

- Node (version ref: v14.15.3)
- Docker (version ref: 20.10.8)

# Instalation

- Download the repo
- go for backend directory (`cd backend`)
- run `npm install`

# Running

- go for backend directory (`cd backend`)
- run `docker-compose up` for start the express web server and the Postgres container

# Config database

- Ensure your Postgres container is running
- go for backend directory (`cd backend`)
- run `docker-compose exec app npx knex --knexfile src/db/knexfile.ts migrate:latest` to create the tables, seeds and so

# Available routes

### Importing routes with insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=POC-APIC&uri=https%3A%2F%2Fgithub.com%2Fgustavo-candido%2Fpoc%2Fblob%2Ffeature%2Fstart-backend%2FInsomnia_2022-03-31)

![import routes gif](https://github.com/gustavo-candido/poc/blob/feature/start-backend/.github/how-insomnia.gif)

## DB

- go for backend directory (`cd backend`)

### Create migration

npx knex --migrations-directory ./src/db/migrations migrate:make migration_name -x ts

### Run migration

docker-compose exec app npx knex --knexfile src/db/knexfile.ts migrate:latest
