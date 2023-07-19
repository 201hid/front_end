<template>
      <nav class="navbar navbar-expand navbar-light fixed-top"> 
    <div class="'container'">
      <router-link to="./" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!user">
            <li class="'nav-item'">
                <router-link to="./login" class="nav-link">login</router-link>
            </li>
            <li class="'nav-item'">
                <router-link to="./register" class="nav-link">Sign up</router-link>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="user">
            <li class="'nav-item'">
                <router-link to="./login" class="nav-link">logout</router-link>
            </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name:'NavComponent',
    props:['user']//getting from parent property

}
</script>