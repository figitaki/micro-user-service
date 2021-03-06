<h1 align="center">
  <br>
  <img width="500" src="https://cdn.rawgit.com/figitaki/micro-user-service/master/media/logo.svg" alt="Simple Node User Service">
  <br>
  <br>
</h1>

> Extensible microservice for managing user accounts

[![Build Status](https://travis-ci.org/figitaki/micro-user-service.svg?branch=master)](https://travis-ci.org/figitaki/micro-user-service) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![Coverage Status](https://coveralls.io/repos/github/figitaki/micro-user-service/badge.svg)](https://coveralls.io/github/figitaki/micro-user-service)

## Highlights
- Out of the box user microservice written in Node.js.
- Uses MongoDB for persistent file storage.
- Gain experience creating a public open source project
- Built with Docker and hosted on Docker Hub.
- Uses [Yarn](https://yarnpkg.com/) for package management.


## Usage

Simply download the source for this repository.

```
$ git clone https://github.com/figitaki/micro-user-service
$ cd micro-user-service
```

Once you have a copy of the repository, use docker to spin up
an instance of the container. By running `docker-compose up`
docker builds the mongo and web image and starts the server.

```
$ docker-compose up
```

## License

MIT &copy; [Carey Janecka](https://github.com/figitaki)
