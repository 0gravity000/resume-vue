<template>
  <div class="education">
    <NavbarUser 
      :account="AccountModel"
      @update-auth-notification="updateAuthInfo"
    />
    <div class="container">
      <h1>学歴</h1>
      <router-link to="/education/edit">
        <a class="nav-link">編集</a>
      </router-link>
      <div class="row g-3">
        <div class="col-2">
          <ul class="">
            <li class="list-group-item list-group-item-primary col">年</li>
            <li class="list-group-item col">{{EducationModel.event_year}}</li>
          </ul>
        </div>
        <div class="col-2">
          <ul class="">
            <li class="list-group-item list-group-item-primary col">月</li>
            <li class="list-group-item col">{{EducationModel.event_month}}</li>
          </ul>
        </div>
        <div class="col-8">
          <ul class="">
            <li class="list-group-item list-group-item-primary col">学歴</li>
            <li class="list-group-item col">{{EducationModel.event}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue'
const axios = require('axios').default

export default {
  name: 'EducationView',
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
        auth_account_id: "",
        auth_account_email: ""
      },
      EducationModel: ""
    }
  },
  created (){
    this.authCheck()
  },
  mounted () {
    this.AccountModel = this.account
    this.getEducationInfo()
  },
  computed: {
  },
  methods: {
    updateAuthInfo(data) {
      console.log(data)
      this.AccountModel = data
      this.$emit('update-auth-notification', this.AccountModel) //★
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
        self.AccountModel.auth_account_id = res.data.auth_account_id
        self.AccountModel.auth_account_email = res.data.auth_account_email
        if(res.data.is_authenticated == false) {  //認証がない場合TOP画面へリダイレクト
          self.$router.push({name: "top"})
        }
      })
      .then(function () {
        console.log("then 2nd")
        self.$emit('update-auth-notification', self.AccountModel) //★
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    getEducationInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/education', {
      })
      .then(function (res) {
        console.log(res.data)
        self.EducationModel = res.data
      })
      .catch(function (err) {
        console.log(err);
      });
    },
  }
}
</script>
