<template>
  <v-app dark>
    <TopToolbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <BottomNav />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import TopToolbar from "../components/TopToolbar.vue";
import BottomNav from "../components/BottomNav.vue";

@Component({
  components: {
    TopToolbar,
    BottomNav
  }
})
export default class extends Vue {
  // created () {
  //   console.warn('>>> Hello Typescript! <<<')
  // }
}
</script>
