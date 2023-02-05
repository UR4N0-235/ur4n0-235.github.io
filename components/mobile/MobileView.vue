<script>
import MobileContentHome from './content/MobileContentHome.vue'
import MobileContentBackend from './content/MobileContentBackend.vue'
import MobileContentFrontend from './content/MobileContentFrontend.vue'
import MobileContentContact from './content/MobileContentContact.vue'

export default {
  components: {
    MobileContentHome,
    MobileContentBackend,
    MobileContentFrontend,
    MobileContentContact,
  },
  data() {
    return {
      currentTab: 'MobileContentHome',
      tabs: [
        'MobileContentHome',
        'MobileContentBackend',
        'MobileContentFrontend',
        'MobileContentContact',
      ],
      touch: {
        startX: 0,
        endX: 0,
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
    })
    this.$el.addEventListener('touchstart', (event) => this.onTouchStart(event))
    this.$el.addEventListener('touchmove', (event) => this.onTouchMove(event))
    this.$el.addEventListener('touchend', () => this.onTouchEnd())
  },
  methods: {
    changeTab(tabName) {
      this.currentTab = tabName
    },
    onTouchStart(event) {
      this.touch.startX = event.touches[0].clientX
      this.touch.endX = 0
    },
    onTouchMove(event) {
      this.touch.endX = event.touches[0].clientX
    },
    onTouchEnd() {
      if (
        Math.abs(this.touch.endX - this.touch.startX) > 100 &&
        this.touch.endX !== 0
      ) {
        // console.log(`this.touch.endX ${this.touch.endX}`)
        // console.log(`this.touch.startX ${this.touch.startX}`)
        if (this.touch.endX < this.touch.startX) {
          // console.log("next")
          this.switchToNextTab()
        } else {
          // console.log("previus")
          this.switchToPreviusTab()
        }
      }
    },
    switchToNextTab() {
      const index = this.tabs.indexOf(this.currentTab)
      if (index < this.tabs.length - 1) {
        this.currentTab = this.tabs[index + 1]
      }
    },
    switchToPreviusTab() {
      const index = this.tabs.indexOf(this.currentTab)
      if (index !== 0) {
        this.currentTab = this.tabs[index - 1]
      }
    },
  },
}
</script>

<template>
  <div>
    <header>
      <MobileHeader :current-tab="currentTab" @change-tab="changeTab" />
    </header>

    <main>
      <component :is="currentTab"></component>
    </main>

    <footer>
      <MobileFooter />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
* {
  transition: all 0.5s ease;
}
</style>
