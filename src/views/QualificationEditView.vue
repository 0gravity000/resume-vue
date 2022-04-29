<template>
  <div class="qualificationedit">
    <NavbarUser
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
            <input type="text" v-model="this.QualificationModel.qualification_year" class="form-control" placeholder="年">
          </div>
          <div class="col-2">
            <span class="input-group-text">月</span>
            <input type="text" v-model="this.QualificationModel.qualification_month" class="form-control" placeholder="月">
          </div>
          <div class="col-8">
            <span class="input-group-text">学歴</span>
            <input type="text" v-model="this.QualificationModel.qualification" class="form-control" placeholder="資格・免許">
          </div>
          <div class="row g-3">
            <button type="button" @click="editQualificationInfo" class="btn btn-primary col-2">登録</button>
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
      /*
      AccountModel: {
        is_authenticated: "",
        auth_account_id: "",
        auth_account_email: ""
      },
      */
      QualificationModel: {
        id: "",
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
    //this.authCheck()
  },
  mounted () {
    //this.authCheck()
    //this.AccountModel = this.account
    this.getQualificationInfo()
  },
  computed: {
    computedQualificationModel: function(){
      console.log("QualificationView：computedQualificationModel")
      return this.QualificationModel
    },
  },
  methods: {
    updateAuthInfo(data) {
      console.log("QualificationEditView：")
      console.log(data)
      //this.AccountModel = data
      this.$emit('update-auth-notification', data)
      //this.$emit('update-auth-notification', this.AccountModel)
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
        console.log("QualificationEditView：")
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
        //console.log("then 2nd")
        //self.$emit('update-auth-notification', self.AccountModel) //★
      })
      .catch(function (err) {
        console.log("QualificationEditView：")
        console.log(err);
      });
    },
    getQualificationInfo: function () {
      console.log("QualificationEditView：")
      console.log("this.$route.params:" +this.$route.params)
      this.QualificationModel.id = this.$route.params.id
      //this.QualificationModel.account_id = this.$route.params.account_id
      this.QualificationModel.qualification_year = this.$route.params.qualification_year
      this.QualificationModel.qualification_month = this.$route.params.qualification_month
      this.QualificationModel.qualification = this.$route.params.qualification
      /*
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
      */
    },
    editQualificationInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.put('/api/qualification', {
        id: self.QualificationModel.id,
        qualification_year: self.QualificationModel.qualification_year,
        qualification_month: self.QualificationModel.qualification_month,
        qualification: self.QualificationModel.qualification,
      },)
      .then(function (res) {
        console.log("QualificationEditView：")
        console.log(res.data)
        self.QualificationModel = res.data
        self.$router.push({name: "qualification"})
      })
      .catch(function (err) {
        console.log("QualificationEditView：")
        console.log(err);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qualificationedit {
  text-align: start;
}

</style>