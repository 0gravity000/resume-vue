<template>
  <div class="education">
    <NavbarUser
      @update-auth-notification="updateAuthInfo"
    />
    <div class="container">
      <h1>学歴</h1>
      <router-link to="/education/add">
        <a class="nav-link">追加</a>
      </router-link>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 20%">年</th>
            <th scope="col" style="width: 10%">月</th>
            <th scope="col" style="width: 50%">学歴</th>
            <th scope="col" style="width: 10%">編集</th>
            <th scope="col" style="width: 10%">削除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in EducationModel" :key="item.id">
            <td>{{item.event_year}}年({{convertYearToJapaneseYear(item.event_year)}})</td>
            <td>{{item.event_month}}月</td>
            <td>{{item.event}}</td>
            <td>
              <button @click="onClickEditButton(item)">編集</button>
            </td>
            <td>
              <button @click="onClickDeleteButton">削除</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!--
      <div class="row g-3">
        <div class="col-2">
          <ul class="">
            <li class="list-group-item list-group-item-primary col">年</li>
            <li class="list-group-item col" v-for="item in EducationModel" :key="item.account_id">
              {{item.event_year}}
              </li>
          </ul>
        </div>
        <div class="col-2">
          <ul class="">
            <li class="list-group-item list-group-item-primary col">月</li>
            <li class="list-group-item col" v-for="item in EducationModel" :key="item.account_id">
              {{item.event_month}}
            </li>
          </ul>
        </div>
        <div class="col-8">
          <ul class="">
            <li class="list-group-item list-group-item-primary col">学歴</li>
            <li class="list-group-item col" v-for="item in EducationModel" :key="item.account_id">
              {{item.event}}
            </li>
          </ul>
        </div>
      </div>
      -->
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
      /*
      AccountModel: {
        is_authenticated: "",
        auth_account_id: "",
        auth_account_email: ""
      },
      */
      EducationModel: {},
      //selectedItem: {},
    }
  },
  created (){
    //this.authCheck()
  },
  mounted () {
    //this.AccountModel = this.account
    this.getEducationInfo()
  },
  computed: {
    computedEducationModel: function(){
      console.log("EducationView：computedEducationModel")
      return this.EducationModel
    },
  },
  methods: {
    convertYearToJapaneseYear(year) {
      //console.log(year)
      if (year >= 2019) {
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
    onClickEditButton (item) {
      console.log("EducationView：")
      console.log("item:" + JSON.stringify(item))
      console.log("id:" + item.id)
      //const json_item = JSON.stringify(item)
      //console.log("id(json):" + json_item.id)
      //console.log("this.selectedItem:" + JSON.stringify(this.selectedItem))
      //this.$emit('edit-education-notification', item) //
      this.$router.push({name: "educationedit", params: {id: item.id, event_year: item.event_year, event_month: item.event_month, event: item.event}})
      //this.$router.push({name: "educationedit", params: {selectedItem: item}})
    },
    onClickDeleteButton () {

    },
    updateAuthInfo(data) {
      console.log("EducationView：")
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
        console.log("EducationView：")
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
        console.log("EducationView：")
        console.log(err);
      });
    },
    getEducationInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/education', {
      })
      .then(function (res) {
        console.log("EducationView：")
        console.log(res.data)
        self.EducationModel = res.data
      })
      .catch(function (err) {
        console.log("EducationView：")
        console.log(err);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.education {
  text-align: start;
}

</style>