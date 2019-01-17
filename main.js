var scribble = (function(){

    function init(selector){
        $(selector).each(function(){
            var text = $(this)[0].innerText;
            $(this).attr('data-text',text).addClass('scribble-text').css('color','transparent');
        });
    }

    return {
        replace: function(selector){
            init(selector);
        }
    }

}());