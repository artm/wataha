<template lang="pug">
Scene(fog="exp" fogColor="#000" :fogDensity=".15")
  Property(name="clearColor" color="#000")
  Camera(type="arcRotate")
  HemisphericLight
  Entity
    Animation(property="rotation.x" :duration="60" :end="Math.PI * 2")
    Animation(property="rotation.y" :duration="60" :end="Math.PI * 8")
    RectGrid(:size="[5,5,5]" :spread="3")
      template(#default="grid")
        IcoSphere
          Animation(property="rotation.z" :duration="10" :end="Math.PI * 2")
          Animation(property="rotation.x" :duration="5" :end="Math.PI * 4")
          Animation(property="material.alpha" :duration="5")
            Key(frame="0%" :value="0.2")
            Key(frame="50%" :value="0.95")
            Key(frame="100%" :value="0.2")
          Material(:diffuse="grid.cell.dv" :metallic="0.75" :alpha=".5")
</template>

<script>
import RectGrid from "./components/RectGrid.vue"

export default {
  components: { RectGrid }
}
</script>
