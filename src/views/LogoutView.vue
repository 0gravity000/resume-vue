<template>
  <div class="logout">
    <h1>ログアウトしました。</h1>
  </div>
</template>

<script>
export default {
  mounted () {
    //this.goToTop()
  },
  methods: {
    goToTop() {
      console.log("Now in logout goToTop function");
      this.$router.push('/')
    }
  }
}

</script>
