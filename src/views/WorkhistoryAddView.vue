<template>
  <div class="workhistoryadd">
    <NavbarUser
      @update-auth-notification="updateAuthInfo"
    />
    <div class="container">
      <h1>職歴追加</h1>
      <router-link to="/workhistory">
        <a class="nav-link">戻る</a>
      </router-link>
      <form>
        <div class="row g-3">
          <div class="col-2">
            <span class="input-group-text">年</span>
            <select v-model="temp_event_year" class="form-select">
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
            <input type="text" v-model="temp_event_year" class="form-control" placeholder="年">
            -->
          </div>
          <div class="col-2">
            <span class="input-group-text">月</span>
            <select v-model="temp_event_month" class="form-select">
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
            <input type="text" v-model="temp_event_month" class="form-control" placeholder="月">
            -->
          </div>
          <div class="col-8">
            <span class="input-group-text">職歴</span>
            <input type="text" v-model="temp_event" class="form-control" placeholder="職歴">
          </div>
          <div class="row g-3">
            <button type="button" @click="addWorkhistoryInfo" class="btn btn-primary col-2">登録</button>
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
  name: 'WorkhistoryAddView',
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
      WorkhistoryModel: {
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
    this.getWorkhistoryInfo()
  },
  computed: {
  },
  methods: {
    updateAuthInfo(data) {
      console.log("WorkhistoryAddView：")
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
        console.log("WorkhistoryAddView：")
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
        console.log("WorkhistoryAddView：")
        console.log(err);
      });
    },
    getWorkhistoryInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/workhistoy', {
      })
      .then(function (res) {
        console.log("WorkhistoryAddView：")
        console.log(res.data)
        self.WorkhistoryModel = res.data
      })
      .catch(function (err) {
        console.log("WorkhistoryAddView：")
        console.log(err);
      });
    },
    addWorkhistoryInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.post('/api/workhistoy', {
        event_year: this.temp_event_year,
        event_month: this.temp_event_month,
        event: this.temp_event,
      },)
      .then(function (res) {
        console.log("WorkhistoryAddView：")
        console.log(res.data)
        self.WorkhistoryModel = res.data
        self.$router.push({name: "workhistory"})
      })
      .catch(function (err) {
        console.log("WorkhistoryAddView：")
        console.log(err);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.workhistoryadd {
  text-align: start;
}

</style>