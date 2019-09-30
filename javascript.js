function loaded(){
    $('#loader').removeClass('loader');
}
$(document).ready(function(){
    var download=$('.download')
    download.css('visibility','hidden');
    $('.view').click(function(){
        var urlname=$('.url').val();
        $('.imageshow').attr('src',urlname);
        download.css('visibility','visible');
        $('#loader').addClass('loader');
    });
  
 
    $('.download').click(function(){
        var urlname=$('.url').val();
        download.attr('href',urlname);
        var name=download.attr('href');
        console.log(name)
    });


});
