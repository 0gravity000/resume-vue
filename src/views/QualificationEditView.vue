<template>
  <div class="educationedit">
    <NavbarUser 
      :account="AccountModel"
      @update-auth-notification="updateAuthInfo"
    />
    <div class="container">
      <h1>資格・免許編集</h1>
      <router-link to="/qualification">
        <a class="nav-link">戻る</a>
      </router-link>
      <form>
        <div class="row g-3">
          <div class="col-2">
            <span class="input-group-text">年</span>
            <input type="text" v-model="QualificationModel.qualification_year" class="form-control" placeholder="年">
          </div>
          <div class="col-2">
            <span class="input-group-text">月</span>
            <input type="text" v-model="QualificationModel.qualification_month" class="form-control" placeholder="月">
          </div>
          <div class="col-8">
            <span class="input-group-text">学歴</span>
            <input type="text" v-model="QualificationModel.qualification" class="form-control" placeholder="資格・免許">
          </div>
          <div class="row g-3">
            <button type="button" @click="setQualificationInfo" class="btn btn-primary col-2">登録</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue'
const axios = require('axios').default

export default {
  name: 'EducationEditView',
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
      QualificationModel: {
        account_id: "",
        qualification_year: "",
        qualification_month: "",
        qualification: "",
        created_at: "",
        updated_at: "",
      },
      //selectedGender: "男性"
    }
  },
  created (){
    this.authCheck()
  },
  mounted () {
    //this.authCheck()
    this.AccountModel = this.account
    this.getQualificationInfo()
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
    getQualificationInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/qualification', {
      })
      .then(function (res) {
        console.log(res.data)
        self.QualificationModel = res.data
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    setQualificationInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.post('/api/qualification', {
        event_year: self.QualificationModel.qualification_year,
        event_month: self.QualificationModel.qualification_month,
        event: self.QualificationModel.qualification,
      },)
      .then(function (res) {
        console.log(res.data)
        self.QualificationModel = res.data
        self.$router.push({name: "qualification"})
      })
      .catch(function (err) {
        console.log(err);
      });
    },
  }
}
</script>
