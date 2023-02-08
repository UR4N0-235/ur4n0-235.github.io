<script></script>

<template>
  <div class="container">
    <img src="/planeta.png" alt="urano's planet" />
    <div class="whoami">
      <div class="whatIProgram">Trying to be a FullStack developer</div>
      <div class="userName">Matheus Fernandes</div>
      <p>
        Hello my name is <strong>Matheus</strong>, I'm a brasilian guy, just
        trying to know whatever that I can learn.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$what-I-program-font-color: rgba(173, 173, 173, 0.61);
.container {
  padding: 50px;
  height: 80vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 200px;
  }

  .whoami {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    max-width: 500px;

    .whatIProgram {
      color: $what-I-program-font-color;
      font-size: 15px;
    }
    .userName {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
  }
}
</style>
