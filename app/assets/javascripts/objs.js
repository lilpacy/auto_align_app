$(document).on('turbolinks:load', function(){
  $("#datepicker").datepicker();
  $('span[id="title"]').each(function(){
    $(this).click(function(){ //titleをidに持つspanがクリックされたら発火
      _this = this; // グローバル変数_thisにクリックされたspanを格納
      if(!$(this).hasClass('on')){ // classにonを持ってなければ
        $(this).addClass('on'); // classにonを追加
        var txt = $(this).text(); //spanに挟まれたテキストをtxtに格納
        $(this).html('<input type="text" value="'+txt+'" />'); // spanに挟まれたスペースにinput要素を挿入
        $('#title > input').focus().blur(function(){ // blurはフォーカスが外れたら引数のイベントハンドラを実行
          var inputVal = $(this).val(); // input要素に入力されているテキストをinputValに格納
          if(inputVal === ''){
            inputVal = this.defaultValue;
          } // 空の場合変更前の値をinputValに格納
          $(this).parent().removeClass('on').text(inputVal); // span要素のclassからonを削除、要素の間にinputValを挿入
          $.ajax({
            type: 'PUT',
            data: { obj: { title: inputVal } },
            url: 'objs/'+$(_this).attr('data'),
            dataType: 'json',
          })
          .done(function(data){
            console.log(data);
          })
          .fail(function(){
            console.log('title');
          })
        });
      }
    });
  });
  $('span[id="influence"]').each(function(){
    $(this).click(function(){ //influenceをidに持つspanがクリックされたら発火
      _this = this; // グローバル変数_thisにクリックされたspanを格納
      if(!$(this).hasClass('on')){ // classにonを持ってなければ
        $(this).addClass('on'); // classにonを追加
        var txt = $(this).text(); //spanに挟まれたテキストをtxtに格納
        $(this).html('<input type="text" value="'+txt+'" />'); // spanに挟まれたスペースにinput要素を挿入
        $('#influence > input').focus().blur(function(){ // blurはフォーカスが外れたら引数のイベントハンドラを実行
          var inputVal = $(this).val(); // input要素に入力されているテキストをinputValに格納
          if(inputVal === ''){
            inputVal = this.defaultValue;
          } // 空の場合変更前の値をinputValに格納
          $(this).parent().removeClass('on').text(inputVal); // span要素のclassからonを削除、要素の間にinputValを挿入
          $.ajax({
            type: 'PUT',
            data: { obj: { influence: inputVal } },
            url: 'objs/'+$(_this).attr('data'),
            dataType: 'json',
          })
          .done(function(data){
            console.log(data);
          })
          .fail(function(){
            console.log('influence');
          })
        });
      }
    });
  });
  $('span[id="time"]').each(function(){
    $(this).click(function(){ //timeをidに持つspanがクリックされたら発火
      _this = this; // グローバル変数_thisにクリックされたspanを格納
      if(!$(this).hasClass('on')){ // classにonを持ってなければ
        $(this).addClass('on'); // classにonを追加
        var txt = $(this).text(); //spanに挟まれたテキストをtxtに格納
        $(this).html('<input type="text" value="'+txt+'" />'); // spanに挟まれたスペースにinput要素を挿入
        $('#time > input').focus().blur(function(){ // blurはフォーカスが外れたら引数のイベントハンドラを実行
          var inputVal = $(this).val(); // input要素に入力されているテキストをinputValに格納
          if(inputVal === ''){
            inputVal = this.defaultValue;
          } // 空の場合変更前の値をinputValに格納
          $(this).parent().removeClass('on').text(inputVal); // span要素のclassからonを削除、要素の間にinputValを挿入
          $.ajax({
            type: 'PUT',
            data: { obj: { time: inputVal } },
            url: 'objs/'+$(_this).attr('data'),
            dataType: 'json',
          })
          .done(function(data){
            console.log(data);
          })
          .fail(function(){
            console.log('time');
          })
        });
      }
    });
  });
  $('p[class="deadline"]').each(function(){ // やたらとajax通信飛んでいるため要改善
    $(this).on('click', function(){
      if(!$(this).hasClass('on')){
        $(this).addClass('on');
        var txt = $(this).text();
        var num = $(this).parent().attr('data');
        $(this).html('<input type="text" value="'+txt+'" />');
        $(this).children().datepicker();
        $('body').mousedown(function(){
          var inputVal = $('span[data="'+num+'"] p.deadline input').val();
          $('span[data="'+num+'"] p.deadline').text(inputVal);
          $.ajax({
            type: 'PUT',
            data: { obj: { deadline: inputVal } },
            url: 'objs/'+num,
            dataType: 'json',
          })
          .done(function(data){
            $('p.deadline').removeClass('on')
            console.log(data);
          })
          .fail(function(){
            console.log('deadline');
          })
        });
        $('span[data="'+num+'"] p.deadline, div[id="ui-datepicker-div"]').mousedown(function(e){ e.stopPropagation() });
      }
    })
  })
});
