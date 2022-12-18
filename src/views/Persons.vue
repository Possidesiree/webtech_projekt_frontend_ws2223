<template>
  <h1>Welcome to Persons</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="person in persons" :key="person.id">
        <div class="card h-100">
          <img :src="getAvatar(person)" class="card-img-top" :alt="person.name">
          <!-- <img :src="getAvatar(person)" class="card-img-top" :alt="person.firstName + ' ' + person.lastName">-->
          <div class="card-body">
            <p class="card-text">
              {{ person.name }} ist ein(e) {{ person.rolle }} , wohnt in {{person.adresse}}
              und ist über folgende emailAdresse erreichbar: {{ person.email }}.
              <!--{{ person.firstName }} {{ person.lastName }} ist {{ person.friseur ? 'friseur' : 'nicht friseur' }} und
              hat {{ person.pets.length }} Friseur_diplom(e).-->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Persons',
  data () {
    return {
      persons: [
        {
          id: 10,
          name: 'Max Mustermann',
          adresse: 'sandstr.45, 12342 Berlin',
          email: 'muster.23@gmail.com',
          rolle: 'MITARBEITER'
        },
        {
          id: 11,
          name: 'Lola Meist',
          adresse: 'boringstr.34, 89772 Berlin',
          email: 'meislo22@gmail.com',
          rolle: 'KUNDE'
        }
      ]
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
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/persons', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(person => {
        this.persons.push(person)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
