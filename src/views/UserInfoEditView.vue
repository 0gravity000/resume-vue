<template>
  <div class="userinfoedit">
    <NavbarUser
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
        <div class="input-group mb-3"><!--性別-->
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="UserModel.gender" value="1" name="genderRadio" id="genderRadioMale">
            <label class="form-check-label" for="genderRadioMale">
              男性
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="UserModel.gender" value="2" name="genderRadio" id="genderRadioFemale">
            <label class="form-check-label" for="genderRadioFemale">
              女性
            </label>
          </div>
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
        <div class="input-group mb-3">
          <span class="input-group-text">扶養家族（配偶者を除く）</span>
          <input type="text" v-model="UserModel.dependents" class="form-control" placeholder="">
        </div>
        <div class="input-group mb-3">
          <div class="form-check form-switch">
            <input class="form-check-input" v-model="UserModel.spouse" type="checkbox" role="switch">
            <label class="form-check-label">配偶者</label>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="form-check form-switch">
            <input class="form-check-input" v-model="UserModel.dependents_of_spouse" type="checkbox" role="switch">
            <label class="form-check-label">配偶者の扶養家族</label>
          </div>
        </div>
        <button type="button" @click="setUserInfo" class="btn btn-primary">登録</button>
      </form>
    </div>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue'
const axios = require('axios').default

export default {
  name: 'UserInfoEditView',
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
      //selectedGender: "男性"
    }
  },
  created (){
    //this.authCheck()
  },
  mounted () {
    //this.authCheck()
    //this.AccountModel = this.account
    this.getUserInfo()
  },
  computed: {
    computedUserModel: function(){
      console.log("UserInfoEditView：computedUserModel")
      return this.UserModel
    },
    /*
    translateGender: function(){
      return this.UserModel.gender
    }
    */
  },
  methods: {
    updateAuthInfo(data) {
      console.log("UserInfoEditView：")
      console.log(data)
      //this.AccountModel = data
      this.$emit('update-auth-notification', data)
      //this.$emit('update-auth-notification', this.AccountModel)
    },
    /*
    checkGenderRadio() {
      let gender = ""
      if (this.UserModel.gender == 1) {
        this.UserModel.gender = 1
        gender = "男性"
      } else if (this.selectedGender == "女性") {
        this.UserModel.gender = 2
        gender = "女性"
      } else {
        this.UserModel.gender = null
        gender = ""
      }
      console.log(gender)
      return gender
    },
    */
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
        console.log("UserInfoEditView：")
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
        console.log("UserInfoEditView：")
        console.log(err);
      });
    },
    getUserInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/user', {
      })
      .then(function (res) {
        console.log("UserInfoEditView：")
        console.log(res.data)
        self.UserModel = res.data
      })
      .catch(function (err) {
        console.log("UserInfoEditView：")
        console.log(err);
      });
    },
    setUserInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.post('/api/user', {
        lastname: self.UserModel.lastname,
        firstname: self.UserModel.firstname,
        lastname_kana: self.UserModel.lastname_kana,
        firstname_kana: self.UserModel.firstname_kana,
        gender: self.UserModel.gender,
        birth_year: self.UserModel.birth_year,
        birth_month: self.UserModel.birth_month,
        birth_day: self.UserModel.birth_day,
        zipcode: self.UserModel.zipcode,
        address: self.UserModel.address,
        address_kana: self.UserModel.address_kana,
        contact: self.UserModel.contact,
        contact_kana: self.UserModel.contact_kana,
        self_pr: self.UserModel.self_pr,
        personal_request: self.UserModel.personal_request,
        commuting_time: self.UserModel.commuting_time,
        dependents: self.UserModel.dependents,
        spouse: self.UserModel.spouse,
        dependents_of_spouse: self.UserModel.dependents_of_spouse,
      },)
      .then(function (res) {
        console.log("UserInfoEditView：")
        console.log(res.data)
        self.UserModel = res.data
        self.$router.push({name: "userinfo"})
      })
      .catch(function (err) {
        console.log("UserInfoEditView：")
        console.log(err);
      });
    },
    postUserInfo: function(){
      //await this.setUserInfo()
      //await this.$router.push({name: "userinfo"})
      /*
      var result = new Promise(resolve => {
        resolve(this.setUserInfo())
        })
      result.then( () => this.$router.push({name: "userinfo"}) );
      */
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userinfoedit {
  text-align: start;
}

</style>