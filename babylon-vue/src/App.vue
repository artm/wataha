<template lang="pug">
Scene
  template(v-for="x in [0, 2, -2, 4, -4]")
    template(v-for="y in [0, 2, -2, 4, -4]")
      Box(v-for="z in [0, 2, -2, 4, -4]" :position="[x, y, z]" :key="`${x},${y},${z}`")
</template>

<script>
</script>

<style>
</style>
