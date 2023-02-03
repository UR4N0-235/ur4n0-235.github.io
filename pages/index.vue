<script>
export default {
  data() {
    return {
      mobileView: true
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 800;
    }
  },
  mounted() {
    if (process.client) { // only run this in client-site, where have an window object
      this.handleView()
    }
  }
}
</script>

<template>
  <div>
    <header>
      <DesktopNavbar v-if="!mobileView" />
      <MobileNavbar v-if="mobileView" />
    </header>
  </div>
</template>

<style lang="scss">
@import "assets/variables.scss";

header {
  padding: 20px 20px;
  background-color: $background-default-color;
  color: $font-color;
}
</style>