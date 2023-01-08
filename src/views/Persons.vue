<template>
  <form v-if="!authenticated">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="text" class="form-control" id="email" v-model="email" required>
      <div class="invalid-feedback">
        Please provide the email.
      </div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" v-model="password" required>
      <div class="invalid-feedback">
        Please provide the password.
      </div>
    </div>
    <div>
      <button class="btn btn-primary" type="submit" @click.prevent="authenticate">Login</button>
    </div>
  </form>
  <div v-else>
    <button class="btn btn-primary" @click.prevent="logout">Logout</button>
  </div>
  <div v-if="error" class="mt-3">
    <label class="text-danger">Login Fehler ! </label>
  </div>
  <persons-create-form></persons-create-form>
</template>

<script>
import PersonsCreateForm from '@/components/PersonsCreateForm'
import router from '@/router'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Persons',
  components: {
    PersonsCreateForm
  },
  data () {
    return {
      email: '',
      password: '',
      error: false,
      authenticated: localStorage.getItem('token') != null
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      router.push('termine')
    },
    async authenticate () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/authenticate'
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const termin = JSON.stringify({
        email: this.email,
        password: this.password
      })
      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: termin,
        redirect: 'follow'
      }
      const response = await fetch(endpoint, requestOptions)
      this.handleResponse(response)
    },
    handleResponse (response) {
      if (response.ok) {
        this.error = false
        debugger
        localStorage.setItem('token', JSON.stringify(response.json))
        router.push('termine')
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style scoped>

</style>
