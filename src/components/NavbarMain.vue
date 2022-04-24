<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/">
      <a class="navbar-brand">resume</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <div v-if="isauthenticated">
            <li class="nav-item">
              <router-link to="/home">
                <a class="nav-link active" aria-current="page">Home</a>
              </router-link>
            </li>
          </div>
          <li class="nav-item">
            <router-link to="/about">
              <a class="nav-link">About</a>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex flex-row-reverse bd-highlight">
        <div class="p-2 bd-highlight">{{authuser}}</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMain',
  props: {
    account: {
      type : Object,
    }
  },
  data () {
    return {
      AccountModel: {
        is_authenticated: "",
        auth_account: "",
      },
    }
  },
  updateed () {
    this.syncIsauthenticated()
    this.syncAuthuser()
  },
  mounted () {
    //this.authCheck()
    this.syncIsauthenticated()
    this.syncAuthuser()
  },
  methods: {
    syncIsauthenticated (){
      this.AccountModel.is_authenticated = this.account.is_authenticated
    },
    syncAuthuser(){
      this.AccountModel.auth_account = this.account.auth_account
    },
  },
  computed: {
    isauthenticated: function(){
      this.syncIsauthenticated()
      return this.account.is_authenticated
    },
    authuser: function(){
      this.syncAuthuser()
      return this.account.auth_account
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
