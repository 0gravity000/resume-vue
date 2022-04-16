<template>
<div class="top">
  <div class="container-fluid">
    <div class="card bg-dark text-white">
      <img src="../assets/application_640.jpg" class="card-img" width="800" height="600" alt="...">
      <div class="card-img-overlay">
        <div class="card-overlay-text p-4">
          <h1 class="card-title text-center">Resume | 履歴書を簡単に作成</h1>
          <p class="card-text text-center">面倒な履歴書、職務経歴書の作成の負担を軽減します。</p>
          <div class="d-grid gap-2 col-4 mx-auto">
            <router-link to="/sample">
              <!--<button class="content_boxlink mt-3" type="button" onclick="location.href='/guest'">サンプルを見てみる</button>-->
              <button class="content_boxlink" type="button">サンプルを見てみる</button>
            </router-link>
          </div>
        </div>

        <div class="card-overlay-text p-4">
          <h3 class="card-title text-center">アカウントを登録して履歴書を作成する</h3>
          <div>
            <router-link to="/sample">
              <!--<button class="content_boxlink mt-3" type="button" onclick="location.href='/guest'">サンプルを見てみる</button>-->
              <button class="content_boxlink" type="button">アカウント登録</button>
            </router-link>
          </div>
        </div>

        <div class="card-overlay-text p-4">
          <h3 class="card-title text-center">既にアカウントをお持ちですか？</h3>
          <div>
            <router-link to="/sample">
              <!--<button class="content_boxlink mt-3" type="button" onclick="location.href='/guest'">サンプルを見てみる</button>-->
              <button class="content_boxlink" type="button">サインイン</button>
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TopView',
}
</script>
