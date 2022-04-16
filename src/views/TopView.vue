<template>
<div class="top">
  <div class="container-fluid">
    <div class="card bg-dark text-white">
      <img src="../assets/application_1280.jpg" class="card-img" width="800" height="600" alt="...">
      <div class="card-img-overlay">
        <div class="card-overlay-text">
          <h5 class="card-title text-center">Resume | 履歴書を簡単に作成</h5>
          <p class="card-text text-center">面倒な履歴書、職務経歴書の作成の負担を軽減します。</p>
          <div class="d-grid gap-2 col-4 mx-auto">
            <button class="content_boxlink mt-3" type="button" onclick="location.href='/guest'">サンプルを見てみる</button>
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
