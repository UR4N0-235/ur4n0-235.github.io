<script>
export default {
  data() {
    return {
      buttonMenuNow: {
        home: true,
        frontendskills: false,
        backendskills: false,
        portifolio: false,
        contact: false,
      },
    }
  },
  mounted() {},
}
</script>

<template>
  <!-- <header> -->
  <div class="container">
    <div class="logo">
      <h1>Matheus Fernandes</h1>
    </div>
  </div>
  <!-- </header> -->
</template>

<style lang="scss" scoped>
@import 'assets/variables.scss';

.container {
  position: fixed;
  width: 100vw;
  height: 60px;
  padding: 20px;

  background-color: $background-default-color;
  display: flex;
  justify-content: flex-end;

  .logo {
    display: inline;

    h1 {
      display: inline;
      font-size: $font-size-tittle;
    }
  }
}
</style>
