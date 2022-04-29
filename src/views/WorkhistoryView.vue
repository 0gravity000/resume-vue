<template>
  <div class="workhistory">
    <NavbarUser
      @update-auth-notification="updateAuthInfo"
    />
    <div class="container">
      <h1>職歴</h1>
      <router-link to="/workhistory/add">
        <a class="nav-link">追加</a>
      </router-link>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">年</th>
            <th scope="col">月</th>
            <th scope="col">学歴</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in WorkhistoryModel" :key="item.id">
            <td>{{item.event_year}}</td>
            <td>{{item.event_month}}</td>
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

    </div>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue'
const axios = require('axios').default

export default {
  name: 'WorkhistoryView',
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
      WorkhistoryModel: {}
    }
  },
  created (){
    //this.authCheck()
  },
  mounted () {
    //this.AccountModel = this.account
    this.getWorkhistoryInfo()
  },
  computed: {
    computedWorkhistoryModel: function(){
      console.log("WorkhistoryView：computedWorkhistoryModel")
      return this.WorkhistoryModel
    },
  },
  methods: {
    onClickEditButton (item) {
      console.log("WorkhistoryView：")
      console.log("item:" + JSON.stringify(item))
      console.log("id:" + item.id)
      this.$router.push({name: "workhistoryedit", params: {id: item.id, event_year: item.event_year, event_month: item.event_month, event: item.event}})
    },
    updateAuthInfo(data) {
      console.log("WorkhistoryView：")
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
        console.log("WorkhistoryView：")
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
        console.log("WorkhistoryView：")
        console.log(err);
      });
    },
    getWorkhistoryInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/workhistoy', {
      })
      .then(function (res) {
        console.log("WorkhistoryView：")
        console.log(res.data)
        self.WorkhistoryModel = res.data
      })
      .catch(function (err) {
        console.log("WorkhistoryView：")
        console.log(err);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.workhistory {
  text-align: start;
}

</style>