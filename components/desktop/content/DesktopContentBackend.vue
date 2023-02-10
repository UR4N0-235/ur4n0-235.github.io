<script></script>

<template>
  <div class="container">
    <div class="backendheader">
      <h1>Backend Skills</h1>
    </div>

    <div class="backendmain">
      <div class="header">
        <h1>What I Know?</h1>
      </div>

      <div class="content">
        <img src="/icons/storage_white.svg" alt="computer icon" />
        <div>
          <h1>PostgreSQL and pure SQL consult</h1>
          <p>
            When I learned about databases, I had a special love for pure sql
            queries because it is so beautiful and can be so much faster than
            many of the ORM available to use, so I very much like SQL and admin
            databases
          </p>
        </div>
      </div>

      <div class="content">
        <img
          src="/icons/enhanced_encryption_white.svg"
          alt="construction image"
        />
        <div>
          <h1>Password encoding - Bcrypt</h1>
          <p>
            I think every site has little security when the developer knows very
            little about security. So when I did learn about backend and did
            some CRUD, I also learned about how to use hash algorithms like
            Bcrypt to create a password hash encoder and personally that's my
            favorite implementation on security on my sites
          </p>
        </div>
      </div>

      <div class="content">
        <img src="/icons/generating_tokens_white.svg" alt="icon face" />
        <div>
          <h1>Json Web Tokens and user authentication</h1>
          <p>
            unfortunately when we talk about authentication, the only one I know
            and know how to use is JWT, for me enough, but I need to improve
            that knowledge,.
          </p>
        </div>
      </div>

      <div class="content">
        <img src="/icons/api_white.svg" alt="icon face" />
        <div>
          <h1>API RESTful</h1>
          <p>
            the API RESTful pattern is by far my favorite because it brings
            security and divides responsibilities at the time of code
            production, so I learned how to build and implement an API RESTful
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

  .backendheader {
    width: 100%;
    background-color: $background-on-header-color;
    padding: 20px;

    h1 {
      font-weight: bold;
      font-size: 30px;
    }
  }

  .backendmain {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .header {
      margin-bottom: 20px;

      h1 {
        font-weight: bold;
        font-size: 25px;
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
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
