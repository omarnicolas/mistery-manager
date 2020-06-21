mistery-manager
=========

A secret manager for your CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mistery-manager.svg)](https://npmjs.org/package/mistery-manager)
[![Downloads/week](https://img.shields.io/npm/dw/mistery-manager.svg)](https://npmjs.org/package/mistery-manager)
[![License](https://img.shields.io/npm/l/mistery-manager.svg)](https://github.com/omarnicolas/mistery-manager/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mistery-manager
$ mistery-manager COMMAND
running command...
$ mistery-manager (-v|--version|version)
mistery-manager/1.0.0 linux-x64 node-v12.16.1
$ mistery-manager --help [COMMAND]
USAGE
  $ mistery-manager COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mistery-manager help [COMMAND]`](#mistery-manager-help-command)
* [`mistery-manager secrets`](#mistery-manager-secrets)
* [`mistery-manager secrets:create USERNAME NAME`](#mistery-manager-secretscreate-username-name)
* [`mistery-manager secrets:delete USERNAME NAME`](#mistery-manager-secretsdelete-username-name)
* [`mistery-manager secrets:get USERNAME NAME`](#mistery-manager-secretsget-username-name)
* [`mistery-manager secrets:list USERNAME`](#mistery-manager-secretslist-username)
* [`mistery-manager secrets:update USERNAME NAME`](#mistery-manager-secretsupdate-username-name)
* [`mistery-manager users`](#mistery-manager-users)
* [`mistery-manager users:create USERNAME`](#mistery-manager-userscreate-username)
* [`mistery-manager users:list`](#mistery-manager-userslist)

## `mistery-manager help [COMMAND]`

display help for mistery-manager

```
USAGE
  $ mistery-manager help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `mistery-manager secrets`

Manage secrets by user

```
USAGE
  $ mistery-manager secrets
```

_See code: [src/commands/secrets/index.js](https://github.com/omarnicolas/mistery-manager/blob/v1.0.0/src/commands/secrets/index.js)_

## `mistery-manager secrets:create USERNAME NAME`

Creates a secret by name

```
USAGE
  $ mistery-manager secrets:create USERNAME NAME
```

_See code: [src/commands/secrets/create.js](https://github.com/omarnicolas/mistery-manager/blob/v1.0.0/src/commands/secrets/create.js)_

## `mistery-manager secrets:delete USERNAME NAME`

Delete a secret by username and name

```
USAGE
  $ mistery-manager secrets:delete USERNAME NAME
```

_See code: [src/commands/secrets/delete.js](https://github.com/omarnicolas/mistery-manager/blob/v1.0.0/src/commands/secrets/delete.js)_

## `mistery-manager secrets:get USERNAME NAME`

Lists secrets by username

```
USAGE
  $ mistery-manager secrets:get USERNAME NAME

OPTIONS
  -c, --copy
```

_See code: [src/commands/secrets/get.js](https://github.com/omarnicolas/mistery-manager/blob/v1.0.0/src/commands/secrets/get.js)_

## `mistery-manager secrets:list USERNAME`

Lists secrets by username

```
USAGE
  $ mistery-manager secrets:list USERNAME
```

_See code: [src/commands/secrets/list.js](https://github.com/omarnicolas/mistery-manager/blob/v1.0.0/src/commands/secrets/list.js)_

## `mistery-manager secrets:update USERNAME NAME`

Update a secret by username and name

```
USAGE
  $ mistery-manager secrets:update USERNAME NAME
```

_See code: [src/commands/secrets/update.js](https://github.com/omarnicolas/mistery-manager/blob/v1.0.0/src/commands/secrets/update.js)_

## `mistery-manager users`

Manage users

```
USAGE
  $ mistery-manager users
```

_See code: [src/commands/users/index.js](https://github.com/omarnicolas/mistery-manager/blob/v1.0.0/src/commands/users/index.js)_

## `mistery-manager users:create USERNAME`

Creates an user

```
USAGE
  $ mistery-manager users:create USERNAME
```

_See code: [src/commands/users/create.js](https://github.com/omarnicolas/mistery-manager/blob/v1.0.0/src/commands/users/create.js)_

## `mistery-manager users:list`

List all users

```
USAGE
  $ mistery-manager users:list
```

_See code: [src/commands/users/list.js](https://github.com/omarnicolas/mistery-manager/blob/v1.0.0/src/commands/users/list.js)_
<!-- commandsstop -->
