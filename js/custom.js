$(function(){
    var state = false;
    var scrollpos;
    var click_flg = true;
    $('#sp_menu_buttun').on('click', function(){
        
        if (click_flg) {
            click_flg = false;
            
            $(this).toggleClass('active');
            if(state == false) {
                state = true;
                $(".sp_menu_toggle").slideToggle();
                $(".back2").delay(20).slideToggle();
                $(".back3").delay(40).slideToggle();
                $(".back4").delay(60).slideToggle()
                $(".sp_menu_inner").delay(60).slideToggle();        
                $(".back5").delay(80).slideToggle();
                $(".back6").delay(100).slideToggle();
                $(".back7").delay(120).slideToggle("normal", ()=> {
                    scrollpos = $(window).scrollTop();
                    $('body').addClass('fixed');
                    $('.sp_menu_toggle').addClass('open');
                    click_flg = true;
                });
                
                
            } else {
                state = false;
                $(".back7").slideToggle();
                $(".back6").delay(20).slideToggle();
                $(".back5").delay(40).slideToggle();
                $(".back4").delay(60).slideToggle();
                $(".sp_menu_inner").delay(60).slideToggle(); 
                $(".back3").delay(80).slideToggle();
                $(".back2").delay(100).slideToggle();
                $(".sp_menu_toggle").delay(120).slideToggle("normal", ()=> {
                    click_flg = true;
                });
                $('body').removeClass('fixed');
                window.scrollTo( 0 , scrollpos );
                $('.sp_menu_toggle').removeClass('open');
                
            }
        }

        
    });
    return false;
   
  });


  $(window).load(function(){
    $(".works_select").click(function(){
      var background = $(this).css("background-image");
      var text = $(this).children(".description").html();
      $(this).parents(".work").find(".selected").css('background-image',background);
      $(this).parents(".work").find(".selected_description").html(text);
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

$(function() {
    $(".more p").hover(function(){
      $(this).addClass("hover");
    }, function(){
      $(this).removeClass("hover");
    });
  });

$(function() {
  $(".work_more").hover(function(){
    $(this).addClass("hover");
  }, function(){
    $(this).removeClass("hover");
  });
});


$(document).ready(function(){
    $("#hobby").owlCarousel(
        {
            items: 2,
            responsive : {　//レスポンシブ対応
                // ブレイクポイント 550以上
                960 : {
                    items : 5,
                }
            },

            //loop: true,
            center: true,
            touchDrag: true,
            startPosition: 2,
            nav: false,
            dots: false
      });
      $(".owl-stage").css("transition" , "all 0.25s ease 0s");
      //$("#hobby_li3").parent().addClass("center");
});


$(function() {
    $("#hobby li").click(function(){
        $(".owl-item").removeClass("center");
        var width = $(this).parents(".owl-stage").css("width").match(/\d/g).join("");
        var num = $(this).attr('id').match(/\d/g).join("");
        var start;
        var distance;
        if (window.matchMedia( '(min-width: 960px)' ).matches) {
            distance = ( width / 5) * (3 - num);
            console.log(width, num);
            console.log(distance);
        }
        else {
            start = width/10;
            distance = start - (( width / 5) * (num - 1));
            console.log(start);
            console.log(distance);
        }
        
      $(this).parents(".owl-stage").css("transform", "translate3d(" + distance + "px, 0px, 0px");

      
      //class付与
      $(this).parents(".owl-item").addClass("center");
    });
  });