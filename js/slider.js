
$(document).ready(function(){

    $("#slider_itm2").fadeOut();
    $("#slider_itm3").fadeOut();

    var step = 1;
    
    $("#previous").click(function(){
        
        switch(step){
         
            case 1:
                step = 3;
                $("#slider_itm1").fadeOut(800);
                $("#slider_itm3").fadeIn(800);
                break;
            case 2:
                step = 1;
                $("#slider_itm2").fadeOut(800);
                $("#slider_itm1").fadeIn(800);
                break;
            case 3:
                step = 2;
                $("#slider_itm3").fadeOut(800);
                $("#slider_itm2").fadeIn(800);
                break;
        }
        
    });
                
    $("#next").click(function(){
        
        switch(step){
         
            case 1:
                step = 2;
                $("#slider_itm1").fadeOut(800);
                $("#slider_itm2").fadeIn(800);
                break;
            case 2:
                step = 3;
                $("#slider_itm2").fadeOut(800);
                $("#slider_itm3").fadeIn(800);
                break;
            case 3:
                step = 1;
                $("#slider_itm3").fadeOut(800);
                $("#slider_itm1").fadeIn(800);
                break;
        }
        
    });
    
});