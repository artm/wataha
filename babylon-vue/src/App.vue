<template lang="pug">
  Scene(fog="exp" fogColor="#000" :fogDensity=".15")
    Property(name="clearColor" color="#000")
    Camera(type="arcRotate")
    HemisphericLight
    Entity
      Animation(property="rotation.x" :duration="12" :end="Math.PI * 2")
      Animation(property="rotation.y" :duration="12" :end="Math.PI * 4")
      template(v-for="x in [-6, -4, -2, 0, 2, 4, 6]")
        template(v-for="y in [-6, -4, -2, 0, 2, 4, 6]")
          Box(v-for="z in [-6, -4, -2, 0, 2, 4, 6]" :position="[x, y, z]")
            Material(:diffuse="[(6+x)/12 , (6+y)/12, (6+z)/12]" :metallic="0.5" :alpha=".97")
</template>

<script>
</script>

<style>
</style>
