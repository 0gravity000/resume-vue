<template>
<div class="container-fluid">
  <div class="row">
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
            <div>{{this.UserModel.lastname_kana}}&nbsp;{{this.UserModel.firstname_kana}}</div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="name">
        <div class="row">
          <div class="col-2">
            <div>氏 名</div>
          </div>
          <div class="col">
            <div class="name-name">{{this.UserModel.lastname}}&nbsp;{{this.UserModel.firstname}}</div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="birth">
        <div class="row">
          <div class="col">
            <div>{{this.UserModel.birth_year}}年{{this.UserModel.birth_month}}月{{this.UserModel.birth_day}}日 （満 xx 歳）</div>
          </div>
          <div class="col-3">
            <div v-if="this.UserModel.gender===1">
              <div><span class="maru">男</span>・女</div>
            </div>
            <div v-else>
              <div>男・<span class="maru">女</span></div>
            </div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="hurigana">
        <div class="row">
          <div class="col-2">
            <div>ふりがな</div>
          </div>
          <div class="col">
            <div>{{this.UserModel.address_kana}}</div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="address">
        <div class="row">
          <div class="col-2">
            <div class="address-header">現住所</div>
          </div>
          <div class="col">
            <div>〒{{this.UserModel.address_zipcode}}</div>
            <div>{{this.UserModel.address}}</div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="hurigana">
        <div class="row">
          <div class="col-2">
            <div>ふりがな</div>
          </div>
          <div class="col">
            <div>{{this.UserModel.contact_kana}}</div>
          </div>
        </div>  <!-- row end-->
      </div>
      <div class="contact">
        <div class="row">
          <div class="col-2">
            <div class="contact-header">連絡先</div>
          </div>
          <div class="col">
            <div>〒{{this.UserModel.contact_zipcode}}</div>
            <div>{{this.UserModel.contact}}</div>
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
      <div class="address-phone-email">
        <div class="address-phone-header">
          <div>電話番号</div>
        </div>
        <div class="address-phone">
          <div>{{this.UserModel.address_phone}}</div>
        </div>
        <div class="address-email-header">
          <div>メールアドレス</div>
        </div>
        <div class="address-email">
          <div>{{this.UserModel.address_email}}</div>
        </div>
      </div>
      <div class="contact-phone-email">
        <div class="contact-phone-header">
          <div>電話番号</div>
        </div>
        <div class="contact-phone">
          <div>{{this.UserModel.contact_phone}}</div>
        </div>
        <div class="contact-email-header">
          <div>メールアドレス</div>
        </div>
        <div class="contact-email">
          <div>{{this.UserModel.contact_email}}</div>
        </div>
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

      <!-- ここの職歴は職歴が15行以上の場合に表示する -->
      <div v-if="this.isWorkhistoryOver14===true">
        <div v-for="i of workhistoryRightLength" :key="i">
          <div class="year-manth-item">
            <div class="row">
              <div class="col-2">
                <div class="year-column">{{convertYearToJapaneseYear(WorkhistoryModel[i+13].event_year)}}&nbsp;</div>
              </div>
              <div class="col-1">
                <div class="month-column">{{WorkhistoryModel[i+13].event_month}}&nbsp;</div>
              </div>
              <div class="col">
                <div>{{WorkhistoryModel[i+13].event}}&nbsp;</div>
              </div>
            </div>  <!-- row end -->
          </div>
        </div>
        <!-- ここの職歴は職歴が15行以上-24以下の場合に、空白行を埋める -->
        <div v-for="i of (11 - workhistoryRightLength)" :key="i">
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
        <!-- ここの「現在に至る」と「以上」は職歴が15行以上の場合に表示する -->
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
        <div class="that-is-all">
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

      </div>  <!-- v-if end -->
      <!-- ここの職歴は職歴が14行以下の場合に空白行で埋める -->
      <div v-else>
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
      </div>    <!-- v-else end -->

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

      <div v-for="item in EducationModel" :key="item.id">
        <div class="year-manth-item">
          <div class="row">
            <div class="col-2">
              <div class="year-column">{{convertYearToJapaneseYear(item.event_year)}}&nbsp;</div>
            </div>
            <div class="col-1">
              <div class="month-column">{{item.event_month}}&nbsp;</div>
            </div>
            <div class="col">
              <div>{{item.event}}&nbsp;</div>
            </div>
          </div>  <!-- row end -->
        </div>
      </div>

      <div class="year-manth-blank year-manth-item">  <!-- 空白行 -->
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

      <!-- 職歴がない場合、ここの職歴は空白行を表示する -->
      <div v-if="this.workhistoryLength===0">
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
      </div>  <!-- v-if end -->
      <!-- 職歴がある場合、ここの職歴は最大14行を表示する。15行目からは右上に表示する -->
      <div v-else>
        <div v-for="i of workhistoryLeftLength" :key="i">
          <div class="year-manth-item">
            <div class="row">
              <div class="col-2">
                <div class="year-column">{{convertYearToJapaneseYear(WorkhistoryModel[i-1].event_year)}}&nbsp;</div>
              </div>
              <div class="col-1">
                <div class="month-column">{{WorkhistoryModel[i-1].event_month}}&nbsp;</div>
              </div>
              <div class="col">
                <div>{{WorkhistoryModel[i-1].event}}&nbsp;</div>
              </div>
            </div>  <!-- row end -->
          </div>
        </div>
      </div>  <!-- v-else end -->

      <!-- ここの「現在に至る」と「以上」は職歴が14行以下の場合に表示する -->
      <div v-if="this.isWorkhistoryOver14===false">
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
      </div>

      <!-- 職歴が14行以下の場合、空行を埋める -->
      <div v-for="i of (13 - workhistoryLeftLength)" :key="i">
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

      <div v-for="item in QualificationModel" :key="item.id">
        <div class="year-manth-item">
          <div class="row">
            <div class="col-2">
              <div class="year-column">{{convertYearToJapaneseYear(item.qualification_year)}}&nbsp;</div>
            </div>
            <div class="col-1">
              <div class="month-column">{{item.qualification_month}}&nbsp;</div>
            </div>
            <div class="col">
              <div>{{item.qualification}}&nbsp;</div>
            </div>
          </div>  <!-- row end -->
        </div>
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
        <div>{{UserModel.self_pr}}</div>
      </div>
      <div class="personal-request">
        <div class="personal-request-header">本人希望記入欄（特に待遇・職種・勤務時間・その他についての希望などがあれば記入）</div>
        <div>{{UserModel.personal_request}}</div>
      </div>
      <div class="commuting-time-dependents">
        <div class="row">
          <div class="col">
            <div>通勤時間</div>
          </div>
          <div class="col">
            <div class="commuting-time">{{UserModel.commuting_time}}&nbsp;</div>
          </div>
          <div class="col">
            <div class="dependents-header">扶養家族(配偶者を除く)</div>
          </div>
          <div class="col">
            <div>{{UserModel.dependents}}人</div>
          </div>
        </div>  <!-- row end -->
      </div>
      <div class="row">
          <div class="col">
            <div>配偶者</div>
          </div>
          <div class="col">
            <div v-if="this.UserModel.spouse===true">
              <div class="spouse"><span class="maru">有</span> ・ 無</div>
            </div>
            <div v-else>
              <div class="spouse">有 ・ <span class="maru">無</span></div>
            </div>
          </div>
          <div class="col">
            <div>配偶者の扶養家族</div>
          </div>
          <div class="col">
            <div v-if="this.UserModel.dependents_of_spouse===true">
              <div><span class="maru">有</span> ・ 無</div>
            </div>
            <div v-else>
              <div>有 ・ <span class="maru">無</span></div>
            </div>
          </div>
      </div>  <!-- row end -->
    </div>  <!-- segment-07 end-->
  </div>  <!-- right-grid end -->
