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
        <div class="p-2 bd-highlight">{{authuseremail}}</div>
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
        auth_account_id: "",
        auth_account_email: ""
      },
    }
  },
  updateed () {
    this.syncAuthInfo()
  },
  mounted () {
    //this.authCheck()
    this.syncAuthInfo()
  },
  methods: {
    syncAuthInfo(){
      this.AccountModel = this.account
    },
  },
  computed: {
    isauthenticated: function(){
      this.syncAuthInfo()
      return this.account.is_authenticated
    },
    authuseremail: function(){
      this.syncAuthInfo()
      return this.account.auth_account_email
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
