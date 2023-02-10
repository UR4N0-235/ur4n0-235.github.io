<script></script>

<template>
  <div class="container">
    <div class="frontendheader">
      <h1>Frontend Skills</h1>
    </div>

    <div class="frontendmain">
      <div class="header">
        <h1>What I Know?</h1>
      </div>

      <div class="content">
        <img src="/icons/computer_white.svg" alt="computer icon" />
        <div>
          <h1>Html, CSS, Javascript and the basic</h1>
          <p>
            Well, I know the basic of web, like HTML5, CSS, JavaScript, and
            somethings like API integration, and offcourse Typescript.
          </p>
        </div>
      </div>

      <div class="content">
        <img src="/icons/construction_white.svg" alt="construction image" />
        <div>
          <h1>Frameworks - Vue3 and Nuxt3</h1>
          <p>
            For a frontend easy to maintain, I think the best choice is Nuxt and
            Vuejs, because they are good to learn, easy and efficiency, so that
            is my favorites frameworks.
          </p>
        </div>
      </div>

      <div class="content">
        <img src="/icons/face_white.svg" alt="icon face" />
        <div>
          <h1>UI/UX</h1>
          <p>
            Well, as can you see in this github portifolio, I'm not so good in
            UI/UX, but I still trying, trying to learn more about colors, and
            font combinations, but honestly it's not something I wantt to delve
            into.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/variables.scss';

.container {
  width: 100%;

  .frontendheader {
    width: 100%;
    background-color: $background-on-header-color;
    padding: 20px;

    h1 {
      font-weight: bold;
      font-size: $font-size-header;
    }
  }

  .frontendmain {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .header {
      margin-bottom: 20px;

      h1 {
        font-weight: bold;
        font-size: $font-size-tittle;
      }
    }

    .content {
      display: flex;
      justify-content: space-evenly;

      margin-bottom: 30px;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;

        h1 {
          font-size: $font-size-tittle;
          font-weight: bold;
          margin-bottom: 10px;
        }

        p {
          font-size: $font-size-content;
        }
      }
    }
  }
}
</style>
