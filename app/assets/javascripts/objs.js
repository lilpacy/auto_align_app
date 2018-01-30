$(document).on('turbolinks:load', function(){
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
            url: `objs/${$(_this).attr('data')}`,
            dataType: 'json',
          })
          .done(function(data){
            console.log(data);
          })
          .fail(function(){
            alert('failed');
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
            url: `objs/${$(_this).attr('data')}`,
            dataType: 'json',
          })
          .done(function(data){
            console.log(data);
          })
          .fail(function(){
            alert('failed');
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
            url: `objs/${$(_this).attr('data')}`,
            dataType: 'json',
          })
          .done(function(data){
            console.log(data);
          })
          .fail(function(){
            alert('failed');
          })
        });
      }
    });
  });
  $('span[id="deadline"]').each(function(){
    $(this).click(function(){ //deadlineをidに持つspanがクリックされたら発火
      _this = this; // グローバル変数_thisにクリックされたspanを格納
      if(!$(this).hasClass('on')){ // classにonを持ってなければ
        $(this).addClass('on'); // classにonを追加
        var txt = $(this).text(); //spanに挟まれたテキストをtxtに格納
        $(this).html('<input type="text" value="'+txt+'" />'); // spanに挟まれたスペースにinput要素を挿入
        $('#deadline > input').focus().blur(function(){ // blurはフォーカスが外れたら引数のイベントハンドラを実行
          var inputVal = $(this).val(); // input要素に入力されているテキストをinputValに格納
          if(inputVal === ''){
            inputVal = this.defaultValue;
          } // 空の場合変更前の値をinputValに格納
          $(this).parent().removeClass('on').text(inputVal); // span要素のclassからonを削除、要素の間にinputValを挿入
          $.ajax({
            type: 'PUT',
            data: { obj: { deadline: inputVal } },
            url: `objs/${$(_this).attr('data')}`,
            dataType: 'json',
          })
          .done(function(data){
            console.log(data);
          })
          .fail(function(){
            alert('failed');
          })
        });
      }
    });
  });
});
