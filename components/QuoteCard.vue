<template>
  <v-card class="quote-card">
    <v-layout>
      <v-flex class="text-center" @click="getRandomQuote">
        <blockquote class="blockquote">
          <!-- &#8220;{{ quote.content }}&#8221; -->
          <p v-for="paragraph in quote.content" :key="paragraph.id">
            {{ paragraph }}
          </p>
          <footer>
            <small>
              <em>&mdash;{{ quote.author.name }}</em>
            </small>
          </footer>
        </blockquote>
      </v-flex>
    </v-layout>
  </v-card>
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
  },
  mounted() {
    console.warn('>>> Check quote: ', this.quote)
  }
}
</script>
