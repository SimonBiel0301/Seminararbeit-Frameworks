<template>
  <div class="card">
    <p class="card-title">{{ title }}</p>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: [String, Number]
  }
}
</script>
