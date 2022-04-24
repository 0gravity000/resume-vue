<template>
  <div class="userinfoedit">
    <NavbarUser 
      :account="AccountModel"
      @update-auth-notification="updateAuthInfo"
    />
    <div class="container">
      <h1>基本情報編集</h1>
      <router-link to="/user">
        <a class="nav-link">戻る</a>
      </router-link>
      <form>
        <div class="input-group mb-3">
          <span class="input-group-text">姓</span>
          <input type="text" v-model="UserModel.lastname" class="form-control" placeholder="姓">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">姓かな</span>
          <input type="text" v-model="UserModel.lastname_kana" class="form-control" placeholder="姓かな">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">名</span>
          <input type="text" v-model="UserModel.firstname" class="form-control" placeholder="名">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">名かな</span>
          <input type="text" v-model="UserModel.firstname_kana" class="form-control" placeholder="名かな">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">生年月日（年）</span>
          <input type="text" v-model="UserModel.birth_year" class="form-control" placeholder="生年月日（年）">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">生年月日（月）</span>
          <input type="text" v-model="UserModel.birth_month" class="form-control" placeholder="生年月日（月）">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">生年月日（日）</span>
          <input type="text" v-model="UserModel.birth_day" class="form-control" placeholder="生年月日（日）">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">郵便番号</span>
          <input type="text" v-model="UserModel.zipcode" class="form-control" placeholder="郵便番号">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">住所</span>
          <input type="text" v-model="UserModel.address" class="form-control" placeholder="住所">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">住所かな</span>
          <input type="text" v-model="UserModel.address_kana" class="form-control" placeholder="住所かな">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">連絡先</span>
          <input type="text" v-model="UserModel.contact" class="form-control" placeholder="連絡先">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">連絡先かな</span>
          <input type="text" v-model="UserModel.contact_kana" class="form-control" placeholder="連絡先かな">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">志望の動機、自己PR、趣味、特技など</span>
          <input type="text" v-model="UserModel.self_pr" class="form-control" placeholder="">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">本人希望記入欄</span>
          <input type="text" v-model="UserModel.personal_request" class="form-control" placeholder="">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">通勤時間</span>
          <input type="text" v-model="UserModel.commuting_time" class="form-control" placeholder="">
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" v-model="UserModel.dependents" type="checkbox" role="switch">
          <label class="form-check-label">扶養家族（配偶者を除く）</label>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" v-model="UserModel.spouse" type="checkbox" role="switch">
          <label class="form-check-label">配偶者</label>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" v-model="UserModel.dependents_of_spouse" type="checkbox" role="switch">
          <label class="form-check-label">配偶者の扶養家族</label>
        </div>
        <button type="submit" @click="setUserInfo" class="btn btn-primary">登録</button>
      </form>
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
      AccountModel: {
        is_authenticated: "",
        auth_account_id: "",
        auth_account_email: ""
      },
      UserModel: "",
    }
  },
  created (){
    this.authCheck()
  },
  mounted () {
    //this.authCheck()
    this.AccountModel = this.account
    this.getUserInfo()
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
    getUserInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/user', {
      })
      .then(function (res) {
        console.log(res.data)
        self.UserModel = res.data
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    setUserInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.post('/api/user', {
        lastname: this.UserModel.lastname,
        firstname: this.UserModel.firstname,
        lastname_kana: this.UserModel.lastname_kana,
        firstname_kana: this.UserModel.firstname_kana,
        birth_year: this.UserModel.birth_year,
        birth_month: this.UserModel.birth_month,
        birth_day: this.UserModel.birth_day,
        zipcode: this.UserModel.zipcode,
        address: this.UserModel.address,
        address_kana: this.UserModel.address_kana,
        contact: this.UserModel.contact,
        contact_kana: this.UserModel.contact_kana,
        self_pr: this.UserModel.self_pr,
        personal_request: this.UserModel.personal_request,
        commuting_time: this.UserModel.commuting_time,
        dependents: this.UserModel.dependents,
        spouse: this.UserModel.spouse,
        dependents_of_spouse: this.UserModel.dependents_of_spouse,
      })
      .then(function (res) {
        console.log(res.data)
        self.UserModel = res.data
      })
      .catch(function (err) {
        console.log(err);
      });
    },
  }
}
</script>
