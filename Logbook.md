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

# 2020-01-01

Explored how to use components to generate portions of the scene graph. The vue syntax I've come up with is a bit too verbose: passing some generated values to a nested dom requires a `template(#default="variable")` between the wrapper and the wrappee.

A different approach would have been to make the generator more customizable so the wrappee woudn't need to receive the numbers. That is not very flexible, but can be used for default behavior: start with a 3x3x3 grid with some spread, then add props to override things and template wrapper to get at the generated values. 

The component format is very boilerplaty though. A better approach would be to have a custom format that gets transformed to .vue 

Also tried vue inspector vor dev tools, that breaks quickly with my workflow.

Also: the "compile" pipeline breaks visibly when I make mistakes and is too strict about things that may happen when growing a performance. More forgiving workflow would be nicer: report problems to the server console, not to the front end, keep current version running if compilation fails. Figure this out.