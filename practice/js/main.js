'use strict'
{
  //ボタンをクリックしたときのイベント  
  document.getElementById('btn').addEventListener('click', function(){

    //比較するpassword
    const password = '0517';

    //inputに入力された値を取得
    let pass = document.getElementById('pass').value;

    //if文でpassが間違っているときとあっているときの処理を分岐
    if (pass === password) {
      location.href = 'nextpage.html';
    } else {
      alert('passwordが違います。');
    }
  })
}