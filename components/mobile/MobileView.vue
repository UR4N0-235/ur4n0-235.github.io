<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<template>
  <div>
    <header>
      <MobileHeader/>
    </header>

    <main>
      <MobileContentHome/>
      <MobileContentFrontend/>
      <MobileContentBackend/>
      <MobileContentPortifolio/>
      <MobileContentContact/>
    </main>

    <footer>
      <MobileFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
* {
  transition: all 0.5s ease;
}
</style>
