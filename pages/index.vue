<script>
export default {
  data() {
    return {
      mobileView: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.mobileView = window.innerWidth <= 800
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.mobileView = window.innerWidth <= 800
    },
  },
}
</script>

<template>
  <div>
    <DesktopView v-if="!mobileView" />
    <MobileView v-if="mobileView" />
  </div>
</template>

<style lang="scss">
@import 'assets/variables.scss';

header {
  padding: 20px 20px;
  background-color: $background-default-color;
  color: $font-color;
}
</style>
