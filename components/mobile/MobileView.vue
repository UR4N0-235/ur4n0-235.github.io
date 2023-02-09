<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<template>
  <div>
    <header>
      <MobileHeader />
    </header>

    <main>
      <MobileContentHome />
      <MobileContentFrontend />
      <MobileContentBackend />
      <MobileContentPortifolio />
      <MobileContentContact />
    </main>

    <footer>
      <MobileFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/variables.scss';

main {
  color: white;
  background-color: $background-default-color;
}
</style>
