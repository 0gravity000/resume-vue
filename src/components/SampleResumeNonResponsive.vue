<template>
<div class="container">
  <div class="row">
    <div class="col">
      <div class="column is-6 goto-top">
        <router-link to="/">戻る</router-link>
      </div>
    </div>  <!-- col -->
    <div class="col">
      <div class="column is-6"></div>
    </div>  <!-- col -->
  </div>  <!-- row -->
</div>
<div class="container-fluid">
  <div class="row">
    <h3>履歴書サンプル</h3>
    <div class="col">
      <div class="columns">
        <div class="column is-6 text-end">{{japaneseYearToday()}}現在</div>
      </div>
    </div>  <!-- col -->
    <div class="col">
    </div>  <!-- col -->
  </div>  <!-- row -->
</div>

<div class="first-grid">
  <div class="left-grid ms-1">

    <div class="segment-01">
      <div class="hurigana">
        <div class="row">
          <div class="col-2">
            <div>ふりがな</div>
          </div>
          <div class="col">
            <div>りれき はなこ</div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="name">
        <div class="row">
          <div class="col-2">
            <div>氏 名</div>
          </div>
          <div class="col">
            <div class="name-name">履歴 花子</div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="birth">
        <div class="row">
          <div class="col">
            <div>1987年 8月 12日 （満 xx 歳）</div>
          </div>
          <div class="col-3">
            <div>男・<span class="maru">女</span></div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="hurigana">
        <div class="row">
          <div class="col-2">
            <div>ふりがな</div>
          </div>
          <div class="col">
            <div>とうきょうとちよだくひとつばし</div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="address">
        <div class="row">
          <div class="col-2">
            <div class="address-header">現住所</div>
          </div>
          <div class="col">
            <div>〒xxx-xxxx</div>
            <div>東京都千代田区一ツ橋 １－１－１</div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="hurigana">
        <div class="row">
          <div class="col-2">
            <div>ふりがな</div>
          </div>
          <div class="col">
            <div></div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="contact">
        <div class="row">
          <div class="col-2">
            <div class="contact-header">連絡先</div>
          </div>
          <div class="col">
            <div>同上</div>
          </div>
        </div>  <!-- row end-->
      </div>
    </div>  <!-- segment-01 end-->

  </div>  <!-- left-grid end -->
  <div class="center-grid">
    <div>
        <img src="../assets/person-shadow.jpg" class="my-picture" alt="...">
    </div>  <!-- card -->

    <div class="segment-04">
      <div class="address-phone-header">
        <div>電話番号</div>
      </div>
      <div class="address-phone">
        <div>090-xxxx-xxxx</div>
      </div>
      <div class="address-email-header">
        <div>メールアドレス</div>
      </div>
      <div class="address-email">
        <div>foo@example.com</div>
      </div>
      <div class="contact-phone-header">
        <div>電話番号</div>
      </div>
      <div class="contact-phone">
        <div>090-○○○○-○○○○</div>
      </div>
      <div class="contact-email-header">
        <div>メールアドレス</div>
      </div>
      <div class="contact-email">
        <div>bar@example.com</div>
      </div>
    </div>  <!-- segment-04 end-->
  </div>  <!-- center-grid end -->

  <div class="right-grid ms-2">
    <div class="segment-05">
      <div class="year-manth-header">
        <div class="row">
          <div class="col-2">
            <div class="year-column">年</div>
          </div>
          <div class="col-1">
            <div class="month-column">月</div>
          </div>
          <div class="col">
            <div>学歴・職歴</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div v-for="i of 11" :key="i">
        <div class="year-manth-blank year-manth-item">
          <div class="row">
            <div class="col-2">
              <div class="year-column">&nbsp;</div>
            </div>
            <div class="col-1">
              <div class="month-column">&nbsp;</div>
            </div>
            <div class="col">
              <div>&nbsp;</div>
            </div>
          </div>  <!-- row end -->
        </div>
      </div>  <!-- v-for end -->
      <div class="year-manth-blank">   <!-- 最終列はborder-bottonmを描かない -->
        <div class="row">
          <div class="col-2">
            <div class="year-column">&nbsp;</div>
          </div>
          <div class="col-1">
            <div class="month-column">&nbsp;</div>
          </div>
          <div class="col">
            <div>&nbsp;</div>
          </div>
        </div>  <!-- row end -->
      </div>

    </div>  <!-- segment-05 end-->
  </div>  <!-- right-grid end -->

