<template>
  <div class="qualification">
    <NavbarUser 
      :account="AccountModel"
      @update-auth-notification="updateAuthInfo"
    />
    <div class="container">
      <h1>資格・免許</h1>
      <router-link to="/qualification/add">
        <a class="nav-link">追加</a>
      </router-link>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">年</th>
            <th scope="col">月</th>
            <th scope="col">資格・免許</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in QualificationModel" :key="item.id">
            <td>{{item.qualification_year}}</td>
            <td>{{item.qualification_month}}</td>
            <td>{{item.qualification}}</td>
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
            <li class="list-group-item col">{{QualificationModel.qualification_year}}</li>
          </ul>
        </div>
        <div class="col-2">
          <ul class="">
            <li class="list-group-item list-group-item-primary col">月</li>
            <li class="list-group-item col">{{QualificationModel.qualification_month}}</li>
          </ul>
        </div>
        <div class="col-8">
          <ul class="">
            <li class="list-group-item list-group-item-primary col">資格・免許</li>
            <li class="list-group-item col">{{QualificationModel.qualification}}</li>
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
      AccountModel: {
        is_authenticated: "",
        auth_account_id: "",
        auth_account_email: ""
      },
      QualificationModel: {}
    }
  },
  created (){
    this.authCheck()
  },
  mounted () {
    this.AccountModel = this.account
    this.getQualificationInfo()
  },
  computed: {
  },
  methods: {
    onClickEditButton (item) {
      console.log("item:" + JSON.stringify(item))
      console.log("id:" + item.id)
      this.$router.push({name: "qualificationedit", params: {id: item.id, qualification_year: item.qualification_year, qualification_month: item.qualification_month, qualification: item.qualification}})
    },
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qualification {
  text-align: start;
}

</style>