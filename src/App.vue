<template>
    <div id="app">
  <!--<v-app>-->
    <!--<v-app-bar-->
      <!--app-->
      <!--color="primary"-->
      <!--dark-->
    <!--&gt;-->
      <!--<div class="d-flex align-center">-->
        <!--<v-img-->
          <!--alt="Vuetify Logo"-->
          <!--class="shrink mr-2"-->
          <!--contain-->
          <!--src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
          <!--transition="scale-transition"-->
          <!--width="40"-->
        <!--/>-->

        <!--<v-img-->
          <!--alt="Vuetify Name"-->
          <!--class="shrink mt-1 hidden-sm-and-down"-->
          <!--contain-->
          <!--min-width="100"-->
          <!--src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
          <!--width="100"-->
        <!--/>-->
      <!--</div>-->

      <!--<v-spacer />-->

      <!--<v-btn-->
        <!--href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
        <!--target="_blank"-->
        <!--text-->
      <!--&gt;-->
        <!--<span class="mr-2">Latest Release</span>-->
        <!--<v-icon>mdi-open-in-new</v-icon>-->
      <!--</v-btn>-->
    <!--</v-app-bar>-->

    <!--<v-content>-->

        <!--<div v-if="isIncludeCurrentHref('poljz')">-->
          <!--<PoljzovateljGridCard />-->
        <!--</div>-->
        <!--<div v-if="isIncludeCurrentHref('rolj')">-->
          <!--<RoljGridCard />-->
        <!--</div>-->
        <!--<div v-if="isIncludeCurrentHref('razr')">-->
          <!--<RazrGridCard />-->
        <!--</div>-->
        <router-view />

    <!--</v-content>-->
  <!--</v-app>-->
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import PoljzovateljGridCard from './components/PoljzovateljGridCard'
import RoljGridCard from './components/RoljGridCard'
import RazrGridCard from './components/RazrGridCard'

export default {
  name: 'App',

  components: {
      PoljzovateljGridCard,
      RoljGridCard,
      RazrGridCard
  },

  data: () => ({
      tab: null,
  }),

    // watch: {
    //     $route (n, o) {
    //         if (n.path.includes('poljz')) {
    //             this.tab = 1
    //             //var href = window.location.href
    //             console.log('this.tab = 1')
    //         }
    //         if (n.path.includes('rolj')) {
    //             this.tab = 2
    //             console.log('this.tab = 2')
    //         }
    //         if (n.path.includes('razr')) {
    //             this.tab = 3
    //             console.log('this.tab = 3')
    //         }
    //     }
    // },

    methods: {
        isIncludeCurrentHref (url) {
          var href = window.location.href
          return href.includes(url)
      }
    }

};
</script>

<style>

    @import './colorVariables.css';
    @import './styles.css';

</style>