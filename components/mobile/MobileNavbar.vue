<script>
export default {
  data() {
    return {
      showNav: false,
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
  methods: {},
}
</script>

<template>
  <!-- <header> -->
  <div class="container">
    <div class="logo">
      <h1>Matheus Fernandes</h1>
    </div>

    <div v-if="!showNav" class="menuBtn" @click="showNav = !showNav">
      <img src="/icons/menu.png" alt="button to open menu" />
    </div>

    <nav v-if="showNav">
      <div class="menuBtn" @click="showNav = !showNav">
        <img src="/icons/closebtn.svg" alt="button to close menu" />
      </div>

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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');

.container {
  display: flex;
  justify-content: space-between;

  .logo,
  .logo h1 {
    display: inline;
  }

  .menuBtn {
    width: 24px;
    height: 26px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    right: 20px;
    top: 20px;

    background-color: $background-default-color;
    width: 30%;
    height: 30vh;
    transition-delay: 3s;

    .menuBtn {
      align-self: flex-end;
    }

    ul {
      height: calc(100% - 16px);
      margin-left: 14px;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
    }
  }
}
</style>
