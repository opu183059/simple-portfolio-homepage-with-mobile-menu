$(document).ready(function () {
    // nevigation menu open 
    $('.closebutton').click(function () {
        $('.headersection').animate({ left: "0px" }, 1000)
        $(this).hide();
        $(".openbutton").css('display', 'block');
    });
    
    // nevigation menu close
    $('.openbutton').click(function () {
        $('.headersection').animate({ left: "-400px" }, 1000)
        $(this).hide();
        $(".closebutton").css('display', 'block');
    });
});