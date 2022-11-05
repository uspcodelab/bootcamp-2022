# DevBoost 2022.2 - Back-end

## Run/stop server

In order to run server, you must setup an `.env` file based on `.env.sample`, by running:

```bash
$ cp .env.sample .env
```

When you are done with your configurations, just run or stop development server following the instructions below.

```bash
# generate docker image of back-end server
$ docker compose build

# start api and database servers (use -d to run in background)
$ docker compose up [-d]

# stop api and database servers
$ docker compose down
```

## Build with

In this project, we use the following technologies:
- NodeJS v14
- Postgres v14

## Contributing

In order to contribute to this repository, you must create a new branch with your code, setup a pull-request with your changes and have your code reviewed by pairs. First, pull the
main changes into your local repository, by running

```bash
$ git pull
```

Then, to create a new branch, run

```bash
$ git checkout -b <branch-name>
```

As you make changes to the app, do some commits that expressively describe what you have changed, by running

```bash
$ git commit -s -m "<your-message>"
```

The -s flag signs out your message (if you don't have a signature, setup your [username](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git)
and your [mail](https://docs.github.com/en/github-ae@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address))
and the -m flag set a message to your commit, e.g. "Update header component with app logo". It is strongly recommended that your messages have imperative verbal mode. If you need to
push your changes into a upstream branch, you must run

```bash
$ git push --set-upstream origin <branch-name>
```

or, if you already set the branch to upstream, just run

```bash
$ git push
```

## Directories

This back-end server is organized by the following directories:

### `db`

Contains the SQL file that creates database schema and initial state of the application. May have others SQL files. To know more about the SQL syntax, check
[this documentation](https://www.w3schools.com/sql/sql_syntax.asp).

### `public`

This directory contains static and public files, which are acessible by `/`.

### `routes`

This directory contains all route files called on `app.js`. They have the handling for POST and GET methods and usually call services to do some operations in database.

### `services`

This directory contains all services called by routes, which usually retrieves and inserts data into the database.

## More informations
This repository is built based on the demo Quotes REST API using Node.js with Express and PostgreSQL. To more informations, view this
[Node.js PostgreSQL tutorial](https://geshan.com.np/blog/2021/01/nodejs-postgresql-tutorial/).
