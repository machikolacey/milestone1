$(document).ready(
    function(){
 
        let pageName = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);

        $.each($('.navbar-nav').find('a'), function() {

            $(this).toggleClass('active', 
               pageName.indexOf($(this).attr('href')) > -1);
        }); 
    }
);