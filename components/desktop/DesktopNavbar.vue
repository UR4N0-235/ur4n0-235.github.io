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
    <nav>
      <ul>
        <li>Home</li>
        <li>Backend Skills</li>
        <li>Frontend Skills</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
  <!-- </header> -->
</template>

<style lang="scss" scoped>
@import 'assets/variables.scss';

.container {
  display: flex;
  justify-content: space-between;

  .logo {
    display: inline;

    h1 {
      display: inline;
      font-size: $font-size-tittle;
    }
  }

  nav {
    width: 60%;

    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
    }

    li {
      display: inline-block;
    }

    a {
      display: block;
      text-decoration: none;
    }
  }
}
</style>
