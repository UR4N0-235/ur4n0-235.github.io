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
                contact: false
            }
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <!-- <header> -->
    <div class="container">
        <div class="logo">
            <h1>Matheus Fernandes</h1>
        </div>

        <div class="menuBtn" @click="showNav = !showNav" v-if="!showNav">
            <i src="/icons/menu.png"></i>
        </div>

        <nav v-if="showNav">
            <div class="menuBtn" @click="showNav = !showNav">
                <i src="/icons/closebtn.svg"></i>
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
@import "assets/variables.scss";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css");

.container {
    display: flex;
    justify-content: space-between;

    .logo,
    .logo h1 {
        display: inline;
    }

    .menuBtn {
        width: 14px;
        height: 16px;

        i {
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