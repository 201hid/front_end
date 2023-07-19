<template>
    <form @submit.prevent="handleSubmit">
      <h3>Sign Up</h3>
  
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" v-model="username" placeholder="Username" />
      </div>
  
      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control" v-model="fname" placeholder="First Name" />
      </div>
  
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" v-model="lname" placeholder="Last Name" />
      </div>
  
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="email" placeholder="Email" />
      </div>
  
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="pword" placeholder="Password" />
      </div>
  
      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" class="form-control" v-model="rpword" placeholder="Confirm Password" />
      </div>
  
      <button class="bt btn-primary btn-block">Sign Up</button>
    </form>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "RegisterComponent",
    data() {
      return {
        username: "",
        fname: "",
        lname: "",
        email: "",
        pword: "",
        rpword: "",
      };
    },
    methods: {
      async handleSubmit() {
        const data = {
          username: this.username,
          firstname: this.fname,
          lastname: this.lname,
          email: this.email,
          password: this.pword,
          rpword: this.rpword,
        };
  
        try {
          const response = await axios.post("http://localhost:8080/register", data);
          console.log(response);
          this.$router.push("/login");
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  