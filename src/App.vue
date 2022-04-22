<template>
  <NavbarMain 
    :account="AccountModel"
    @update-auth-notification="updateAuthState"
  />
  <router-view 
    :account="AccountModel"
    @update-auth-notification="updateAuthState"
  />
</template>

<script>
// @ is an alias to /src
import NavbarMain from '@/components/NavbarMain.vue'

export default {
  components: {
    NavbarMain,
  },
  data () {
    return {
      AccountModel: {
        auth_user: "",
        is_authenticated: "",
      }
    }
  },
  methods: {
    updateAuthState(data) {
      this.AccountModel.is_authenticated = data
    }
  },
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
