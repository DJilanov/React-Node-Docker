# Pixelgram

Pixelgram is an image sharing service.

## Table of contents

- [Pixelgram](#pixelgram)
  - [Table of contents](#table-of-contents)
  - [Stack](#stack)
  - [Screenshots](#screenshots)
  - [Setup](#setup)
    - [Clone the repository](#clone-the-repository)
    - [Build and run](#build-and-run)
  - [API](#api)
  - [Contact](#contact)
  - [License](#license)

## Stack

- Angular front end
- Express back end
- MongoDB database
- NGINX
- Docker

## Screenshots

Screenshots are available in the [`screenshots`](screenshots) directory.

## Setup

### Clone the repository

Clone the repository to your filesystem

```
$ git clone git@github.com:robbdimitrov/pixelgram.git
$ cd pixelgram
```

### Build and run

Build images

```
$ docker-compose build
```

Run containers

```
$ docker-compose up
```

Stop containers

```
$ docker-compose down
```

## API

The API documentation is available [here](API.md).

## Contact

[Dimitar Jilanov](http://engineering.jilanov.com)

## License

Copyright (c) Dimitar Jilanov.

Licensed under the [MIT](LICENSE) License.
