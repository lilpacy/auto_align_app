$(document).on('turbolinks:load', function(){
  console.log($('span[id="title"]'));
  var n = 1;
  $('span[id="title"]').each(function(){
    console.log(this);
    $(this).click(function(){
      if(!$(this).hasClass('on')){
        $(this).addClass('on');
        var txt = $(this).text();
        $(this).html('<input type="text" value="'+txt+'" />');
        $('#title > input').focus().blur(function(){
          var inputVal = $(this).val();
          if(inputVal === ''){
            inputVal = this.defaultValue;
          }
          $(this).parent().removeClass('on').text(inputVal);
        });
      }
    });
  });
});
