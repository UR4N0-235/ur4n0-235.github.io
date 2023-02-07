<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <div class="container">
    <div class="aboutMe">
      <img src="/me.jpg" alt="my photo" class="myPhoto" />

      <br />

      <h1>Matheus Fernandes</h1>

      <br />

      <h3>@UR4N0</h3>

      <br />

      <p>
        Hi all, I'm a programer with 18-years-old, I just love
        Javascript/Typescript but I can work with any else do you need :)
      </p>

      <br />

      <p>
        I wanna be a good fullStack developer, but today I'm not so good enough,
        but still trying
      </p>

      <div class="textWithFrontalLogo">
        <img src="/icons/link-solid.svg" />
        <a href="http://github.com/UR4N0-235">My github</a>
      </div>

      <div class="textWithFrontalLogo">
        <img src="/icons/location-dot-solid.svg" />
        <p>Brazil</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/variables.scss';

.container {
  background-color: $background-default-color;
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: center;

  .aboutMe {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .myPhoto {
      height: 100px;
      width: 100px;
    }

    h1 {
      color: white;
    }

    h3 {
      color: white;
    }

    p {
      color: white;
      font-size: 15px;
    }
    .textWithFrontalLogo {
      height: 20px;
      display: flex;
      justify-content: space-between;

      img {
        height: 100%;
      }
      a,
      p {
        font-size: 15px;
      }
    }
  }
}
</style>
