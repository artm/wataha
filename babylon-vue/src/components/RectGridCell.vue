<template lang="pug">
Entity(:position="[ii * spread, jj * spread, kk * spread]")
  template
    slot(
      :i="i" :j="j" :k="k"
      :v="[i, j, k]"
      :ii="ii" :jj="jj" :kk="kk"
      :vv="[ii, jj, kk]"
      :di="di" :dj="dj" :dk="dk"
      :dv="[di, dj, dk]"
    )
</template>

<script>
export default {
  data() { return {} },
  props: ["size", "spread", "i", "j", "k"],
  computed: {
    ii() { return this.i - this.size[0]/2 + .5; },
    jj() { return this.j - this.size[1]/2 + .5; },
    kk() { return this.k - this.size[2]/2 + .5; },
    di() { return this.i / this.size[0] },
    dj() { return this.j / this.size[1] },
    dk() { return this.k / this.size[2] },
  }
}
</script>