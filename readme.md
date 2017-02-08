# Express/Mongo/React/Webpack/Docker

Yet another boilerplate because none of the other ones out there were satisfying.

## Run your app

**NOTE:**  make sure you are running node 7 or later.

### Terminal #1:

```
npm install
npm run dev
```

### Terminal #2:
```
docker-compose up
```

### Customize

This repo contains forks which you can merge or check out to add to your boilerplate:

* [with-flow](https://github.com/coopermaruyama/express-react-boilerplate/tree/with-flow): With flow type-checker.
* [with-typescript](https://github.com/coopermaruyama/express-react-boilerplate/tree/with-typescript): With Typescript


## Features

* Mongo linked in docker container
* Webpack on both client and server side, so you can run stuff like async/await on both.
* Native Node inspector (this is why you need node 7 or later).
* Absolute imports for `client` and `server` directories, so you can do `import thing from 'app/module/thing'`.
* Using `dotenv` with a `settings.js` in such a way that you can set default settings values but override them with stuff in `.env` which is useful when deploying/environments.

## Reasonings

* Other boilerplates have way too much stuff that is irrelevant to development experience, like routers, css plugins, etc.
* Most apps don't need SSR. I don't think it's worth the added complexity for most apps.
* Not having HMR is a personal thing. I don't like the idea of spinning up another server/port just for HMR, and the way I develop, I don't have to refresh often enough to where it's worth the extra complexity.
