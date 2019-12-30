# 2019-12-30

Why is the docker file multistage? So we can bootstrap:

```
# first we can only build the generic image
docker-compose build vue-cli

# then we can use it to generate the project
docker-compose run --rm vue-cli vue create .

# finally we can build the rest
docker-compose build

# and start the environment
docker-compose up
```

Now the app will be accessible at http://localhost:8080/

## Problem: no global babylon

How can I make a globally defined BABYLON available inside the component vue file?

Huh, but it already exists: https://github.com/Beg-in/vue-babylonjs

Documented here: https://vue-babylonjs.com/#/home

How to add this to my project?

```
docker-compose run --rm app yarn add vue-babylonjs
```