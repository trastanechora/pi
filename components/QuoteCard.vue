<template>
  <v-layout>
    <v-flex class="text-center" @click="getRandomQuote">
      <blockquote class="blockquote">
        &#8220;{{ quote.content }}&#8221;
        <footer>
          <small>
            <em>&mdash;{{ quote.author }}</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      default: null
    },
    getRandomQuote: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
