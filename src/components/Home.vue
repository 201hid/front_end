<template>

  <div class="'container'">
      <h3 v-if="user">Hello, {{ user }} {{ username.firstname }}</h3>
      <h3 v-if="!user">You are not logged in!!</h3>


  </div>

</template>

<script>

export default {
  name:'HomeComponent',
  props:['user']//getting from parent property
  

}
</script>