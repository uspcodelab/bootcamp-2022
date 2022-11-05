# BootCamp 2022.2

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Linter

You can check your code file's lint by running

```bash
$ yarn prettier -c <file>
```

or, if you wanna check all project files, you can run

```bash
yarn prettier -c .
```

To fix linter issues, just add the flag -w to write Prettier changes to files

```bash
# fix linter issues from a given file
yarn prettier -w <file>

# fix all project linter issues
yarn prettier -w .
```

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

After finishing the changes, create a pull-request in the main repository GitHub page or in your branch page and request a pair review of your code to merge it.

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).
