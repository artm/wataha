# 2019-12-30

Why is the docker file multistage? So we can bootstrap:

```
docker-compose build vue-cli
docker-compose run --rm vue-cli vue create .
```

