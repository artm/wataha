<template lang="pug">
div
  template(v-for="i1 in size[0]")
    template(v-for="j1 in size[1]")
      template(v-for="k1 in size[2]")
        slot(
          :i="i1 - 1" :j="j1 - 1" :k="k1 - 1" 
          :ii="i1 - (size[0] + 1)/2" :jj="j1 - (size[1] + 1)/2" :kk="k1 - (size[2] + 1)/2"
          :di="(i1 - 1)/size[0]" :dj="(j1 - 1)/size[1]" :dk="(k1 - 1)/size[2]"
        )
</template>

<script>
export default {
  data: () => { return { } },
  props: ["size"]
}
</script>