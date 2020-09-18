$(function(){
    var state = false;
    var scrollpos;
   
    $('#sp_menu_buttun').on('click', function(){
      if(state == false) {
        state = true;
        $(".sp_menu_toggle").slideToggle();
        $(".back2").delay(50).slideToggle();
        $(".back3").delay(90).slideToggle();
        $(".back4").delay(115).slideToggle();
        $(".back5").delay(155).slideToggle("normal", ()=> {
            scrollpos = $(window).scrollTop();
            $('body').addClass('fixed');
            $('.sp_menu_toggle').addClass('open');
        });
        
        
      } else {
        state = false;
        $(".back5").slideToggle();
        $(".back4").delay(50).slideToggle();
        $(".back3").delay(90).slideToggle();
        $(".back2").delay(115).slideToggle();
        $(".sp_menu_toggle").delay(155).slideToggle();
        $('body').removeClass('fixed');
        window.scrollTo( 0 , scrollpos );
        $('.sp_menu_toggle').removeClass('open');
        
      }
    });
    return false;
   
  });


  $(window).load(function(){
    $(".works_select").click(function(){
      var background = $(this).css("background");
      var text = $(this).children(".description").text();
      $("#web").css('background',background);
      $("#description").text(text);
    });
  });


  $(function() {
    // ナビゲーションのリンクを指定
   var navLink = $('#drop_navi a');
 
    // 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
    
   var contentsArr = new Array();
  for (var i = 0; i < navLink.length; i++) {
       // コンテンツのIDを取得
      var targetContents = navLink.eq(i).attr('href');
      // ページ内リンクでないナビゲーションが含まれている場合は除外する
      if(targetContents.charAt(0) == '#') {
         // ページ上部からコンテンツの開始位置までの距離を取得
            var targetContentsTop = $(targetContents).offset().top;
         // ページ上部からコンテンツの終了位置までの距離を取得
            var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
         // 配列に格納
            contentsArr[i] = [targetContentsTop, targetContentsBottom]
      }
   };
   
 
  // 現在地をチェックする
   function currentCheck() {
       // 現在のスクロール位置を取得
        var windowScrolltop = $(window).scrollTop();
        for (var i = 0; i < contentsArr.length; i++) {
           // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
          if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
                // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
               navLink.children(".drop").removeClass('drop_blue');
               navLink.eq(i).children(".drop").addClass('drop_blue');
                i == contentsArr.length;
            }
       };
  }
 
   // ページ読み込み時とスクロール時に、現在地をチェックする
  $(window).on('load scroll', function() {
      currentCheck();
 });
 
 // ナビゲーションをクリックした時のスムーズスクロール
    navLink.click(function() {
      $('html,body').animate({
          scrollTop: $($(this).attr('href')).offset().top
       }, 300);
        return false;
   })
});