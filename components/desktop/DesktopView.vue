<script>
export default {
  data() {
    return {
      // currentTab: "Home",
      // tabs: [, Backend, Frontend, Contact]
    }
  },
  mounted() {},
  methods: {},
}
</script>

<template>
  <div>
    <header>
      <DesktopHeader />
    </header>

    <main>
      <div class="aboutMeContainer">
        <DesktopAboutme />
      </div>
      <div class="content">
        <DesktopContentHome />
        <DesktopContentFrontend />
        <DesktopContentBackend />
        <DesktopContentPortifolio />
        <DesktopContentContact />
      </div>
    </main>

    <footer>
      <DesktopFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/variables.scss';

$about-me-top-spacing: 60px;
$about-me-width: 30vw;

main {
  color: white;
  .aboutMeContainer {
    position: fixed;
    top: $about-me-top-spacing;
    height: calc(100vh - $about-me-top-spacing);
    width: $about-me-width;

    background-color: $background-default-color;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    position: relative;
    z-index: -1;
    padding: 20px;
    min-height: 100vh;
    width: 70vw;
    left: $about-me-width;
    top: $about-me-top-spacing;
    background-color: $background-default-color;
  }
}
</style>
