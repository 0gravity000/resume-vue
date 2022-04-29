<template>
  <div class="container">
    <div class="register">
      <h2 class="my-3">ログイン</h2>
      <div class="my-3">
        <router-link to="/">戻る</router-link>
      </div>
      <form>
        <div  class="row">
          <div class="col-12 mb-3">
            <label class="form-label">メールアドレス</label>
            <input id="ｰinput-email1" v-model="email" class="form-control" type="email" placeholder="your@example.com">
          </div>
          <div class="col-12 mb-3">
            <label class="form-label">パスワード</label>
            <input id="input-password1" v-model="password" class="form-control" type="password">
          </div>
          <button type="button" @click="authLogin" class="col-2 btn btn-primary m-2">ログイン</button>
        </div>  <!-- row end -->
      </form>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default

export default {
  name: 'LoginView',
  props: {
    account: {
      type : Object,
    }
  },
  data () {
    return {
      /*
      AccountModel: {
        is_authenticated: "",
        auth_account_id: "",
        auth_account_email: ""
      },
      */
    }
  },
  mounted () {
    //this.AccountModel = this.account
    //this.showLoginView()
    //this.authCheck()
  },
  methods: {
    /*
    showLoginView: function () {
      console.log("called showLoginView()")
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
        self.AccountModel.auth_account = res.data.auth_account
      })
      .then(function () {
        console.log("then 2nd")
        self.$emit('update-auth-notification', self.AccountModel.is_authenticated) //★
        self.$emit('update-user-notification', self.AccountModel.auth_account) //★
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    */
    authLogin: async function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.post('/api/login', {
        email: this.email,  //疑問:これでいい？
        password: this.password //疑問:これでいい？
      })
      .then(function (res) {
        console.log("LoginView：");
        console.log(res.data);
        self.$emit('update-auth-notification', res.data)
        self.$router.push({name: "home"})
      })
      .catch(function (err) {
        console.log("LoginView：");
        console.log(err);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register {
  text-align: start;
}

</style>