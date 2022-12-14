//問題と回答
qa = new Array();
qa[0] = ["どのpcを購入予定ですか？","ノートpc。<br><br>","デスクトップpc。<br><br>","どちらでもよい。", 50000, 100000, 0];
qa[1] = ["今回購入を検討しているpcの予算はどれくらいですか?<br>","安いほうがいい。<br><br>","中間ほどがいい。<br><br>","値段は問わない。<br>", 200, 500, 1000];
qa[2] = ["以下の中で、最もあてはまるものを選んでください","日常的な調べごとやオンラインショッピング、事務作業などで使う最低限の性能のpc。<br><br>","動画閲覧やコーディングなどで使う、中程度の性能のpc。<br><br>","写真編集や動画制作、オンラインpcゲームなどで使う高い性能のpc。<br>", 200, 500, 1000];


//初期設定
q_sel = 3; //選択肢の数

setReady();

//初期設定
function setReady() {
    count = 0; //問題番号
    answers = 0; //回答記録

    //最初の問題
    sindan();
}
//質問表示
function sindan() {
    //設問
    document.getElementById("text_q").innerHTML = "設問" + (count + 1) + ":" + qa[count][0];
    //選択肢
    s="";
    for (n = 1;n <= q_sel;n++){
        s += "<a href='javascript:answer(" + n +")'>" + n + " : " + qa[count][n] + "</a>";
    }
    document.getElementById("text_s").innerHTML = s;

}
//回答表示
function answer(num) {
    var s;
    s = "設問" + (count + 1) + ":";
    //スコアの増分
    answers += qa[count][num + q_sel];
    //結果表示
    if (qa[count][num + q_sel] >= 0) s += "+";
    s += qa[count][num + q_sel];

    //answers(合計スコア)のチェック
    //if (answers > 100000) answers = 100000; //上限値
    if (answers <= -1) {
        game_over(); //不具合
    } else {

        //次の問題を表示
        count++;
        if (count < qa.length) {
            sindan();
        }else {
             //終了　デスクトップpc表示
            if (answers >= 101500) {
                s = "デスクトップハイエンドPC";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>最初からやり直す</a>】";
                s += "【<a href = 'kekka1.html'>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(answers >= 101000) {
                s = "デスクトップミドルPC";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>最初からやり直す</a>】";
                s += "【<a href = 'kekka2.html'>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(answers >= 100000) {
                s = "デスクトップローエンドPC";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>最初からやり直す</a>】";
                s += "【<a href = 'kekka3.html'>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

                //ノートとデスクトップ表示
            } else if(answers >= 51500) {
                s = "ノートハイエンドPC";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>最初からやり直す</a>】";
                s += "【<a href = 'kekka4.html'>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(answers >= 51000) {
                s = "ノートミドルPC";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>最初からやり直す</a>】";
                s += "【<a href = 'kekka5.html'>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(answers >= 50000) {
                s = "ノートローエンドPC";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>最初からやり直す</a>】";
                s += "【<a href = 'kekka6.html'>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

                //ノート表示
            } else if(answers >= 1500) {
                s = "デスクトップ&ノートハイエンドPC";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>最初からやり直す</a>】";
                s += "【<a href = 'kekka7.html'>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(answers >= 1000) {
                s = "デスクトップ&ノートミドルPC";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>最初からやり直す</a>】";
                s += "【<a href = 'kekka8.html'>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            }else {
                s = "デスクトップ&ノートローエンドPC";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'index.html'>前のページに戻る</a>】";
                s += "【<a href =  'javascript:setReady()'>最初からやり直す</a>】";
                s += "【<a href = 'kekka9.html'>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;
            }   
        }
    }
}
const text_s = document.getElementById('text_s');

//マウスが要素上に入った時
text_s.addEventListener('mouseover', () => {

    text_s.style.text = '#008000';

}, false);

//マウスが要素上から離れた時
text_s.addEventListener('mouseleave', () => {

    text_s.style.text = '#008000';

}, false);


