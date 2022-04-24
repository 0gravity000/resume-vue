<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/user">
              <a class="nav-link">基本情報</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <a class="nav-link">学歴</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <a class="nav-link">職歴</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <a class="nav-link">資格</a>
            </router-link>
          </li>
          <button type="button" @click="authLogout">ログアウト</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
const axios = require('axios').default

export default {
  name: 'NavbarUser',
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
  mounted () {
    //this.authCheck()
    this.AccountModel = this.account
  },
  methods: {
    authLogout: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/logout', {
        //email: this.email,
        //password: this.password
      })
      .then(function (res) {
        console.log(res);
        self.$emit('update-auth-notification', res.data) //★
        self.$router.push({name: "logout"})
      })
      .catch(function (err) {
        console.log(err);
      });
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
