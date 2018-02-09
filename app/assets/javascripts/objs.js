$(document).on('turbolinks:load', function(){
  function editInPlace(){
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
  }
  function renderHTML(obj){
    var time = {
      year: obj.deadline ? new Date(obj.deadline).getFullYear() : '',
      month: obj.deadline ? new Date(obj.deadline).getMonth()+1 : '',
      date: obj.deadline ? new Date(obj.deadline).getDate() : ''
    };
    var deadline = obj.deadline ? ''+time.year+'/'+time.month+'/'+time.date+'' : '　　　　　';
    $('div.li-wrapper').append(
      '<li class="row">'+
        '<span id="title" class="col-xs-6" data="'+obj.id+'">'+obj.title+'</span>'+
        '<span id="influence" class="col-xs-2" data="'+obj.id+'">'+obj.influence+'</span>'+
        '<span id="time" class="col-xs-2" data="'+obj.id+'">'+obj.time+'</span>'+
        '<span id="deadline" class="col-xs-2" data="'+obj.id+'">'+
          '<p class="deadline">'+deadline+'</p>'+
          '<p class="delete" data="'+obj.id+'"><a rel="nofollow" data-method="delete" href="/objs/'+obj.id+'">削除</a></p>'+
        '</span>'+
      '</li>'
    );
  }
  function resetInput(){
    $('input[id="obj_title"]').val('');
    $('input[id="obj_influence"]').val('');
    $('input[id="obj_time"]').val('');
    $('input[id="datepicker"]').val('');
    return false; // 連続投稿を可能に
  }
  $("#datepicker").datepicker();
  editInPlace();
  $('form#new_obj').on('submit', function(e){
    e.preventDefault();
    var params = {
      utf8: "✓",
      authenticity_token: $(this).children('input[name="authenticity_token"]').val(),
      obj: {
      title: $('input[id="obj_title"]').val(),
      influence: $('input[id="obj_influence"]').val(),
      time: $('input[id="obj_time"]').val(),
      deadline: $('input[id="datepicker"]').val(),
      },
      commit: 'Send'
    }
    console.log(params, 'paramsの中身確認');
    $.ajax({
      type: 'POST',
      data: params,
      url: 'objs',
      dataType: 'json',
    })
    .done(function(data){
      $('div.li-wrapper').html('');
      $.each(data, function(i,obj){
        renderHTML(obj);
        editInPlace();
      })
    })
    .fail(function(err){
      console.log('fail!');
    });
    resetInput();
  });
});
