<template lang="pug">
Scene(fog="exp" fogColor="#000" :fogDensity=".1")
  Property(name="clearColor" color="#000")
  Camera(type="arcRotate")
  HemisphericLight
  Roto(:x="17" :y="180")
    RectGrid(:size="[5,5,5]" :spread="2")
      template(#default="grid")
        Roto(:x="30" :y="50")
          Box
            Animation(property="material.alpha" :duration="7")
              Key(frame="0%" :value="0.2")
              Key(frame="50%" :value="0.95")
              Key(frame="100%" :value="0.2")
            Material(:diffuse="grid.cell.dv" :metallic="0.75" :alpha=".5")
</template>

<script>
import RectGrid from "./RectGrid.vue"
import Roto from "./Roto.vue"

export default {
  components: { RectGrid, Roto }
}
</script>