</div>  <!-- second-grid end -->

</template>

<script>
const axios = require('axios').default

export default {
  data () {
    return {
      UserModel: {},
      EducationModel: [],
      WorkhistoryModel: [],
      QualificationModel: [],
      workhistoryLength: 0,
      isWorkhistoryOver14: false,
      workhistoryLeftLength: 0,
      workhistoryRightLength: 0,
    }
  },
  mounted() {
    this.japaneseYearToday()
    this.getUserInfo()
    this.getEducationInfo()
    this.getWorkhistoryInfo()
    this.getQualificationInfo()
},
  methods: {
    convertYearToJapaneseYear(year) {
      //console.log(year)
      if (year === null) {
        return ""
      } else if (year >= 2019) {
        //console.log("令和？")
        return "令和" + (year - 2018)
      } else if (year >= 1989 && year < 2019) {
        //console.log("平成？")
        //console.log("平成" + (year - 1988) + "年")
        return "平成" + (year - 1988)
      } else {
        //console.log("昭和？")
        return "昭和" + (year - 1924)
      }
    },
    japaneseYearToday() {
      let today = new Date()
      return "令和"+(today.getFullYear()-2018)+"年"+(today.getMonth()+1)+"月"+(today.getDate())+"日"
    },
    getUserInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/user', {
      })
      .then(function (res) {
        console.log("UserInfoView：")
        console.log(res.data)
        self.UserModel = res.data
      })
      .catch(function (err) {
        console.log("UserInfoView：")
        console.log(err);
      })
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
      })
    },
    getWorkhistoryInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/workhistoy', {
      })
      .then(function (res) {
        console.log("WorkhistoryView：")
        console.log(res.data)
        self.WorkhistoryModel = res.data
        self.workhistoryLength = self.WorkhistoryModel.length   //要注意:0の時
        if (self.WorkhistoryModel.length <= 14) {
          self.isWorkhistoryOver14 = false
          self.workhistoryLeftLength = self.WorkhistoryModel.length
          self.workhistoryRightLength = 0
        } else {
          self.isWorkhistoryOver14 = true
          self.workhistoryLeftLength = 14
          self.workhistoryRightLength = self.WorkhistoryModel.length -14
        }

        console.log("self.WorkhistoryModel:")
        console.log(self.WorkhistoryModel)
        console.log(self.WorkhistoryModel.length)
        console.log(self.WorkhistoryModel[0])
        console.log(self.WorkhistoryModel[0].id)
        console.log(self.WorkhistoryModel[1])
        console.log(self.WorkhistoryModel[2])
      })
      .catch(function (err) {
        console.log("WorkhistoryView：")
        console.log(err);
      })
    },
    getQualificationInfo: function () {
      let self = this;  //promiseコールバック関数内でthisは使えないので回避用 this.$router.push('/') NG
      axios.get('/api/qualification', {
      })
      .then(function (res) {
        console.log("QualificationView：")
        console.log(res.data)
        self.QualificationModel = res.data
      })
      .catch(function (err) {
        console.log("QualificationView：")
        console.log(err);
      })
    },

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
  height: 580px;
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
  text-align: start;
}
.contact {
  height: 80px;
  text-align: start;
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
.address-phone-header, .address-phone, .address-email-header, .address-email,
.contact-phone-header, .contact-phone, .contact-email-header, .contact-email{
  height: 25px;
}
.address-phone, .address-email-header, .address-email,
.contact-phone-header, .contact-phone, .contact-email-header, .contact-email{
  height: 25px;
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
