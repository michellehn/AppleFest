$(document).ready(function(){
    
    $("#farmers").click(function(){
        $("#farmernames").slideToggle(500);
    });
  
    $("#alcohol").click(function(){
        $("#alcoholnames").slideToggle();
    });
  
    $("#exhibitors").click(function(){
        $("#exhibitornames").slideToggle();
    });
    
    $("#artisans").click(function(){
        $("#artisannames").slideToggle();
    });
    
    $("#food").click(function(){
        $("#foodnames").slideToggle();
    });
    $(function () {
        setNavigation();
    });
    
    $("nav li").click(function ( e ) {
        e.preventDefault();
        $("nav li a.active").removeClass("active"); //Remove any "active" class  
        $("a", this).addClass("active"); //Add "active" class to selected tab  
    });

});