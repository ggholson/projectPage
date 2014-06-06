$(window).on("scroll resize", function(){
    var pos=$('#cwindow').offset();
    $('.cpanel').each(function(){
        if(pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top)
        {
            $('#cwindow').html($(this).html());
            $('#cwindow').css("transform","translateX("+$(this).index() * 100+"px)");
            return; //break the loop
        }
    });
});

$(document).ready(function(){
  $(window).trigger('scroll'); // init the value
});

/*
$(document).ready(function(){
    
    $('.splash').click(function(){
        
        $(this).fadeTo("slow",0);
    });   
    
});
*/