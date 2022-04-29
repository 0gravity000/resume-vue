<template>
  <NavbarMain 
    :account="AccountModel"
  />
  <router-view 
    :account="AccountModel"
    @update-auth-notification="updateAuthInfo"
  />
</template>

<script>
// @ is an alias to /src
import NavbarMain from '@/components/NavbarMain.vue'
const axios = require('axios').default

export default {
  components: {
    NavbarMain,
  },
  data () {
    return {
      AccountModel: {
        is_authenticated: "",
        auth_account_id: "",
        auth_account_email: ""
      }
    }
  },
  mounted () {
    this.authCheck()
  },
  methods: {
    updateAuthInfo(data) {
      console.log("app.vue：")
      console.log(data)
      this.AccountModel.is_authenticated = data.is_authenticated
      this.AccountModel.auth_account_id = data.auth_account_id
      this.AccountModel.auth_account_email = data.auth_account_email
    },
    resolveAfterxSecond() {
      //要調査：GAE環境で、ログイン状態なのにcurrent_userが空で返ってくることがあるため、スリープを入れる
      return new Promise(resolve => {setTimeout(()=> {resolve("wait")}, 500)})
    },
    authCheck: async function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/')
      await this.resolveAfterxSecond()
      axios.get('/api/authcheck', {
      })
      .then(function (res) {
        console.log("app.vue：")
        console.log(res.data)
        self.AccountModel.is_authenticated = res.data.is_authenticated
        self.AccountModel.auth_account_id = res.data.auth_account_id
        self.AccountModel.auth_account_email = res.data.auth_account_email
      })
      .catch(function (err) {
        console.log("app.vue：")
        console.log(err);
      });
    },

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
