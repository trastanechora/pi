<template>
  <v-bottom-navigation v-model="activeItem" app fixed grow color="primary">
    <v-btn v-for="(item, i) in items" :key="i" :to="item.to" router exact>
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Menus } from "../types";

@Component
export default class BottomNav extends Vue {
  activeItem: string = "top";
  items: Menus[] = [
    {
      icon: "mdi-star",
      title: "Top Stories",
      to: "/"
    },
    {
      icon: "mdi-code-not-equal-variant",
      title: "Code Examples",
      to: "/code-examples"
    },
    {
      icon: "mdi-heart",
      title: "Favorites",
      to: "/my-favorites"
    }
  ];
}
</script>
