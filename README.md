# KiNO Was Here

## About

This is my personal website's code. It consists of a Backend done with [Laravel 8](https://laravel.com/docs/8.x) and [React](https://reactjs.org/) through create-react-app.

## Installation

### Backend | Laravel

Laravel can be setup using Sail and standard Laravel setup procedure with MySQL.

### Frontend | React

Everything in the FE is in the `./frontend` directory. Proceed with it as a standard CRA app. Make sure to configure `./frontend/src/Config/Environment.js` based on the template.

## Goals

- [x] Implement working Blog and Auth for Admin
- [ ] Implement film / music reviews!!!
- [ ] Implement Reactions and Whatnot (still gotta figure that out)

## TODO
- [ ] Install [rebem-jsx](https://github.com/rebem/rebem-jsx) for Block, Elem and Mods
- [x] Handle request 404's and all that jazz
- [ ] Someday, sometime, when my brain is 10x bigger, send all app state to Redux
- [ ] Handle user groups
- [x] Support for the mobile people
- [x] Parse API formats to code (parse types to camelcase)
- [ ] Implement Loaders
- [x] Fix Home design
- [ ] Make JWT Auth work with Admin Auth Middleware
- [x] Remove all Laravel Auth

## Licenses

This project is [0BSD Licensed](https://github.com/kinowashere/kwh/blob/main/LICENSE.txt)

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

React is [MIT Licensed](https://github.com/facebook/react/blob/main/LICENSE)
