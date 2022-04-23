<template>
  <div class="home">
    <button type="button" @click="authLogout">ログアウト</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
const axios = require('axios').default

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  props: {
    account: {
      type : Object,
    }
  },
  data () {
    return {
      AccountModel: {
        is_authenticated: "",
        auth_user: "",
      }
    }
  },
  created (){
  },
  mounted () {
    this.showHomeView()
    this.AccountModel.is_authenticated = this.account.is_authenticated
    this.AccountModel.auth_user = this.account.auth_user
    //this.authCheck()
  },
  methods: {
    showHomeView: function () {
      console.log("called showHomeView()")
    },
    /*
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
      .then(function () {
        console.log("then 2nd")
        self.$emit('update-auth-notification', self.AccountModel.is_authenticated) //★
        self.$emit('update-user-notification', self.AccountModel.auth_user) //★
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    */
    authLogout: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/logout', {
        //email: this.email,
        //password: this.password
      })
      .then(function (res) {
        console.log(res);
        self.$router.push({name: "logout"})
        self.$emit('update-auth-notification', false) //★
        self.$emit('update-user-notification', res.data) //★
      })
      .catch(function (err) {
        console.log(err);
      });
    },
  }
}
</script>