</div>  <!-- first-grid end -->
<div class="second-grid mb-2">
  <div class="left-grid ms-1">
    <div class="segment-06">
      <div class="year-manth-header">
        <div class="row">
          <div class="col-2">
            <div class="year-column">年</div>
          </div>
          <div class="col-1">
            <div class="month-column">月</div>
          </div>
          <div class="col">
            <div>学歴・職歴</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">&nbsp;</div>
          </div>
          <div class="col-1">
            <div class="month-column">&nbsp;</div>
          </div>
          <div class="col">
            <div>学歴</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">平成１６</div>
          </div>
          <div class="col-1">
            <div class="month-column">３</div>
          </div>
          <div class="col">
            <div>東京都立履歴高等学校 卒業</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">平成１６</div>
          </div>
          <div class="col-1">
            <div class="month-column">４</div>
          </div>
          <div class="col">
            <div>履歴大学経営学部経営情報学科 入学</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">平成２０</div>
          </div>
          <div class="col-1">
            <div class="month-column">３</div>
          </div>
          <div class="col">
            <div>履歴大学経営学部経営情報学科 卒業</div>
          </div>
        </div>  <!-- row end -->
      </div>

      <div class="year-manth-blank year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">&nbsp;</div>
          </div>
          <div class="col-1">
            <div class="month-column">&nbsp;</div>
          </div>
          <div class="col">
            <div>&nbsp;</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">&nbsp;</div>
          </div>
          <div class="col-1">
            <div class="month-column">&nbsp;</div>
          </div>
          <div class="col">
            <div>職歴</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">平成２０</div>
          </div>
          <div class="col-1">
            <div class="month-column">４</div>
          </div>
          <div class="col">
            <div>株式会社ｘｘｘ 入社</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">平成２１</div>
          </div>
          <div class="col-1">
            <div class="month-column">３</div>
          </div>
          <div class="col">
            <div>一身上の都合により退職</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">平成２１</div>
          </div>
          <div class="col-1">
            <div class="month-column">４</div>
          </div>
          <div class="col">
            <div>株式会社○○○ 入社</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">平成２６</div>
          </div>
          <div class="col-1">
            <div class="month-column">４</div>
          </div>
          <div class="col">
            <div>営業部 営業二課に異動</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="until-now year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">&nbsp;</div>
          </div>
          <div class="col-1">
            <div class="month-column">&nbsp;</div>
          </div>
          <div class="col">
            <div>現在に至る</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="that-is-all year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">&nbsp;</div>
          </div>
          <div class="col-1">
            <div class="month-column">&nbsp;</div>
          </div>
          <div class="col">
            <div>以上</div>
          </div>
        </div>  <!-- row end -->
      </div>

      <div v-for="i of 4" :key="i">
        <div class="year-manth-blank year-manth-item">
          <div class="row">
            <div class="col-2">
              <div class="year-column">&nbsp;</div>
            </div>
            <div class="col-1">
              <div class="month-column">&nbsp;</div>
            </div>
            <div class="col">
              <div>&nbsp;</div>
            </div>
          </div>  <!-- row end -->
        </div>
      </div>  <!-- v-for end -->
      <div class="year-manth-blank">   <!-- 最終列はborder-bottonmを描かない -->
        <div class="row">
          <div class="col-2">
            <div class="year-column">&nbsp;</div>
          </div>
          <div class="col-1">
            <div class="month-column">&nbsp;</div>
          </div>
          <div class="col">
            <div>&nbsp;</div>
          </div>
        </div>  <!-- row end -->
      </div>

    </div>  <!-- segment-06 end-->
  </div>  <!-- left-grig end -->

  <div class="right-grid ms-2">
    <div class="segment-07">
      <div class="year-manth-header">
        <div class="row">
          <div class="col-2">
            <div class="year-column">年</div>
          </div>
          <div class="col-1">
            <div class="month-column">月</div>
          </div>
          <div class="col">
            <div>免許・資格</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">平成１７</div>
          </div>
          <div class="col-1">
            <div class="month-column">５</div>
          </div>
          <div class="col">
            <div>普通自動車第一種運転免許 取得</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="that-is-all year-manth-item">
        <div class="row">
          <div class="col-2">
            <div class="year-column">&nbsp;</div>
          </div>
          <div class="col-1">
            <div class="month-column">&nbsp;</div>
          </div>
          <div class="col">
            <div>以上</div>
          </div>
        </div>  <!-- row end -->
      </div>

      <div v-for="i of 6" :key="i">
        <div class="year-manth-blank year-manth-item">
          <div class="row">
            <div class="col-2">
              <div class="year-column">&nbsp;</div>
            </div>
            <div class="col-1">
              <div class="month-column">&nbsp;</div>
            </div>
            <div class="col">
              <div>&nbsp;</div>
            </div>
          </div>  <!-- row end -->
        </div>
      </div>  <!-- v-for end -->

      <div class="self-pr">
        <div class="self-pr-header">志望の動機、自己PR、趣味、特技など</div>
        <div>
            リフォーム営業として貴社の物件に以前から興味を持っていました。
            前職での経験を生かして、貴社に貢献したいと考え志望いたしました。
        </div>
      </div>
      <div class="personal-request">
        <div class="personal-request-header">本人希望記入欄（特に待遇・職種・勤務時間・その他についての希望などがあれば記入）</div>
        <div>
            営業職を希望いたします。勤務地は現住所からの通勤可能な範囲で希望いたします。
        </div>
      </div>
      <div class="commuting-time-dependents">
        <div class="row">
          <div class="col">
            <div>通勤時間</div>
          </div>
          <div class="col">
            <div class="commuting-time">約 ４５ 分</div>
          </div>
          <div class="col">
            <div class="dependents-header">扶養家族(配偶者を除く)</div>
          </div>
          <div class="col">
            <div>人</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="row">
          <div class="col">
            <div>配偶者</div>
          </div>
          <div class="col">
            <div class="spouse"><span class="maru">有</span> ・ 無</div>
          </div>
          <div class="col">
            <div>配偶者の扶養家族</div>
          </div>
          <div class="col">
            <div>有 ・ <span class="maru">無</span></div>
          </div>
      </div>  <!-- row end -->
    </div>  <!-- segment-07 end-->
  </div>  <!-- right-grid end -->
