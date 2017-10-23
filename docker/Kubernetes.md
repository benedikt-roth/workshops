# Kubernetes Commands

## List containers
### List all
```
kubectl get pods --namespace=<namespace> --context=<context>
```

### Filter by image name
```
kubectl get pods --namespace=<namespace> --context=<context> -lapp=<image name>
```

### Tips
Show more information using `-o wide`.


## Manage Environments

### Edit container deployment configuration
```
kubectl edit deployments --namespace=<namespace> --context=<context> <image name>
```

### Shutdown service
**Info:** This might be useful if you want to reproduce an error or test some fallback logic.

To do this, you need to scale down the number of running containers to zero.

Steps:
1. [Edit][1] deployment configuration
2. Set `spec::replicas` to `0`
3. Write and close config file (`:wq`)


[1]: #edit-container-deployment-configuration
