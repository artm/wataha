<template lang="pug">
  Scene
    Camera
    HemisphericLight(diffuse="#0000FF")
    Entity(:position="[0, 0, 5]")
      Animation(property="rotation.x" :duration="5" :end="Math.PI * 2")
      Animation(property="rotation.y" :duration="5" :end="Math.PI * 2")
      Animation(property="rotation.z" :duration="5" :end="Math.PI * 2")
      PointLight(diffuse="#FF0000")
      template(v-for="x in [0, 4, -4]")
        template(v-for="y in [0, 4, -4]")
          Box(v-for="z in [0, 4, -4]" :position="[x, y, z]" :key="`${x},${y},${z}`")
</template>

<script>
</script>

<style>
</style>
