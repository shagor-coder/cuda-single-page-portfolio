
// $(document).ready(function(){
//     var mixer = mixitup(".container")
// });
$(document).ready(function(){
    $('.button').click(function(){
        var value =$(this).attr("data-filter");
        if (value === 'all') {
            $('.filter').show("1000")
        }
        else{
            $(".filter").not("." + value).hide("1000");
            $(".filter").filter("." + value).show("1000");
        }
    })
    $('.nav-item').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $('.navbar-collapse').removeClass('show');
    })
    $(window).scroll(function(){
        $('#header').toggleClass('active', scrollY > 0)
    })

    // $('.navbar-toggler').click(function(){
    //     $('#header').toggleClass('open');
    // })
})

