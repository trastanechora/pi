<template>
  <v-app dark>
    <TopToolbar></TopToolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TopToolbar from '../components/TopToolbar.vue'

@Component({
  name: "emptyLayout",
  components: {
    TopToolbar
  }
})
export default class extends Vue {
}
</script>
