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
        <div class="col">
            <div class="columns">
                <div class="column is-6">履歴書</div>
                <div class="column is-6 text-end">令和３年 ８月１８日現在</div>
            </div>
        </div>  <!-- col -->
        <div class="col">
        </div>  <!-- col -->
    </div>  <!-- row -->

    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col-9">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column is-2 fontsize-sm">ふりがな</div>
                                <div class="column fontsize-sm">りれき はなこ</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column is-2 fontsize-sm">氏 名</div>
                                <div class="column">履歴 花子</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column is-2 fontsize-sm">生年月日</div>
                                <div class="column">1987年 8月 12日 （満 xx 歳）</div>
                                <div class="column is-3 text-end">男・<span class="maru">女</span></div>
                            </div>
                        </li>
                    </ul>
                </div>  <!-- card -->
                </div>  <!-- col -->

                <div class="col">
                <div class="card">
                    <img src="../assets/person-shadow.jpg" class="card-img-top card-img-size" alt="...">
                </div>  <!-- card -->
                </div>  <!-- col -->
            </div>  <!-- row -->

            <div class="row">
                <div class="col-9 pr-0">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column is-2 fontsize-sm card-row-hight-30">ふりがな</div>
                                <div class="column fontsize-sm">とうきょうとちよだくひとつばし</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column is-2 fontsize-sm card-row-hight-70">現住所</div>
                                <div class="column">東京都千代田区一ツ橋 １－１－１</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column is-2 fontsize-sm card-row-hight-30">ふりがな</div>
                                <div class="column fontsize-sm"></div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column fontsize-sm is-2 card-row-hight-70">連絡先</div>
                                <div class="column">同 上</div>
                            </div>
                        </li>
                    </ul>
                </div>    <!-- card -->
                </div>  <!-- col -->

                <div class="col pl-0">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="columns">
                                    <div class="column fontsize-sm card-row-hight-8">電話番号</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                    <div class="column fontsize-sm card-row-hight-25">090-xxxx-xxxx</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column fontsize-sm card-row-hight-8">E-mail</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column fontsize-sm card-row-hight-25">foo@example.com</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column fontsize-sm card-row-hight-8">電話番号</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                    <div class="column fontsize-sm card-row-hight-25">090-○○○○-○○○○</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column fontsize-sm card-row-hight-8">E-mail</div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="columns">
                                <div class="column fontsize-sm card-row-hight-25">bar@example.com</div>
                            </div>
                        </li>
                    </ul>
                </div>  <!-- card -->
                </div>  <!-- col -->
            </div>  <!-- row -->

            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="columns fw-bold">
                            <div class="column is-2 text-center">年</div>
                            <div class="column is-1 text-center">月</div>
                            <div class="column is-9 text-center">学 歴</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2">平成１６</div>
                            <div class="column is-1">３</div>
                            <div class="column is-9">東京都立履歴高等学校 卒業</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2">平成１６</div>
                            <div class="column is-1">４</div>
                            <div class="column is-9">履歴大学経営学部経営情報学科 入学</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2">平成２０</div>
                            <div class="column is-1">３</div>
                            <div class="column is-9">履歴大学経営学部経営情報学科 卒業</div>
                        </div>
                    </li>
                </ul>
            </div>  <!-- card -->
        </div>  <!-- col -->

        <div class="col">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="columns fw-bold">
                            <div class="column is-2 text-center">年</div>
                            <div class="column is-1 text-center">月</div>
                            <div class="column is-9 text-center">職 歴</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2">平成２０</div>
                            <div class="column is-1">４</div>
                            <div class="column is-9">株式会社ｘｘｘ 入社</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2">平成２１</div>
                            <div class="column is-1">３</div>
                            <div class="column is-9">一身上の都合により退職</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2">平成２１</div>
                            <div class="column is-1">４</div>
                            <div class="column is-9">株式会社○○○ 入社</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2">平成２６</div>
                            <div class="column is-1">４</div>
                            <div class="column is-9">営業部 営業二課に異動</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2"></div>
                            <div class="column is-1"></div>
                            <div class="column is-9">現在に至る</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2"></div>
                            <div class="column is-1"></div>
                            <div class="column is-9 text-end">以上</div>
                        </div>
                    </li>

                </ul>
            </div>  <!-- card -->

            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="columns fw-bold">
                            <div class="column is-2 text-center">年</div>
                            <div class="column is-1 text-center">月</div>
                            <div class="column is-9 text-center">免許・資格</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2">平成１７</div>
                            <div class="column is-1">５</div>
                            <div class="column is-9">普通自動車第一種運転免許 取得</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-2"></div>
                            <div class="column is-1"></div>
                            <div class="column is-9  text-end">以上</div>
                        </div>
                    </li>
                </ul>
            </div>  <!-- card -->

            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="columns fw-bold">
                            <div class="column is-full text-center">志望の動機、自己PR、趣味、特技など</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-full">
                                リフォーム営業として貴社の物件に以前から興味を持っていました。
                                前職での経験を生かして、貴社に貢献したいと考え志望いたしました。
                            </div>
                        </div>
                    </li>
                </ul>
            </div>  <!-- card -->
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="columns fw-bold">
                            <div class="column is-full text-center fontsize-sm">本人希望記入欄（特に待遇・職種・勤務時間・その他についての希望などがあれば記入）</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-full">
                                営業職を希望いたします。勤務地は現住所からの通勤可能な範囲で希望いたします。
                            </div>
                        </div>
                    </li>
                </ul>
            </div>  <!-- card -->

            <div class="row">
                <div class="col pr-0">
                <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-3 text-center fontsize-sm">通勤時間</div>
                            <div class="column is-9 text-center">約 ４５ 分</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-3 text-center fontsize-sm">配偶者</div>
                            <div class="column is-6 text-center"><span class="maru">有</span> ・ 無</div>
                        </div>
                    </li>
                </ul>
                </div>  <!-- card -->
                </div>  <!-- col -->
                <div class="col pl-0">
                <div class="card">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-6 text-center fontsize-sm">扶養家族（配偶者を除く）</div>
                            <div class="column is-6 text-center">人</div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="columns">
                            <div class="column is-6 text-center fontsize-sm">配偶者の扶養家族</div>
                            <div class="column is-6 text-center">有 ・ <span class="maru">無</span></div>
                        </div>
                    </li>
                </ul>
                </div>  <!-- card -->
                </div>  <!-- col -->
            </div>  <!-- row -->
        </div>  <!-- col -->
    </div>  <!-- row -->
    </div>

</template>

<script>

export default {
  methods: {
    /*
    goToTop() {
        this.$router.push('/')
    }
    */
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goto-top {
  text-align: start;
}

</style>
