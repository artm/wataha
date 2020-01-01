<template lang="pug">
Scene(fog="exp" fogColor="#000" :fogDensity=".15")
  Property(name="clearColor" color="#000")
  Camera(type="arcRotate")
  HemisphericLight
  Entity
    Animation(property="rotation.x" :duration="12" :end="Math.PI * 2")
    Animation(property="rotation.y" :duration="12" :end="Math.PI * 4")
    RectGrid(:size="[5,5,5]" :spread="1.5")
      template(#default="grid")
        Box
          Material(:diffuse="grid.cell.dv" :metallic=".3" :alpha=".9")
</template>

<script>
import RectGrid from "./components/RectGrid.vue"

export default {
  components: { RectGrid }
}
</script>
