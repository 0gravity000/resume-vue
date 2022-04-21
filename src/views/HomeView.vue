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
        //const str = window.location.href
        //const str2= str.replace('/home', '');
        //console.log(str2);
        //window.location.href = 'http://127.0.0.1:5000/'
        //self.push({ name: "top" }) NG
        //window.location.href = str2
        self.$router.push({name: "logout"})
        //self.$router.push({name: "top"})
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  }
}
</script>
