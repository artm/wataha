<template lang="pug">
Entity
  Animation(v-if="x" property="rotation.x" :duration="x" :end="Math.PI *2")
  Animation(v-if="y" property="rotation.y" :duration="y" :end="Math.PI *2")
  Animation(v-if="z" property="rotation.z" :duration="z" :end="Math.PI *2")
  slot
</template>

<script>
export default {
  data() { return {} },
  props: ["x", "y", "z"]
}
</script>