<template>
  <div class="logout">
    <h1>ログアウトしました。</h1>
  </div>
</template>

<script>
//const axios = require('axios').default

export default {
  name: 'LogoutView',
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
      },
    }
  },
  created() {
  },
  mounted () {
    this.AccountModel.is_authenticated = this.account.is_authenticated
    this.AccountModel.auth_user = this.account.auth_user
    //this.authCheck()
  },
  methods: {
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
  }
}

</script>
