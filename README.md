Portfolio
=========

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)][license]
[![CircleCI](https://circleci.com/gh/paveg/portfolio.svg?style=svg)][circleci]
[![codecov](https://codecov.io/gh/paveg/portfolio/branch/master/graph/badge.svg)][codecov]

[license]: https://github.com/paveg/portfolio/blob/master/LICENSE
[circleci]: https://circleci.com/gh/paveg/portfolio
[codecov]: https://codecov.io/gh/paveg/portfolio

This repository is my portfolio site.

## Requires

- npm: 6.5.0
- node: v10.15.3

## Technical constitution

- [TypeScript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Material-UI](https://material-ui.com/)

### Directory Structure

```
❯ tree -L 2 --dirsfirst -I 'node_modules|build|__tests__|__mocks__|coverage'
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   ├── containers
│   ├── redux
│   ├── static
│   ├── theme
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   └── serviceWorker.ts
├── Dockerfile
├── LICENSE
├── Makefile
├── README.md
├── coverage.lcov
├── nginx.conf
├── now.json
├── package-lock.json
├── package.json
├── tsconfig.json
└── tslint.json
```

## Commands

- `npm run start`

    Run local server. Please, access to http://localhost:3000/ .

- `npm run test`

    Run tests.

- `npm tslint`

    Run tslint and prettier construction check.

- `make docker.build`

    Build on docker.
    
- `make docker.run`

    Run docker. Please, access to http://localhost:8080/ .

## Deployment

### Staging

- Start to deploy staging when you create PullRequest.

### Master

- Run auto deployment when you merge into master.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
