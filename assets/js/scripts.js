$(document).ready(
    function(){
       // This code was taken from StackOverflow
       //https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
        let pageName = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);
        $.each($('.navbar-nav').find('a'), function() {
            $(this).toggleClass('active', 
               pageName.indexOf($(this).attr('href')) > -1);
        }); 
    }
);