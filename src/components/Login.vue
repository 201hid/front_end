<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div v-if="error" style="color: red;">{{ error }}</div>
      <div v-if="success" style="color: green;">{{ success }}</div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      error: '',
      success: ''
    };
  },
  methods: {
    login() {
      const credentials = {
        username: this.username,
        password: this.password
      };


      axios.post('http://localhost:8080/login', credentials)
        .then(response => {
          this.success = response.data.success;
          this.error = '';
          
        })
        .catch(error => {
          this.error = error.response.data.error;
          this.success = '';
        });
    }
  }
};
</script>
