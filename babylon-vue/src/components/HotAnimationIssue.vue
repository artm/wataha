<template lang="pug">
Scene
  Camera(type="arcRotate")
  HemisphericLight
  Box
    Animation(property="rotation.z" :duration="60" :end="Math.PI * 2")
</template>

<script>
</script>