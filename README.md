# tcc

mvp

## DB

### Create migration

npx knex --migrations-directory ./src/db/migrations migrate:make migration_name -x ts

### Run migration

docker-compose exec app npx knex --knexfile src/db/knexfile.ts migrate:latest
