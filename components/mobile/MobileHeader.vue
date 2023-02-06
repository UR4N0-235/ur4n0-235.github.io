<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="logo">
      <h1>Matheus Fernandes</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/variables.scss';
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');

.container {
  display: flex;
  justify-content: space-between;

  .logo,
  .logo h1 {
    display: inline;
  }
}
</style>
