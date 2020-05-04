'use strict'
{
  //画像変更用のパスを変える変数
  let img1 ;
  let img2 ;
  let img3 ;
  //次の画像のidを反映させるための変数
  let mry1Img ;
  let mry2Img ;
  let mry3Img ;

  //本文を変えるための変数
  let setumei1 = document.getElementById('setumei1');
  let setumei2 = document.getElementById('setumei2');
  let setumei3 = document.getElementById('setumei3');

  let btn = document.querySelector('button');
  //ボタンをクリックしたときのイベント
  btn.addEventListener('click',function(){

    //btnのidが'btn'だった時の処理
    if (btn.id == 'btn'){
      
      //一番先頭の画像を変えるコード
      img1 = document.getElementById('sinagawa');
      img1.src = 'css/IMG_0617.JPG';
      mry1Img = document.querySelector('img#sinagawa');
      mry1Img.id = 'kumo';
      //一番目の画像の説明
      setumei1.innerHTML = 'これは松戸にいた時、折り紙で作った蜘蛛だね。あの時はずっと家にいてハムと遊んだり、夜はポケモンGOしたり、お金ない中で楽しく過ごしてたよね。楽しかったな。';
        
        
      //二番目の画像を変えるコード
      img2 = document.getElementById('puri');
      img2.src = 'css/IMG_0764.JPG';
      mry2Img = document.querySelector('img#puri');
      mry2Img.id = 'ring';
      //二番目の画像の説明
      setumei2.innerHTML = '松戸に引っ越して松戸の市役所に<b>婚姻届</b>出しに行ったよね。指輪も高い物じゃないし新婚旅行も海外とか贅沢な旅行は出来てないけど文句一つ言わず喜んでくれてありがとう。これからもっと頑張って松戸の時みたいに時間に縛られず生活出来るようにさせてみせる。';
        
            
      //最後の画像を変えるコード
      img3 = document.getElementById('usiro');
      img3.src = 'css/IMG_1512.JPG';
      mry3Img = document.querySelector('img#usiro');
      mry3Img.id = 'cake';
      //最後の画像の説明
      setumei3.innerHTML = 'これは松戸で<b>俺の誕生日にゆうちゃんが注文してくれたケーキ</b>だね。 まさかこんなすごいケーキが準備されてるなんて思わなくて凄く驚いたよ。 コストコのチキンとかピザもこの時食べたよね。 おいしかったし、こんなケーキで祝ってもらえて凄くうれしかったなぁ。'
        

      //線のclassを変えて次のページに反映させる
      document.querySelector('hr.sen').className = 'sen2';
        
      //次の画像に変えるためボタンのIDを変える
      document.querySelector('button').id = 'btn2';
          

      //btnのidが'btn2'だった時の処理
    } else if(btn.id == 'btn2'){
                
      //一番先頭の画像を変えるコード
      img1 = document.getElementById('kumo');
      img1.src = 'css/IMG_1646.JPG';
      mry1Img = document.querySelector('img#kumo');
      mry1Img.id = 'mira';
      //一番目の画像の説明
      setumei1.innerHTML = 'これは初めて買った車、<b>ミラジーノ</b>だね。 いろんなところ探したりしてやっと見つけたミラジーノ。 たれ目にしたり、中のライト変えたり思い出たくさんの車だね。';
                
      //二番目の画像を変えるコード
      img2 = document.getElementById('ring');
      img2.src = 'css/IMG_2607.JPG';
      mry2Img = document.querySelector('img#ring');
      mry2Img.id = 'ranmaru';
      //二番目の画像の説明
      setumei2.innerHTML = 'これは白岡に引っ越してきてからの<b>らんまる</b>の画像。 いたずらしたり悪さもするけど、なんだかんだ大切な家族だよね。 もちろん今は亡くなっちゃったけど<b>こうめ</b>もね。らんまるはゆうちゃんが大好きだからいつも甘えてるね。 体操しててもお構いなし！ｗ';
                       
      //最後の画像を変えるコード
      img3 = document.getElementById('cake');
      img3.src = 'css/IMG_2713.JPG';
      mry3Img = document.querySelector('img#cake');
      mry3Img.id = 'tomo';
      //最後の画像の説明
      setumei3.innerHTML = 'これは最近の俺だね。 かわいいでしょ？ｗ こういうバカみたいなことが何気なく大切で楽しい時間だよね。 ゆうちゃんに言ったけど、紬が産まれてもゆうちゃんと俺の感じは今まで通り変わらないよ。 今まで通り楽しく、時にはバカをやり、そんな人生を歩んでいきたいな。';
                          
      //線のclassを変えて次のページに反映させる
      document.querySelector('hr.sen2').className = 'sen3';
        
      //次の画像に変えるためボタンのIDを変える
      document.querySelector('button').id = 'btn3';

              
      //btnのidがbtn,btn2以外の場合
    }else{
      
      //一番先頭の画像を隠す
      img1 = document.getElementById('mira');
      img1.style.visibility = 'hidden';
      //一番目の画像の説明を隠す
      setumei1.remove();

      //二番目の画像を変える
      img2 = document.getElementById('ranmaru');
      img2.src = 'css/IMG_2666.JPG';
      mry2Img = document.querySelector('img#ranmaru');
      mry2Img.id = 'yuutyan';
      //二番目の画像の説明
      setumei2.innerHTML = '<p>これはゆうちゃんが妊娠して、お腹が大きくなってきた頃の写真だね。 段々とお腹が大きくなり、ゆうちゃんも俺も紬の親になる準備をしてきたね。</p> <p>お腹が大きくなってきて食欲が湧いたり、吐き気がしたり、出血したり、ゆうちゃんはすごく大変だったと思う。</p> <h2>ゆうちゃん、ありがとう</h2><p>本当によく頑張ったし、お疲れさまでした。これから紬も産まれていろんな苦難もあるかもしれないけど、ゆうちゃんのお腹の中に紬がいた時と違って、俺も紬に対して何かをしてあげることが出来る。</p> <p>だからこれからは、ゆうちゃんと辛さ苦しさを分け合って頑張っていけるよ。頼りないかもしれないけど、俺は頑張るよ！</p> <p>仕事も出産近くに変えたり、貯金もあまり出来てなくて、玲子さんにも迷惑かけちゃってるけど、これからは俺の時代だ！！ 必ず成功して、ゆうちゃんも紬もゆうちゃんの周りの人達にも恩返しするよ。 最近はあんまり『俺は何でもできる。』みたいなこと言ってなかったから、たまにこういうこと言うのは許して。</p> <p>本当にお疲れ様。そして本当に頑張ってくれてありがとう。制限されること、たくさんあったと思うけど、我慢してくれてありがとう。感謝してもしきれないよ。</p> <hr>' ;

      //最後の画像を隠す
      img3 = document.getElementById('tomo');
      img3.style.visibility = 'hidden';
      //最後の画像の説明を隠す
      setumei3.remove();

      let deletSen =  document.querySelector('hr.sen3');
      deletSen.remove();

      document.getElementById('btn3').remove();

    }
    
  })
  
  
  
}
