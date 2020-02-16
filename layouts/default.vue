<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon
              >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
            >
          </v-btn>
          <v-list-item-content @click.stop="miniVariant = !miniVariant">
            <v-list-item-title v-text="'Lipat'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-cogs</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch
              v-model="$vuetify.theme.dark"
              :dense="true"
              class="mx-2"
            ></v-switch>
          </v-list-item-action>
          <v-list-item-title class="right-menu-text"
            >Mode Gelap</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span class="footer-text">{{ title }} &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Selamat Datang!',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspirasi',
          to: '/inspire'
        },
        {
          icon: 'mdi-gesture-tap',
          title: 'Tap Acak',
          to: '/random'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: process.env.app_short_title || 'Vuetify.js'
    }
  }
}
</script>
