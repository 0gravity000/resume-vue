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
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text">姓</span>
              <input type="text" v-model="UserModel.lastname" class="form-control" placeholder="姓">
            </div>
          </div>  <!--col end -->
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text">名</span>
              <input type="text" v-model="UserModel.firstname" class="form-control" placeholder="名">
            </div>
          </div>  <!--col end -->
        </div>  <!--row end -->

        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text">姓かな</span>
              <input type="text" v-model="UserModel.lastname_kana" class="form-control" placeholder="姓かな">
            </div>
          </div>  <!--col end -->
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text">名かな</span>
              <input type="text" v-model="UserModel.firstname_kana" class="form-control" placeholder="名かな">
            </div>
          </div>  <!--col end -->
        </div>  <!--row end -->

        <div class="input-group mb-3"><!--性別-->
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="UserModel.gender" value="1" name="genderRadio" id="genderRadioMale">
            <label class="form-check-label" for="genderRadioMale">
              男性
            </label>
          </div>
          <div class="form-check mx-2">
            <input class="form-check-input" type="radio" v-model="UserModel.gender" value="2" name="genderRadio" id="genderRadioFemale">
            <label class="form-check-label" for="genderRadioFemale">
              女性
            </label>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col">
            <span class="input-group-text">生年月日(年)</span>
            <select v-model="UserModel.birth_year" class="form-select">
              <option selected>生年月日(年)を選択してください</option>
              <option value="2022">2022年 令和4年</option>
              <option value="2021">2021年 令和3年</option>
              <option value="2020">2020年 令和2年</option>
              <option value="2019">2019年 令和1年</option>

              <option value="2018">2018年 平成30年</option>
              <option value="2017">2017年 平成29年</option>
              <option value="2016">2016年 平成28年</option>
              <option value="2015">2015年 平成27年</option>
              <option value="2014">2014年 平成26年</option>
              <option value="2013">2013年 平成25年</option>
              <option value="2012">2012年 平成24年</option>
              <option value="2011">2011年 平成23年</option>
              <option value="2010">2010年 平成22年</option>
              <option value="2009">2009年 平成21年</option>
              <option value="2008">2008年 平成20年</option>
              <option value="2007">2007年 平成19年</option>
              <option value="2006">2006年 平成18年</option>
              <option value="2005">2005年 平成17年</option>
              <option value="2004">2004年 平成16年</option>
              <option value="2003">2003年 平成15年</option>
              <option value="2002">2002年 平成14年</option>
              <option value="2001">2001年 平成13年</option>
              <option value="2000">2000年 平成12年</option>
              <option value="1999">1999年 平成11年</option>
              <option value="1998">1998年 平成10年</option>
              <option value="1997">1997年 平成9年</option>
              <option value="1996">1996年 平成8年</option>
              <option value="1995">1995年 平成7年</option>
              <option value="1994">1994年 平成6年</option>
              <option value="1993">1993年 平成5年</option>
              <option value="1992">1992年 平成4年</option>
              <option value="1991">1991年 平成3年</option>
              <option value="1990">1990年 平成2年</option>
              <option value="1989">1989年 平成1年</option>

              <option value="1988">1988年 昭和63年</option>
              <option value="1987">1987年 昭和62年</option>
              <option value="1986">1986年 昭和61年</option>
              <option value="1985">1985年 昭和60年</option>
              <option value="1984">1984年 昭和59年</option>
              <option value="1983">1983年 昭和58年</option>
              <option value="1982">1982年 昭和57年</option>
              <option value="1981">1981年 昭和56年</option>
              <option value="1980">1980年 昭和55年</option>
              <option value="1979">1979年 昭和54年</option>
              <option value="1978">1978年 昭和53年</option>
              <option value="1977">1977年 昭和52年</option>
              <option value="1976">1976年 昭和51年</option>
              <option value="1975">1975年 昭和50年</option>
              <option value="1974">1974年 昭和49年</option>
              <option value="1973">1973年 昭和48年</option>
              <option value="1972">1972年 昭和47年</option>
              <option value="1971">1971年 昭和46年</option>
              <option value="1970">1970年 昭和45年</option>
              <option value="1969">1969年 昭和44年</option>
              <option value="1968">1968年 昭和43年</option>
              <option value="1967">1967年 昭和42年</option>
              <option value="1966">1966年 昭和41年</option>
              <option value="1965">1965年 昭和40年</option>
              <option value="1964">1964年 昭和39年</option>
              <option value="1963">1963年 昭和38年</option>
              <option value="1962">1962年 昭和37年</option>
              <option value="1961">1961年 昭和36年</option>
              <option value="1960">1960年 昭和35年</option>
              <option value="1959">1959年 昭和34年</option>
              <option value="1958">1958年 昭和33年</option>
              <option value="1957">1957年 昭和32年</option>
              <option value="1956">1956年 昭和31年</option>
              <option value="1955">1955年 昭和30年</option>
              <option value="1954">1954年 昭和29年</option>
              <option value="1953">1953年 昭和28年</option>
              <option value="1952">1952年 昭和27年</option>
              <option value="1951">1951年 昭和26年</option>
              <option value="1950">1950年 昭和25年</option>

              <option value="1949">1949年 昭和25年</option>
              <option value="1948">1948年 昭和24年</option>
              <option value="1947">1947年 昭和23年</option>
              <option value="1946">1946年 昭和22年</option>
              <option value="1945">1945年 昭和21年</option>
              <option value="1944">1944年 昭和20年</option>
              <option value="1943">1943年 昭和19年</option>
              <option value="1942">1942年 昭和18年</option>
              <option value="1941">1941年 昭和17年</option>
              <option value="1940">1940年 昭和16年</option>
              <option value="1939">1939年 昭和15年</option>
              <option value="1938">1938年 昭和14年</option>
              <option value="1937">1937年 昭和13年</option>
              <option value="1936">1936年 昭和12年</option>
              <option value="1935">1935年 昭和11年</option>
              <option value="1934">1934年 昭和10年</option>
              <option value="1933">1933年 昭和9年</option>
              <option value="1932">1932年 昭和8年</option>
              <option value="1931">1931年 昭和7年</option>
              <option value="1930">1930年 昭和6年</option>
              <option value="1929">1929年 昭和5年</option>
              <option value="1928">1928年 昭和4年</option>
              <option value="1927">1927年 昭和3年</option>
              <option value="1926">1926年 昭和2年</option>
              <option value="1925">1925年 昭和1年</option>
            </select>
            <!--
            <div class="input-group mb-3">
              <span class="input-group-text">生年月日（年）</span>
              <input type="text" v-model="UserModel.birth_year" class="form-control" placeholder="生年月日（年）">
            </div>
            -->
          </div>  <!--col end -->
          <div class="col">
            <span class="input-group-text">生年月日（月）</span>
            <select v-model="UserModel.birth_month" class="form-select">
              <option selected>生年月日（月）を選択してください</option>
              <option value="1">1月</option>
              <option value="2">2月</option>
              <option value="3">3月</option>
              <option value="4">4月</option>
              <option value="5">5月</option>
              <option value="6">6月</option>
              <option value="7">7月</option>
              <option value="8">8月</option>
              <option value="9">9月</option>
              <option value="10">10月</option>
              <option value="11">11月</option>
              <option value="12">12月</option>
            </select>
            <!--
            <div class="input-group mb-3">
              <span class="input-group-text">生年月日（月）</span>
              <input type="text" v-model="UserModel.birth_month" class="form-control" placeholder="生年月日（月）">
            </div>
            -->
          </div>  <!--col end -->
          <div class="col">
            <span class="input-group-text">生年月日（日）</span>
            <select v-model="UserModel.birth_day" class="form-select">
              <option selected>生年月日（日）を選択してください</option>
              <option value="1">1日</option>
              <option value="2">2日</option>
              <option value="3">3日</option>
              <option value="4">4日</option>
              <option value="5">5日</option>
              <option value="6">6日</option>
              <option value="7">7日</option>
              <option value="8">8日</option>
              <option value="9">9日</option>
              <option value="10">10日</option>
              <option value="11">11日</option>
              <option value="12">12日</option>
              <option value="13">13日</option>
              <option value="14">14日</option>
              <option value="15">15日</option>
              <option value="16">16日</option>
              <option value="17">17日</option>
              <option value="18">18日</option>
              <option value="19">19日</option>
              <option value="20">20日</option>
              <option value="21">21日</option>
              <option value="22">22日</option>
              <option value="23">23日</option>
              <option value="24">24日</option>
              <option value="25">25日</option>
              <option value="26">26日</option>
              <option value="27">27日</option>
              <option value="28">28日</option>
              <option value="29">29日</option>
              <option value="30">30日</option>
              <option value="31">31日</option>
            </select>
            <!--
            <div class="input-group mb-3">
              <span class="input-group-text">生年月日（日）</span>
              <input type="text" v-model="UserModel.birth_day" class="form-control" placeholder="生年月日（日）">
            </div>
            -->
          </div>  <!--col end -->
        </div>  <!--row end -->

        <div class="input-group mb-3">
          <span class="input-group-text">住所郵便番号</span>
          <input type="text" v-model="UserModel.address_zipcode" class="form-control" placeholder="住所郵便番号">
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
          <span class="input-group-text">住所電話番号</span>
          <input type="text" v-model="UserModel.address_phone" class="form-control" placeholder="住所電話番号">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">住所メールアドレス</span>
          <input type="text" v-model="UserModel.address_email" class="form-control" placeholder="住所メールアドレス">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">連絡先郵便番号</span>
          <input type="text" v-model="UserModel.contact_zipcode" class="form-control" placeholder="連絡先郵便番号">
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
          <span class="input-group-text">連絡先電話番号</span>
          <input type="text" v-model="UserModel.contact_phone" class="form-control" placeholder="連絡先電話番号">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">連絡先メールアドレス</span>
          <input type="text" v-model="UserModel.contact_email" class="form-control" placeholder="連絡先メールアドレス">
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
          <input type="text" v-model="UserModel.commuting_time" class="form-control" placeholder="分、時間">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">扶養家族（配偶者を除く）</span>
          <input type="text" v-model="UserModel.dependents" class="form-control" placeholder="人">
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
        address_zipcode: "",
        address: "",
        address_kana: "",
        address_phone: "",
        address_email: "",
        contact_zipcode: "",
        contact: "",
        contact_kana: "",
        contact_phone: "",
        contact_email: "",
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
        address_zipcode: self.UserModel.address_zipcode,
        address: self.UserModel.address,
        address_kana: self.UserModel.address_kana,
        address_phone: self.UserModel.address_phone,
        address_email: self.UserModel.address_email,
        contact_zipcode: self.UserModel.contact_zipcode,
        contact: self.UserModel.contact,
        contact_kana: self.UserModel.contact_kana,
        contact_phone: self.UserModel.contact_phone,
        contact_email: self.UserModel.contact_email,
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