//問題と回答
qa = new Array();
qa[0] = ["どのpcを購入予定ですか？","ノートpc。<br><br>","デスクトップpc。<br><br>","どちらでもよい。", 0, 100000, 50000];
qa[1] = ["今回購入を検討しているpcの予算はどれくらいですか?<br>","安いほうがいい。<br><br>","中間ほどがいい。<br><br>","値段は問わない。<br>", 200, 500, 1000];
qa[2] = ["以下の中で、最もあてはまるものを選んでください","日常的な調べごとやオンラインショッピング、事務作業などで使う最低限の性能のpc。。<br><br>","動画閲覧やコーディングなどで使う、中程度の性能のpc。<br><br>","写真編集や動画制作、オンラインpcゲームなどで使う高い性能のpc。<br>", 200, 500, 1000];


//初期設定
q_sel = 3; //選択肢の数

setReady();

//初期設定
function setReady() {
    count = 0; //問題番号
    ansers = 0; //回答記録

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
        s += "<a href='javascript:anser(" + n +")'>" + n + " : " + qa[count][n] + "</a>";
    }
    document.getElementById("text_s").innerHTML = s;

}
//回答表示
function anser(num) {
    var s;
    s = "設問" + (count + 1) + ":";
    //スコアの増分
    ansers += qa[count][num + q_sel];
    //結果表示
    if (qa[count][num + q_sel] >= 0) s += "+";
    s += qa[count][num + q_sel];

    //ansers(合計スコア)のチェック
    //if (ansers > 100000) ansers = 100000; //上限値
    if (ansers <= -1) {
        game_over(); //不具合
    } else {

        //次の問題を表示
        count++;
        if (count < qa.length) {
            sindan();
        }else {
             //終了　デスクトップpc表示
            if (ansers >= 101500) {
                s = "dpすげーはいぱ";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'file:///C:/Users/koyama/Desktop/%E9%96%8B%E7%99%BA%E6%AE%B4%E6%89%93/group-work/html/index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>同じ問題を最初から</a>】";
                s += "【<a href = ''>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(ansers >= 101000) {
                s = "dpすげー";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'file:///C:/Users/koyama/Desktop/%E9%96%8B%E7%99%BA%E6%AE%B4%E6%89%93/group-work/html/index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>同じ問題を最初から</a>】";
                s += "【<a href = ''>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(ansers >= 100000) {
                s = "dpそこそこぱそこん";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'file:///C:/Users/koyama/Desktop/%E9%96%8B%E7%99%BA%E6%AE%B4%E6%89%93/group-work/html/index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>同じ問題を最初から</a>】";
                s += "【<a href = ''>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

                //ノートとデスクトップ表示
            } else if(ansers >= 51500) {
                s = "dnpすげーはいぱ";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'file:///C:/Users/koyama/Desktop/%E9%96%8B%E7%99%BA%E6%AE%B4%E6%89%93/group-work/html/index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>同じ問題を最初から</a>】";
                s += "【<a href = ''>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(ansers >= 51000) {
                s = "dnpすげー";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'file:///C:/Users/koyama/Desktop/%E9%96%8B%E7%99%BA%E6%AE%B4%E6%89%93/group-work/html/index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>同じ問題を最初から</a>】";
                s += "【<a href = ''>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(ansers >= 50000) {
                s = "dnpそこそこぱそこん";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'file:///C:/Users/koyama/Desktop/%E9%96%8B%E7%99%BA%E6%AE%B4%E6%89%93/group-work/html/index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>同じ問題を最初から</a>】";
                s += "【<a href = ''>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

                //ノート表示
            } else if(ansers >= 1500) {
                s = "npすげーはいぱ";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'file:///C:/Users/koyama/Desktop/%E9%96%8B%E7%99%BA%E6%AE%B4%E6%89%93/group-work/html/index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>同じ問題を最初から</a>】";
                s += "【<a href = ''>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            } else if(ansers >= 1000) {
                s = "npすげー";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'file:///C:/Users/koyama/Desktop/%E9%96%8B%E7%99%BA%E6%AE%B4%E6%89%93/group-work/html/index.html'>前のページに戻る</a>】";
                s += "【<a href = 'javascript:setReady()'>同じ問題を最初から</a>】";
                s += "【<a href = ''>詳細を見る</a>】";
                document.getElementById("text_s").innerHTML = s;

            }else {
                s = "npそこそこ";
                document.getElementById("text_q").innerHTML = s;
                //次の選択肢
                s = "【<a href = 'file:///C:/Users/koyama/Desktop/%E9%96%8B%E7%99%BA%E6%AE%B4%E6%89%93/group-work/html/index.html'>前のページに戻る</a>】";
                s += "【<a href =  'javascript:setReady()'>同じ問題を最初から</a>】";
                s += "【<a href = ''>詳細を見る</a>】";
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


