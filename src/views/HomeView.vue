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
        auth_user: "",
      }
    }
  },
  created (){
    this.authCheck()
  },
  mounted () {
    this.showHomeView()
    this.AccountModel.is_authenticated = this.account.is_authenticated
    this.AccountModel.auth_user = this.account.auth_user
  },
  methods: {
    updateAuthState(data) {
      console.log(data)
      this.AccountModel.is_authenticated = data
      this.$emit('update-auth-notification', this.AccountModel.is_authenticated) //★
    },
    updateUserInfo(data) {
      console.log(data)
      this.AccountModel.auth_user = data
      this.$emit('update-user-notification', this.AccountModel.auth_user) //★
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
        self.AccountModel.auth_user = res.data.auth_user
        if(res.data.is_authenticated == false) {  //認証がない場合TOP画面へリダイレクト
          self.$router.push({name: "top"})
        }
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
  }
}
</script>
