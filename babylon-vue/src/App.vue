<template lang="pug">
Scene(fog="exp" fogColor="#000" :fogDensity=".15")
  Property(name="clearColor" color="#000")
  Camera(type="arcRotate")
  HemisphericLight
  Entity
    Animation(property="rotation.x" :duration="12" :end="Math.PI * 2")
    Animation(property="rotation.y" :duration="12" :end="Math.PI * 4")
    RectGrid(:size="[5,5,5]")
      template(#default="c")
        Box(:position="[c.ii * 2, c.jj * 2, c.kk * 2]")
          Material(:diffuse="[c.di, c.dj, c.dk]" :metallic=".3" :alpha=".5")
</template>

<script>
import RectGrid from "./components/RectGrid.vue"

export default {
  components: { RectGrid }
}
</script>

