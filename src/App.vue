<template>
  <NavbarMain 
    :account="AccountModel"
    @update-auth-notification="updateAuthState"
    @update-user-notification="updateUserInfo"
  />
  <router-view 
    :account="AccountModel"
    @update-auth-notification="updateAuthState"
    @update-user-notification="updateUserInfo"
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
        auth_user: "",
      }
    }
  },
  mounted () {
    this.authCheck()
  },
  methods: {
    updateAuthState(data) {
      console.log(data)
      this.AccountModel.is_authenticated = data
    },
    updateUserInfo(data) {
      console.log(data)
      this.AccountModel.auth_user = data
    },
    resolveAfterxSecond() {
      //GAE環境で、ログイン状態なのにcurrent_userが空で返ってくることがあるため、スリープを入れる
      return new Promise(resolve => {setTimeout(()=> {resolve("wait")}, 500)})
    },
    authCheck: async function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      await this.resolveAfterxSecond()
      axios.get('/api/authcheck', {
      })
      .then(function (res) {
        console.log(res.data)
        self.AccountModel.is_authenticated = res.data.is_authenticated
        self.AccountModel.auth_user = res.data.auth_user
      })
      .catch(function (err) {
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
