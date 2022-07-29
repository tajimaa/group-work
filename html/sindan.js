//問題と回答
qa = new Array();
qa[0] = ["今回購入検討中のpcの主な用途は何ですか？","主に自宅で、日常的な調べごとやオンラインショッピング、事務作業などに使いたい<br><br>","自宅での普段使いに加えて、学校や職場などへの外出先へ持ち運んで使いたい<br><br>","写真編集や動画制作、オンラインpcゲームなどで使いたい", 200, 500, 1000];
qa[1] = ["今回購入を検討しているpcの予算はどれくらいですか?<br>","安いほうがいい<br><br>","中間ほどがいい<br><br>","値段は問わない<br>", 200, 500, 1000];
qa[2] = ["以下の中で、最もあてはまるものを選んでください","せっかく買うなら最新のスペックや機能を搭載しているものがいい。<br><br>","スペックや性能も重要だが、値段も少し抑えたい。<br><br>","特にこだわりがない、できるだけ安いものがいい。<br>",1000, 500, 200];


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
    if (ansers > 100000) ansers = 100000; //上限値
    if (ansers <= -1) {
        game_over(); //不具合
    } else {

        //次の問題を表示
        count++;
        if (count < qa.length) {
            sindan();
        }else {
             //終了
            if (ansers >= 2500) {
                 s = "超すげーはいぱぱそこん";
            } else if(ansers >= 1700) {
                s = "すげーぱそこん";
            } else if(ansers >= 1200) {
                s = "そこそこぱそこん";
            }else {
                s = "ザコぱそ";
            }

    
            document.getElementById("text_q").innerHTML = s;
            //次の選択肢
            s = "【<a href = 'javascript:history.back()'>前のページに戻る</a>】";
            s += "【<a href = 'javascript:setReady()'>同じ問題を最初から</a>】";
            s += "【<a href = ''>次の問題に進む</a>】";
            document.getElementById("text_s").innerHTML = s;
         }//改良案の前までやりました。
     }
}
const text_s = document.getElementById('text_s');

//マウスが要素上に入った時
text_s.addEventListener('mouseover', () => {
  
    text_s.style.text = '#000000';
  
}, false);

//マウスが要素上から離れた時
text_s.addEventListener('mouseleave', () => {
  
    text_s.style.text = '#0091EA';
  
}, false);


