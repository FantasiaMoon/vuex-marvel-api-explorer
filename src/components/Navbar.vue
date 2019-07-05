<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/marvel-logo.png" alt="" height="40">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>
