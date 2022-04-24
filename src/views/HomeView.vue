<template>
  <div class="home">
    <NavbarUser 
      :account="AccountModel"
      @update-auth-notification="updateAuthState"
      @update-user-notification="updateUserInfo"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarUser from '@/components/NavbarUser.vue'
const axios = require('axios').default

export default {
  name: 'HomeView',
  components: {
    NavbarUser,
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
        auth_account: "",
      }
    }
  },
  created (){
    this.authCheck()
  },
  mounted () {
    this.showHomeView()
    this.AccountModel.is_authenticated = this.account.is_authenticated
    this.AccountModel.auth_account = this.account.auth_account
  },
  methods: {
    updateAuthState(data) {
      console.log(data)
      this.AccountModel.is_authenticated = data
      this.$emit('update-auth-notification', this.AccountModel.is_authenticated) //★
    },
    updateUserInfo(data) {
      console.log(data)
      this.AccountModel.auth_account = data
      this.$emit('update-user-notification', this.AccountModel.auth_account) //★
    },
    showHomeView: function () {
      console.log("called showHomeView()")
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
        if(res.data.is_authenticated == false) {  //認証がない場合TOP画面へリダイレクト
          self.$router.push({name: "top"})
        }
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
  }
}
</script>
