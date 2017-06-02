# redis

Here, we are getting started with redis using Docker on our localhost and connect to it using ioredis for Node.js.

## Getting started
Pull the prebuild redis image using
```
docker pull bitnami/redis:latest
```

Run the redis docker image using
```
docker run -d -p6379:6379 --name redis bitnami/redis:latest
```

## Setup basic Node application
Find an example Node application [here](src/01_node_app).
