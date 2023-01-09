<template>
  <h1>Termin buchen</h1>
  <div class="container-fluid">
    <form>
      <div class="mb-2">
        <label class="me-2">Tag und Uhrzeit</label>
        <input type="datetime-local" id="tag" v-model="datetime" required>
        <div class="invalid-feedback">
          Please provide the datetime.
        </div>
      </div>
      <div class="mb-2">
        <label class="me-2">Leistung</label>
        <select id="leistung" v-model="leistung" required>
          <option value="" selected disabled>Choose...</option>
          <option value="HAARE_WASCHEN">Haare Waschen: 200$</option>
          <option value="HAARE_SCHNEIDEN">Haare Schneiden: 150$</option>
          <option value="HAARE_FAERBEN">Haare Färben: 200$</option>
          <option value="HAARE_FLECHTEN">Haare Flechten: 100$</option>
          <option value="BOX_BRAIDS">Box Braids: 300$</option>
          <option value="KNOTLESS_BRAIDS">Knotless Braids: 300$</option>
          <option value="AMERICAN_STYLE">American Style: 255$</option>
          <option value="HAARE_GLAETTEN">Haare Glätten: 250$</option>
        </select>
        <div class="invalid-feedback">
          Please provide the Leistung.
        </div>
      </div>
      <div>
        <button class="btn btn-primary" type="submit" @click.prevent="saveTermin">Save</button>
      </div>
    </form>
    <div v-if="terminErstellt" class="mt-3">
      <label class="text-info">{{ 'Termin erfolgreich gespeichert ! Reservierungsnummer: ' + reservierungsNummer + '.' }}</label>
      <div class="mb-4">
        <label class="text-info">{{ 'Bitte notieren Sie sich Ihre Reservierungsnummer!' }} </label>
      </div>
    </div>
    <div v-if="error" class="mt-3">
      <label class="text-danger">Termin konnte nicht gespeichert werden, unbekannter Fehler ! </label>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'TermineView.vue',
  data () {
    return {
      datetime: undefined,
      leistung: '',
      terminErstellt: false,
      reservierungsNummer: undefined,
      error: false
    }
  },
  methods: {
    async saveTermin () {
      if (this.datetime && this.leistung) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/salon/termin'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const user = JSON.parse(localStorage.getItem('token'))
        const termin = JSON.stringify({
          userId: user.id,
          datetime: this.datetime,
          leistung: this.leistung
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: termin,
          redirect: 'follow'
        }
        fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(json => {
            this.error = false
            this.reservierungsNummer = json.reservierungsNummer
            this.terminErstellt = true
          })
          .catch(err => {
            console.log(err)
            this.error = true
          })
      }
    }
  },
  beforeMount () {
    if (!localStorage.getItem('token')) {
      router.push('persons')
    }
  }
}
</script>

<style lang="css" scoped>
*{
  margin: 0;
  padding: 0;
}
.background-image{
  background-image: url(https://wallpaperaccess.com/full/813662.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
