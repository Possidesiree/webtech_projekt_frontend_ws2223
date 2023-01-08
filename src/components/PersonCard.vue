<template>
  <div class="card h-100">
    <img :src="getAvatar(person)" class="card-img-top" :alt="person.firstName + ' ' + person.lastName">
    <div class="card-body">
      <h5 class="card-title">{{ person.firstName }} {{ person.lastName }}</h5>
      <p class="card-text">
        {{ person.firstName }} {{ person.lastName }} ist ein(e) {{ person.rolle }} ist über folgende emailAdresse erreichbar: {{ person.email }}.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  methods: {
    getAvatar (person) {
      if (person.rolle === 'MITARBEITER') {
        return require('../assets/mitarbeiter.png')
      } else if (person.rolle === 'KUNDE') {
        return require('../assets/kunde.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
