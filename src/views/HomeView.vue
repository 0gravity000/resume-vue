<template>
  <div class="home">
    <button type="button" @click="authLogout">ログアウト</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
const axios = require('axios').default

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  props: {
    account: {
      type : Object,
    }
  },
  data () {
    return {
      email: "",
      password: "",
    }
  },
  mounted () {
    this.showTopView()
  },
  methods: {
    showTopView: function () {
      console.log("called showTopView()")
    },
    authLogout: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/logout', {
        //email: this.email,
        //password: this.password
      })
      .then(function (res) {
        console.log(res);
        self.$router.push({name: "logout"})
        self.$emit('update-auth-notification', false) //★
        self.$emit('update-user-notification', res.data) //★
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  }
}
</script>
