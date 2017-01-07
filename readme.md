<h1 align="center">
  <br>
  <img width="500" src="media/logo.svg" alt="Simple Node User Service">
  <br>
  <br>
</h1>

> Extensible microservice for managing user accounts

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

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
