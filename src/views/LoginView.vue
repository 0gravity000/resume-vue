<template>
  <div class="container">
    <div class="register">
      <h2 class="my-3">ログイン</h2>
      <div class="my-3">
        <router-link to="/">戻る</router-link>
      </div>
      <form>
        <div  class="row">
          <div class="col-12 mb-3">
            <label class="form-label">メールアドレス</label>
            <input id="ｰinput-email1" v-model="email" class="form-control" type="email" placeholder="your@example.com">
          </div>
          <div class="col-12 mb-3">
            <label class="form-label">パスワード</label>
            <input id="input-password1" v-model="password" class="form-control" type="password">
          </div>
          <button type="button" @click="authLogin" class="col-2 btn btn-primary m-2">ログイン</button>
        </div>  <!-- row end -->
      </form>
    </div>
  </div>
</template>

<script>
//let self = this.$router;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
const axios = require('axios').default

export default {
  name: 'LoginView',
  data () {
    return {
      email: "",
      password: "",
    }
  },
  mounted () {
    this.showLoginView()
  },
  methods: {
    showLoginView: function () {
      console.log("called showLoginView()")
    },
    authLogin: async function () {
      axios.post('/api/login', {
        email: this.email,
        password: this.password
      })
      .then(function (res) {
        console.log(res);
        const str = window.location.href
        const str2= str.replace('/login', '/home');
        //console.log(str2);
        //window.location.href = 'http://127.0.0.1:5000/'
        //self.push({ name: "top" }) NG
        window.location.href = str2
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register {
  text-align: start;
}

</style>