</div>  <!-- second-grid end -->

</template>

<script>

export default {
  mounted() {
    this.japaneseYearToday()
  },
  methods: {
    japaneseYearToday() {
      let today = new Date()
      return "令和"+(today.getFullYear()-2018)+"年"+(today.getMonth()+1)+"月"+(today.getDate())+"日"
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goto-top {
  text-align: start;
}
.first-grid{
  display: grid;
  grid-template-columns: 400px 200px 600px;
  width: 1200px;
  height: 370px;
}
/*
.left-grid{
  background-color: lightpink;
}
.center-grid{
  background-color: lightyellow;
}
.right-grid{
  background-color: lightblue;
}
*/
.second-grid{
  display: grid;
  grid-template-columns: 600px 600px;
  width: 1200px;
  height: 500px;
}
.segment-01, .segment-04, .segment-05, .segment-06, .segment-07{
  border: solid;
}

.hurigana {
  font-size: 0.7rem;
  height: 20px;
  border-bottom: dotted;
}
.name {
  height: 80px;
  border-bottom: solid;
}
.name-name {
  font-size: 2rem;
}
.birth {
  height: 50px;
  border-bottom: solid;
}
.address-header, .contact-header{
  font-size: 0.85rem;
}
.address {
  height: 80px;
  border-bottom: solid;
}
.contact {
  height: 80px;
}
.my-picture {
  border: solid;
  width: 120px;
  height: 150px;
}
.segment-04 {
  text-align: start;
}
.address-phone, .address-email, .contact-phone {
  border-bottom: solid;
}
.year-manth-header{
  border-bottom: solid;
  background-color: lightgray;
}
.year-manth-item {
  border-bottom: solid;
}
.year-manth-blank {
  height: 1.65rem;
}
.year-column{
  border-right: dotted;
}
.month-column{
  border-right: solid;
}
.until-now {
  text-align: start;
}
.that-is-all {
  text-align: end;
}
.self-pr {
  text-align: start;
  border-bottom: solid;
  height: 100px;
}
.self-pr-header {
  text-align: start;
  border-bottom: solid;
  background-color: lightgray;
}
.personal-request {
  text-align: start;
  border-bottom: solid;
  height: 100px;
}
.personal-request-header {
  text-align: start;
  border-bottom: solid;
  font-size: 0.7rem;
  background-color: lightgray;
}
.commuting-time-dependents {
  border-bottom: solid;
}
.commuting-time {
  border-right: solid;
}
.dependents-header {
  font-size: 0.7rem;
}
.spouse {
  border-right: solid;
}
.maru {
  height:50px;
  width:50px;
  border: solid;
  border-radius:50%;
  line-height:30px;
  text-align:center;
}
</style>
