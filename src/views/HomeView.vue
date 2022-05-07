<template>
  <div class="home">
    <NavbarUser
      @update-auth-notification="updateAuthInfo"
    />
    <h2>メニューを選択してください</h2>
    <router-view
      :account="account"
      @update-auth-notification="updateAuthInfo"
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
      /*
      AccountModel: {
        is_authenticated: "",
        auth_account_id: "",
        auth_account_email: ""
      }
      */
    }
  },
  created (){
    //this.authCheck()
  },
  mounted () {
    //this.showHomeView()
    //this.AccountModel = this.account
    //this.AccountModel.is_authenticated = this.account.is_authenticated
    //this.AccountModel.auth_account_id = this.account.auth_account_id
  },
  methods: {
    updateAuthInfo(data) {
      console.log("HomeView.vue：")
      console.log(data)
      //this.AccountModel.is_authenticated = data.is_authenticated
      //this.AccountModel.auth_account_id = data.auth_account_id
      //this.AccountModel.auth_account_email = data.auth_account_email
      this.$emit('update-auth-notification', data)
      //this.$emit('update-auth-notification', this.AccountModel)
    },
    /*
    showHomeView: function () {
      console.log("called showHomeView()")
    },
    */
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
        console.log("HomeView.vue：")
        console.log(res.data)
        //self.AccountModel.is_authenticated = res.data.is_authenticated
        //self.AccountModel.auth_account_id = res.data.auth_account_id
        //self.AccountModel.auth_account_email = res.data.auth_account_email
        if(res.data.is_authenticated == false) {  //認証がない場合TOP画面へリダイレクト
          self.$router.push({name: "top"})
        }
        self.$emit('update-auth-notification', res.data)
      })
      .then(function () {
        //console.log("HomeView.vue：then 2nd")
        //self.$emit('update-auth-notification', self.AccountModel) //★
        //self.$emit('update-auth-notification', self.AccountModel.is_authenticated) //★
        //self.$emit('update-user-notification', self.AccountModel.auth_account) //★
      })
      .catch(function (err) {
        console.log(err);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 1rem;
}

</style>