# Starter template for TypeScript

## Features

* Github pipeline that runs tests
* Git hooks (linting, running tests)
* Dockerized application for development
* Tests pre-configured
* My opinionated Eslint and TypeScript rules
* VSCode debugging

## Create new projects

Clone the repository, copy the script somewhere, modify the variables and set an alias in your shell.

```bash
#!/bin/bash

BASE_DIR=~/dev
TEMPLATE_DIR=/ts-template

echo Directory?
read dir

echo Project Name?
read name

cp -R $BASE_DIR/$TEMPLATE_DIR $BASE_DIR/$dir/$name
cd $BASE_DIR/$dir/$name && code . && git init && yarn

echo successfully bootstrapped ts template in $BASE_DIR/$dir/$name
```

This will allow you to easily create new projects with the same template,
like so:

1. setup:ts (my alias)
2. asks for directory: playground
3. asks for folder name: example
4. installs dependencies and starts vscode for you :)
