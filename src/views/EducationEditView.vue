<template>
  <div class="educationedit">
    <NavbarUser
      @update-auth-notification="updateAuthInfo"
    />
    <div class="container">
      <h1>学歴編集</h1>
      <router-link to="/education">
        <a class="nav-link">戻る</a>
      </router-link>
      <form>
        <div class="row g-3">
          <div class="col-2">
            <span class="input-group-text">年</span>
            <input type="text" v-model="this.EducationModel.event_year" class="form-control" placeholder="年">
          </div>
          <div class="col-2">
            <span class="input-group-text">月</span>
            <input type="text" v-model="this.EducationModel.event_month" class="form-control" placeholder="月">
          </div>
          <div class="col-8">
            <span class="input-group-text">学歴</span>
            <input type="text" v-model="this.EducationModel.event" class="form-control" placeholder="学歴">
          </div>
          <div class="row g-3">
            <button type="button" @click="editEducationInfo" class="btn btn-primary col-2">登録</button>
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
    },
    item: {
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
    //this.authCheck()
  },
  mounted () {
    //this.authCheck()
    //this.AccountModel = this.account
    this.getEducationInfo()
  },
  computed: {
    computedEducationModel: function(){
      console.log("EducationEditView：：computedEducationModel")
      return this.EducationModel
    },
  },
  methods: {
    updateAuthInfo(data) {
      console.log("EducationEditView：")
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
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/')
      await this.resolveAfterxSecond()
      axios.get('/api/authcheck', {
      })
      .then(function (res) {
        console.log("EducationEditView：")
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
        console.log("EducationEditView：")
        console.log(err);
      });
    },
    getEducationInfo: function () {
      console.log("EducationEditView：")
      //console.log("item:" +item)
      console.log("this.$route.params:" +this.$route.params)
      console.log("this.$route.params(json):" +JSON.stringify(this.$route.params))
      console.log("this.$route.params.id:" +this.$route.params.id)
      console.log("this.$route.params.id(json):" +JSON.stringify(this.$route.params.id))
      console.log("this.EducationModel:" +this.EducationModel)
      console.log("this.EducationModel(json):" +JSON.stringify(this.EducationModel))
      console.log("this.EducationModel.id:" +this.EducationModel.id)

      this.EducationModel.id = this.$route.params.id
      //this.EducationModel.account_id = this.$route.params.account_id
      this.EducationModel.event_year = this.$route.params.event_year
      this.EducationModel.event_month = this.$route.params.event_month
      this.EducationModel.event = this.$route.params.event
      //this.EducationModel.created_at = this.$route.params.created_at
      //this.EducationModel.updated_at = this.$route.params.updated_at
      //console.log("this.$route.params.selectedItem_id:" +this.$route.params.selectedItem_id)
      //console.log("this.$route.params.selectedItem_id(json):" +JSON.stringify(this.$route.params.selectedItem_id))
      /*
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
      */
    },
    editEducationInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.put('/api/education', {
        id: self.EducationModel.id,
        event_year: self.EducationModel.event_year,
        event_month: self.EducationModel.event_month,
        event: self.EducationModel.event,
      },)
      .then(function (res) {
        console.log("EducationEditView：")
        console.log(res.data)
        self.EducationModel = res.data
        self.$router.push({name: "education"})
      })
      .catch(function (err) {
        console.log("EducationEditView：")
        console.log(err);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.educationedit {
  text-align: start;
}

</style>