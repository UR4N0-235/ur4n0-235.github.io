<script></script>

<template>
  <div class="aboutMe">
    <div class="perfilPhoto">
      <img src="/me.jpg" alt="my photo" class="myPhoto" />

      <h1>Matheus Fernandes</h1>

      <h3>@UR4N0</h3>
    </div>

    <p>
      Hi all, I'm a programer with 18-years-old, I just love
      Javascript/Typescript but I can work with any else do you need :)
    </p>

    <p>
      I wanna be a good fullStack developer, but today I'm not so good enough,
      but still trying
    </p>

    <div class="mySocialMidias">
      <div class="column">
        <div class="textWithBeforeLogo">
          <img src="/icons/link-solid.svg" />
          <a href="http://github.com/UR4N0-235">github</a>
        </div>

        <div class="textWithBeforeLogo">
          <img src="/icons/location-dot-solid.svg" />
          <p>From Brazil</p>
        </div>
      </div>

      <div class="column">
        <div class="textWithBeforeLogo">
          <img src="/icons/link-solid.svg" />
          <a href="https://www.codingame.com/profile/f06b1646bf9ecd015db52500cbe72be32008793">codingame</a>
        </div>

        <div class="textWithBeforeLogo">
          <img src="/icons/link-solid.svg" />
          <a href="https://tryhackme.com/p/UR4N0">tryhack.me</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutMe {
  height: 70vh;
  padding: 20px;

  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .perfilPhoto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .myPhoto { 
      height: 100px;
      width: 100px;
      margin-bottom: 5px;
    }
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

  .mySocialMidias {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    .column {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .textWithBeforeLogo {
        height: 20px;
        display: flex;
        justify-content: flex-start;

        img {
          height: 100%;
          margin-right: 5px;
        }

        a,
        p {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
