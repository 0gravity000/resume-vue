<template>
  <div class="educationadd">
    <NavbarUser />
    <div class="container">
      <h1>学歴追加</h1>
      <router-link to="/education">
        <a class="nav-link">戻る</a>
      </router-link>
      <form>
        <div class="row g-3">
          <div class="col-2">
            <span class="input-group-text">年</span>
            <input type="text" v-model="temp_event_year" class="form-control" placeholder="年">
          </div>
          <div class="col-2">
            <span class="input-group-text">月</span>
            <input type="text" v-model="temp_event_month" class="form-control" placeholder="月">
          </div>
          <div class="col-8">
            <span class="input-group-text">学歴</span>
            <input type="text" v-model="temp_event" class="form-control" placeholder="学歴">
          </div>
          <div class="row g-3">
            <button type="button" @click="addEducationInfo" class="btn btn-primary col-2">登録</button>
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
  name: 'EducationAddView',
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
      EducationModel: {
        id: "",
        account_id: "",
        event_year: "",
        event_month: "",
        event: "",
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
    //this.AccountModel = this.account
    this.getEducationInfo()
  },
  computed: {
  },
  methods: {
    /*
    updateAuthInfo(data) {
      console.log(data)
      this.AccountModel = data
      this.$emit('update-auth-notification', this.AccountModel) //★
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
        console.log("EducationAddView：")
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
        console.log("EducationAddView：")
        console.log(err);
      });
    },
    getEducationInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/education', {
      })
      .then(function (res) {
        console.log("EducationAddView：")
        console.log(res.data)
        self.EducationModel = res.data
      })
      .catch(function (err) {
        console.log("EducationAddView：")
        console.log(err);
      });
    },
    addEducationInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.post('/api/education', {
        event_year: this.temp_event_year,
        event_month: this.temp_event_month,
        event: this.temp_event,
      },)
      .then(function (res) {
        console.log("EducationAddView：")
        console.log(res.data)
        self.EducationModel = res.data
        self.$router.push({name: "education"})
      })
      .catch(function (err) {
        console.log("EducationAddView：")
        console.log(err);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.educationadd {
  text-align: start;
}

</style>