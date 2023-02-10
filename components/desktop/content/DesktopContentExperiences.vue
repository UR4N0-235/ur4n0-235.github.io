<script></script>

<template>
  <div class="container">
    <div class="header">
      <h1>My experiences and academics education</h1>
    </div>

    <div class="experienceContainer">
      <div class="experienceHeader">
        <h1>Jobs</h1>
      </div>

      <div class="card">
        <div class="position">Android Developer</div>
        <div class="row">
          <div class="instituition">
            <p>Upper</p>
          </div>
          <div class="period">
            <p>Jan 2023 to the moment</p>
          </div>
        </div>
        <div class="content">
          <p>I worked building mobile apps</p>
        </div>
      </div>
    </div>

    <div class="experienceContainer">
      <div class="experienceHeader">
        <h1>Academic Education</h1>
      </div>

      <div class="card">
        <div class="position">
          Technician in Computer Science for the Internet
        </div>
        <div class="row">
          <div class="instituition">
            <p>ETEC Professor Armando José Farinazzo</p>
          </div>
          <div class="period">
            <p>Jan 3 2020 to Dec 22 2022</p>
          </div>
        </div>
        <div class="content">
          <p>
            I graduated as a technician in computer science for the internet
          </p>
        </div>
      </div>

      <div class="card">
        <div class="position">Technician in EletroTechnics</div>
        <div class="row">
          <div class="instituition">
            <p>ETEC Professor Armando José Farinazzo</p>
          </div>
          <div class="period">
            <p>Agust 2022 until Dec 2023</p>
          </div>
        </div>

        <div class="content">
          <p>I will be graduate as a technician in eletrotechnics</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/variables.scss';

$card-background-color: rgb(31, 31, 31);

.container {
  width: 100%;
  padding: 0px 20px;

  .header {
    width: 100%;
    background-color: $background-on-header-color;
    padding: 20px;

    h1 {
      font-weight: bold;
      font-size: $font-size-header;
    }
  }

  .experienceContainer {
    width: 100%;
    margin-bottom: 20px;

    .experienceHeader {
      display: block;
      text-decoration: underline whitesmoke;
      // border-bottom: 1px solid whitesmoke;
      padding: 10px;
      font-size: $font-size-tittle;
    }

    .card {
      width: 80%;
      padding: 10px 20px;
      background-color: $card-background-color;
      margin-bottom: 20px;

      border-radius: 20px;
      border: 1px solid white;

      .position {
        font-size: $font-size-tittle;
        margin-bottom: 5px;
      }

      .row {
        font-size: 14px;
        color: whitesmoke;
        display: flex;

        .instituition {
          margin-right: 5px;

          p::after {
            content: ' - ';
          }
        }
      }

      .content {
        font-size: $font-size-content;
      }
    }
  }
}
</style>
