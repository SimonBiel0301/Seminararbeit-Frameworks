<template>
  <div>
    <div>
      <h1>Vue Testanwendung</h1>
      <h2>HouseTech</h2>
    </div>
    <div class="content">
      <div class="vertical">
        <button @click="incrementCounter">Klick mich!</button>
        <button @click="resetCounter">Selbstzerstörung</button>
      </div>
      <div id="card-container">
        <CardCounter :title="'Klicks gegeben'" :content="counter" />
      </div>
    </div>
  </div>
</template>

<script>
import CardCounter from './components/CardCounter.vue'

export default {
  components: {
    CardCounter
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter() {
      this.counter++
    },
    resetCounter() {
      this.counter = 0
    }
  }
}
</script>
