<template>
  <div class="userinfo">
    <NavbarUser
      @update-auth-notification="updateAuthInfo"
    />
    <div class="container">
      <h1>基本情報</h1>
      <router-link to="/user/edit">
        <a class="nav-link">編集</a>
      </router-link>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">姓</li>
        <li class="list-group-item col-4">{{UserModel.lastname}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">姓かな</li>
        <li class="list-group-item col-4">{{UserModel.lastname_kana}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">名</li>
        <li class="list-group-item col-4">{{UserModel.firstname}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">名かな</li>
        <li class="list-group-item col-4">{{UserModel.firstname_kana}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">性別</li>
        <li class="list-group-item col-4">{{translateGender}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">生年月日（年）</li>
        <li class="list-group-item col-4">{{UserModel.birth_year}}年({{convertYearToJapaneseYear(UserModel.birth_year)}})</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">生年月日（月）</li>
        <li class="list-group-item col-4">{{UserModel.birth_month}}月</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">生年月日（日）</li>
        <li class="list-group-item col-4">{{UserModel.birth_day}}日</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">郵便番号</li>
        <li class="list-group-item col-4">{{UserModel.zipcode}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">住所</li>
        <li class="list-group-item col-4">{{UserModel.address}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">住所かな</li>
        <li class="list-group-item col-4">{{UserModel.address_kana}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">連絡先</li>
        <li class="list-group-item col-4">{{UserModel.contact}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">連絡先かな</li>
        <li class="list-group-item col-4">{{UserModel.contact_kana}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">志望の動機、自己PR、趣味、特技など</li>
        <li class="list-group-item col-4">{{UserModel.self_pr}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">本人希望記入欄</li>
        <li class="list-group-item col-4">{{UserModel.personal_request}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">通勤時間</li>
        <li class="list-group-item col-4">{{UserModel.commuting_time}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">扶養家族（配偶者を除く）</li>
        <li class="list-group-item col-4">{{UserModel.dependents}}人</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">配偶者</li>
        <li class="list-group-item col-4">{{translateSpouse}}</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-primary col-2">配偶者の扶養家族</li>
        <li class="list-group-item col-4">{{translateDependentsOfSpouse}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue'
const axios = require('axios').default

export default {
  name: 'UserInfoView',
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
      UserModel: {}
      /*
      UserModel: {
        account_id: "",
        lastname: "",
        firstname: "",
        lastname_kana: "",
        firstname_kana: "",
        gender: null,
        birth_year: "",
        birth_month: "",
        birth_day: "",
        zipcode: "",
        address: "",
        address_kana: "",
        contact: "",
        contact_kana: "",
        self_pr: "",
        personal_request: "",
        commuting_time: "",
        dependents: "",
        spouse: "",
        dependents_of_spouse: "",
        created_at: "",
        updated_at: "",
      },
      */
    }
  },
  created (){
    //this.authCheck()
  },
  mounted () {
    //this.AccountModel = this.account
    this.getUserInfo()
  },
  computed: {
    computedUserModel: function(){
      console.log("UserInfoView：computedUserModel")
      return this.UserModel
    },
    translateGender: function(){
      console.log("UserInfoView：translateGender")
      let gender = ""
      if (this.UserModel.gender == 1) {
        gender = "男性"
      } else if (this.UserModel.gender == 2) {
        gender = "女性"
      }
      return gender
    },
    translateSpouse: function(){
      let spouse = ""
      if (this.UserModel.spouse == true) {
        spouse = "有"
      } else {
        spouse = "無"
      }
      return spouse
    },
    translateDependentsOfSpouse: function(){
      let spouse = ""
      if (this.UserModel.dependents_of_spouse == true) {
        spouse = "有"
      } else {
        spouse = "無"
      }
      return spouse
    },
  },
  methods: {
    convertYearToJapaneseYear(year) {
      //console.log(year)
      if (year === null) {
        return "-"
      } else if (year >= 2019) {
        //console.log("令和？")
        return "令和" + (year - 2018) + "年"
      } else if (year >= 1989 && year < 2019) {
        //console.log("平成？")
        //console.log("平成" + (year - 1988) + "年")
        return "平成" + (year - 1988) + "年"
      } else {
        //console.log("昭和？")
        return "昭和" + (year - 1924) + "年"
      }
    },
    updateAuthInfo(data) {
      console.log("UserInfoView：")
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
        console.log("UserInfoView：")
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
        console.log("UserInfoView：")
        console.log(err);
      });
    },
    getUserInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/user', {
      })
      .then(function (res) {
        console.log("UserInfoView：")
        console.log(res.data)
        self.UserModel = res.data
        /*
        self.UserModel.account_id = res.data.account_id
        self.UserModel.lastname = res.data.lastname
        self.UserModel.firstname = res.data.firstname
        self.UserModel.lastname_kana = res.data.lastname_kana
        self.UserModel.firstname_kana = res.data.firstname_kana
        self.UserModel.birth_year = res.data.birth_year
        self.UserModel.birth_month = res.data.birth_month
        self.UserModel.birth_day = res.data.birth_day
        self.UserModel.zipcode = res.data.zipcode
        self.UserModel.address = res.data.address
        self.UserModel.address_kana = res.data.address_kana
        self.UserModel.contact = res.data.contact
        self.UserModel.contact_kana = res.data.contact_kana
        self.UserModel.self_pr = res.data.self_pr
        self.UserModel.personal_request = res.data.personal_request
        self.UserModel.commuting_time = res.data.commuting_time
        self.UserModel.dependents = res.data.dependents
        self.UserModel.spouse = res.data.spouse
        self.UserModel.dependents_of_spouse = res.data.dependents_of_spouse
        self.UserModel.created_at = res.data.created_at
        self.UserModel.updated_at = res.data.updated_at
        */
      })
      .catch(function (err) {
        console.log("UserInfoView：")
        console.log(err);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userinfo {
  text-align: start;
}

</style>