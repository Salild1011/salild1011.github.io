$(document).ready(function() {

    // Manage navbar shadows on scroll
    $(window).scroll(() => {     
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            $("nav").css("box-shadow", "0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)");
        }
        else {
            $("nav").css("box-shadow", "none");
        }
    });
});
