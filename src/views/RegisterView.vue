<template>
  <div class="container">
    <div class="register">
      <h2 class="my-3">アカウント登録</h2>
      <div class="my-3">
        <router-link to="/">戻る</router-link>
      </div>
      <div  class="row">
        <div class="col-12 mb-3" :class="{'valid-msg': isErrorMsg}">
          <strong>{{validationMsg}}</strong>
        </div>  <!-- col end -->
      </div>  <!-- row end -->
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
          <button type="button" @click="postAccount" class="col-2 btn btn-primary m-2">登録</button>
        </div>  <!-- row end -->
      </form>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default

export default {
  name: 'RegisterView',
  props: {
    account: {
      type : Object,
    }
  },
  data () {
    return {
      validationMsg: "",
      isErrorMsg: false,
      /*
      AccountModel: {
        is_authenticated: "",
        auth_account_id: "",
        auth_account_email: ""
      },
      accountList: [],
      */
    }
  },
  mounted () {
    //this.AccountModel = this.account
    //this.authCheck()
    //this.updataAccountList()
  },
  methods: {
    /*
    updataAccountList: async function () {
      axios
        .get("/api/register")
        .then((res) => {
          console.log(res);
          this.accountList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(this.accountList)
    },
    */
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
    postAccount: async function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.post('/api/register', {
        email: this.email,  //疑問:これでいい？
        password: this.password //疑問:これでいい？
      })
      .then(function (res) {
        console.log("Register.vue：");
        console.log(res.data);
        self.$emit('update-auth-notification', res.data) //★
        //ユーザー認証に成功したらホーム画面に遷移
        if (res.data.result == "OK") {
          self.validationMsg = res.data.message //バリデーションメッセージをクリア
          self.isErrorMsg = false
          self.$router.push({name: "home"})
        } else {  //バリデーションエラー時
          self.validationMsg = res.data.message //バリデーションメッセージを代入
          self.isErrorMsg = true
        }
      })
      .catch(function (err) {
        console.log("Register.vue：");
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
.valid-msg {
  background-color: pink;
}

</style>