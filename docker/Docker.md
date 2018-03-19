# Docker essentials

Commands that you will need regularly when handling Docker containers on your machine.


## Install Docker
Install from the [Docker homepage][1].

[1]: https://store.docker.com/editions/community/docker-ce-desktop-mac

## Pull an image

**Disclaimer:** You could also just `run` a container from a not yet pulled image. It will be pulled automatically.

```sh
docker pull <image-name>:<tag>
```

The `<tag>` is usually the version number. For example: `docker pull redis:3.2.11`

Common images:
* [apache httpd](https://hub.docker.com/_/httpd/)
* [mysql](https://hub.docker.com/_/mysql/)
* [CentOS](https://hub.docker.com/_/centos/)
* [redis](https://hub.docker.com/_/redis/)

Find more images at https://hub.docker.com/.


## Run container from image
The following will run a container by giving it a random id.
```sh
docker run <image-name>
```

Bu using the `--name` argument, you can assign a custom name. So you can easily find your container again.
```sh
docker run --name <container-name> <image-name>
```

**Tip:** To run container in the background, add te `-d` (deamon) argument.

## Execute commands on the container

**1. Find your container**

Lists all running containers.
```sh
docker ps
```

**2. Access container with CLI**

The following runs the shell (`sh`) command on the machine.
```sh
docker exec -ti <container-id> sh
```

The arguments:
* `-i`: Intercative mode. Enables you to enter multiple commands like in your command line.
* `-t`: Allocate a pseudo-TTY ([more](https://stackoverflow.com/a/10346575/90432))

**Example:** Import SQL dump.
```sh
docker exec -ti some-mysql-db mysql -uroot < dump.sql
```
* The _dump.sql_ is lying on your host machine.
* _mysql_ is the command being executed on the container.
* Further, the missing `-p` argument assumes that there is no password required.

## Add tooling to your container

### Option 1: During runtime

Use case: You want to try something out.

You may want to add _vim_ to your running apache container to test some things. This can be done, by sonnecting via `sh` to the container (see previous section.)
Then, you just run
```sh
apt-get update && apt-get install -y vim
```

**Note:** The tool will be gone as soon as the container is stopped. In case you want to keep it, consider adding it to your `Dockerfile` (see [Option 2](#option-2-when-building-the-image)).


### Option 2: When building the image

Use case: You need tools in place in every container.

You will need to create a Dockerfile. That looks like the following:
```Dockerfile
FROM centos7

apt-get update && apt-get install -y vim
```

Now, from wihtin the same directory, build a new image by running
```sh
docker build -t my-vim-image .
```

You can run this image just as every other image.
