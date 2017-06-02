# redis

Here, we are getting started with redis using Docker on our localhost and connect to it using ioredis for Node.js.

## Getting started
Run the redis docker image (it will pull the latest version of the image automatically):
```
docker run -d -p6379:6379 --name redis bitnami/redis:latest
```

Parameter explanation:
* `-d` runs the container as a deamon (in the background)
* `-p6379:6379` exposes the redis port so you can reach it from your machine
* `--name redis` will be the container name
* `bitnami/redis:latest` is the image that is being used to spin off the contianer

Run `docker ps` to see what containers are currently running.


## Setup basic Node application
Find an example Node application [here](src/01_node_app).
