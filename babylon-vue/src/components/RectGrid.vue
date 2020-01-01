<template lang="pug">
div
  template(v-for="i1 in size[0]")
    template(v-for="j1 in size[1]")
      template(v-for="k1 in size[2]")
        RectGridCell(
          :i="i1 - 1" 
          :j="j1 - 1" 
          :k="k1 - 1" 
          :size="size" 
          :spread="spread")
          template(#default="cell")
            slot(:cell="cell")
</template>

<script>
import RectGridCell from "./RectGridCell"

export default {
  data: () => { return { } },
  props: ["size", "spread"],
  components: { RectGridCell }
}
</script>