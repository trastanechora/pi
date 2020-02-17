<template>
  <quote-card
    :quote="selectedQuote"
    :get-random-quote="getRandomQuote"
  ></quote-card>
</template>

<script>
const components = {
  QuoteCard: () => import('~/components/QuoteCard')
}

const temp = require(`~/assets/quotedb/quotes1.json`)
const defaultHandler = {
  content: 'Tap untuk memulai',
  author: ':)'
}

export default {
  name: 'Random',
  components,
  layout: 'default',
  data: () => ({
    selectedQuote: temp.quote_list[0] || defaultHandler,
    unProcessedQuoteObject: null,
    processedQuoteObject: null,
    history: [],
    chosenIndex: null
  }),
  async mounted() {
    await this.getQuotes()
    this.getRandomQuote()
  },
  methods: {
    getQuotes() {
      // console.warn('>>> get quotes function is triggered!')
      this.unProcessedQuoteObject = temp.quote_list
      this.processedQuoteObject = null
      // console.warn('### temp ', temp)
      // console.warn('### unProcessedQuoteObject ', this.unProcessedQuoteObject)
      // console.warn('### processedQuoteObject ', this.processedQuoteObject)
    },
    getRandomQuote() {
      // console.warn(
      //   '>>> check unProcessedQuoteObject',
      //   this.unProcessedQuoteObject
      // )
      // console.warn('>>> Check chosenIndex: ', this.chosenIndex)
      // console.warn('### temp ', temp)
      if (this.unProcessedQuoteObject.length > 0) {
        this.getRandomIndex(0, this.unProcessedQuoteObject.length - 1)
        this.selectedQuote = this.unProcessedQuoteObject[this.chosenIndex]
        this.history.push(this.unProcessedQuoteObject[this.chosenIndex])
        this.unProcessedQuoteObject.splice(this.chosenIndex, 1)
      } else {
        this.getQuotes()
      }
      // console.warn('>>> Random quote is: ', this.selectedQuote)
      // console.warn('>>> History quote is: ', this.history)
    },
    getRandomIndex(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      this.chosenIndex = Math.floor(Math.random() * (max - min + 1)) + min
      return true
    }
  }
}
</script>
