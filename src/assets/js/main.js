$(function() {
    "use strict";

    $.sidebarMenu($('.vertical-menu'));

    $(".menu-hamburger").click(e => {
        if ($(".section-sidebar").hasClass('visible')) {
            $(".section-sidebar").removeClass("visible");
            $(".section-rightbar").removeClass("visible");
            $(".section-contentbar").removeClass("visible");
            $(".section-hidden").removeClass("visible");
        } else {
            $(".section-sidebar").addClass("visible");
            $(".section-rightbar").addClass("visible");
            $(".section-contentbar").addClass("visible");
        }

        $('.dropdown-toggle').removeClass('active');
        $('.background-shadows').removeClass('active');
        $('body').css('overflow', 'auto');
    });


    $('.trigger_button').click(function(e) {
        $(".section-hidden").addClass("visible");
    });

    $('.cerrar-menu').click(function(e) {
        $(".section-hidden").removeClass("visible");
    });

    $('.btn-plus').click(e => {
        var parent = $(e.currentTarget).parent();
        if (parent.hasClass('open')) {
            $(e.currentTarget).find('img').removeClass('rotate');
            $(e.currentTarget).find('img').addClass('no-rotate');
        } else {
            $(e.currentTarget).find('img').removeClass('no-rotate');
            $(e.currentTarget).find('img').addClass('rotate');
        }
    });

    $('.dropdown-toggle').click(e => {
        var parent = $(e.currentTarget).parent();

        if (!parent.hasClass('boton-mamalon')) {
            $('.btnPlus').removeClass('rotate');
            $('.btnPlus').addClass('no-rotate');
        }

        if($('.vertical-submenu').hasClass('menu-open')){
            var checkElement=$(".vertical-submenu");
             checkElement.slideUp(0, function() {
                checkElement.removeClass('menu-open');
            });
            checkElement.parent("li").removeClass("active");
        }
    });

    $(document).on('click', 'body', function() {
        if ($('.btnPlus').hasClass('rotate')) {
            $('.btnPlus').removeClass('rotate');
            $('.btnPlus').addClass('no-rotate');
        }

        if($('.vertical-submenu').hasClass('menu-open')){
            var checkElement=$(".vertical-submenu");
             checkElement.slideUp(0, function() {
                checkElement.removeClass('menu-open');
            });
            checkElement.parent("li").removeClass("active");
        }
    });


    $(".content-sidebar").slimscroll({
        height: "96%",
        position: "right",
        size: "5px",
        color: "#ccc",
        wheelStep: 5,
        opacity: 1,
        touchScrollStep: 20

    });

    $(".card-content").slimscroll({
        height: "300px",
        position: "right",
        size: "5px",
        color: "#ccc",
        wheelStep: 5,
        opacity: 1,
        touchScrollStep: 20
    });

    $(".menu-blanco").slimscroll({
        height: "70vh",
        position: "right",
        size: "5px",
        color: "#ccc",
        wheelStep: 5,
        opacity: 1,
        touchScrollStep: 20,
        alwaysVisible: true
    });

    $(window).scroll(() => {
        var scroll = $(window).scrollTop();
        if (scroll < 250) {
            $('#scrollUp').fadeOut(300);
        } else {
            $('#scrollUp').fadeIn(300);
        }
    });

    $('#scrollUp').click(e => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $(document).on('keyup', '.search', function(e) {
        if ($(this).val().length >= 1) {
            $(this).addClass('focus-search');
            $('.menu-create').addClass('hidden');
            $('.nav-secon').addClass('hidden');
            $(this).parent().parent().removeClass('search-width');
        } else {
            $(this).removeClass('focus-search');
        }
    });

    $(document).on('focus', '.search', function(e) {
        if ($(this).val().length >= 1) {
            $(this).addClass('focus-search');
        } else {
            $(this).removeClass('focus-search');
        }
        $('.icon-search').addClass('focus');
        $('.icon-close').addClass('visible');
        $('.menu-create').addClass('hidden');
        $('.nav-secon').addClass('hidden');
        $('.input-search').addClass('search-width');
    });

    $(document).on('click', '.icon-close', function(e) {
        $('.icon-search').removeClass('focus');
        $('.icon-close').removeClass('visible');
        $('.menu-create').removeClass('hidden');
        $('.nav-secon').removeClass('hidden');
        $('.input-search').removeClass('search-width');
        $('.search').removeClass('focus-search');
    });

    var backgroundVar;

    $(document).on('click', '.menu-create a', function(e) {

        // $this = $(this);
        //
        // $this.addClass('active');
        //
        if ($('.background-shadows').hasClass('active') && $(this).hasClass('active')) {
            $('.background-shadows').removeClass('active');
            $('body').css('overflow', 'auto');
        } else {
            $('.dropdown-toggle').removeClass('active');
            $(this).addClass('active');
            $('.background-shadows').addClass('active');
            $('body').css('overflow', 'hidden');
        }

        /*$('.background-shadows').addClass('active');
        $('body').css('overflow','hidden');*/
    })

    $(document).on('click', '.section-menu-header a', function(e) {

        // $this = $(this);
        //
        // $this.addClass('active');
        //
        if ($('.background-shadows').hasClass('active') && $(this).hasClass('active')) {
            $('.background-shadows').removeClass('active');
            $('body').css('overflow', 'auto');
        } else {
            $('.dropdown-toggle').removeClass('active');
            $(this).addClass('active');
            $('.background-shadows').addClass('active');
            $('body').css('overflow', 'hidden');
        }

        /*$('.background-shadows').addClass('active');
        $('body').css('overflow','hidden');*/
    })

    $(document).on('click', '.background-shadows', function(e) {
        // alert('.hola');
        $('.background-shadows').removeClass('active');
        $('body').css('overflow', 'auto');
    })
    $(document).on('click', '.dropdown-menu', function(e) {
        // alert('.hola');
        $('.background-shadows').removeClass('active');
        $('body').css('overflow', 'auto');
    })

      $(document).on('click', '#este', function(e) {
        // alert('.hola');
          if($('.vertical-submenu').hasClass('menu-open')){
            var checkElement=$(".vertical-submenu");
             checkElement.slideUp(0, function() {
                checkElement.removeClass('menu-open');
            });
            checkElement.parent("li").removeClass("active");
        }else{
             var checkElement=$(".vertical-submenu");
             checkElement.slideDown(100, function() {
                checkElement.addClass('menu-open');
            });
            checkElement.parent("li").addClass("active");
        }
    })

       /* */
});


$(function() {
    $('[data-toggle="tooltip"]').tooltip({ container: 'body' });
});

function myFunction(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copiaste el texto: " + copyText.value);
}

window.addEventListener("resize", resizeWindow);




function resizeWindow() {
    $(".section-sidebar").removeClass("visible");
    $(".section-rightbar").removeClass("visible");
    $(".section-contentbar").removeClass("visible");
    $(".section-hidden").removeClass("visible");
}

$.sidebarMenu = function(menu) {
    var animationSpeed = 1,
        subMenuSelector = '.vertical-submenu';
/*
    $(menu).on('click', 'li a', function(e) {
        var $this = $(this);
        var checkElement = $this.next();
        var width = $(window).width();

        if ($(e.currentTarget).find('.expand')) {
            if ($(e.currentTarget).find('.expand').hasClass('open')) {
                $(e.currentTarget).find('.expand').removeClass('open');
            } else {
                $(e.currentTarget).find('.expand').addClass('open');
            }
        }

        if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function() {
                checkElement.removeClass('menu-open');
            });
            checkElement.parent("li").removeClass("active");
            console.log("lagos");

        } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
            var parent = $this.parents('ul').first();
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            ul.removeClass('menu-open');
            var parent_li = $this.parent("li");

            checkElement.slideDown(animationSpeed, function() {
                checkElement.addClass('menu-open');
                parent.find('li.active').removeClass('active');
                parent_li.addClass('active');
            });
            console.log("lagos2");
        }



        if (checkElement.is(subMenuSelector)) {
            e.preventDefault();
        }
    });*/
}


var colors = ['#292EFF', '#FF36B8', '#5FDEFF', '#c3e6cb', '#5FDEFF', '#6c757d'];
var colors2 = ['#FF36B8', '#5FDEFF'];
/* 3 donut charts */

var donutOptions = {
    cutoutPercentage: 85,
    legend: { position: 'bottom', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};

var donutOptions2 = {
    cutoutPercentage: 85,
    legend: { position: 'bottom', padding: 5, labels: { pointStyle: 'pieChart' } }
};


// donut 1
var chDonutData1 = {
    labels: ['Bootstrap', 'Popper', 'Other'],
    datasets: [{
        backgroundColor: colors.slice(0, 3),
        borderWidth: 0,
        data: [74, 11, 40]
    }]
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
    new Chart(chDonut1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions
    });
}

// donut 1
var chDonutData2 = {
    labels: ['Wips', 'Pops'],
    datasets: [{
        backgroundColor: colors2.slice(0, 3),
        borderWidth: 0,
        data: [40, 45]
    }]
};
// donut 1
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
    new Chart(chDonut2, {
        type: 'pie',
        data: chDonutData2,
        options: donutOptions
    });
}

// donut 3
var chDonutData3 = {
    labels: ['Angular', 'React', 'Other', 'other again'],
    datasets: [{
        backgroundColor: colors.slice(0, 3),
        borderWidth: 0,
        data: [21, 45, 55, 33]
    }]
};
var chDonut3 = document.getElementById("chDonut3");
if (chDonut3) {
    new Chart(chDonut3, {
        type: 'pie',
        data: chDonutData3,
        options: donutOptions
    });
}

var myPieChart = new Chart(pieChart, {
    type: 'pie',
    data: {
        datasets: [{
            data: [25, 25, 50],
            backgroundColor: ["#292EFF", "#5FDEFF", "#FF36B8"],
            borderWidth: 0
        }],
        labels: ['New Visitors', 'Subscribers', 'Active Users']
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
            labels: {
                fontColor: 'rgb(154, 154, 154)',
                fontSize: 11,
                usePointStyle: true,
                padding: 20
            }
        },
        pieceLabel: {
            render: 'percentage',
            fontColor: 'white',
            fontSize: 14,
        },
        toolTip: {
            content: "{data}: {y}"
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
    }
})

$("div[id^='myModal']").each(function() {

    var currentModal = $(this);

    //click next
    currentModal.find('.btn-next').click(function() {
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
    });

    //click prev
    currentModal.find('.btn-prev').click(function() {
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
    });

});


$('.button_as_checkbox .btn1').on("click", function() {
    //console.log("hace click")
    if ($(this).hasClass('active')) {
        $(this).parent().find("input[type=checkbox]").removeClass("checked").removeAttr("checked")
    } else {
        $(this).parent().find("input[type=checkbox]").addClass("checked").attr("checked", "checked");
    }

});

var chartData = {
    labels: ["S", "M", "T", "W", "T", "F"],
    datasets: [{
        fill: false,
        backgroundColor: "#FF36B8",
        borderColor: "#FF36B8",
        data: [508, 452, 498, 502, 689, 650]
    }]
};

var opt = {
    title: {
        display: false,
        text: 'World population per region (in millions)'
    },
    legend: {
        display: false,
    }
};
var ctx = document.getElementById("myChart4"),
    myLineChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: opt
    });


var chartData2 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
            label: "uno",
            fill: true,
            backgroundColor: "rgba(255, 56, 185, 0.3)",
            borderColor: "rgba(255, 56, 185, 1)",
            data: [508, 1234, 122, 334, 12, 650, 232, 23]
        },
        {
            label: "dos",
            fill: true,
            backgroundColor: "rgba(34, 34, 255, 0.3)",
            borderColor: "#292EFF",
            data: [112, 532, 23, 444, 1111, 23, 332, 23]
        }
    ]
};

var opt2 = {
    title: {
        display: false,
        text: 'World population per region (in millions)'
    },
    legend: {
        display: true,
    }
};

var ctx2 = document.getElementById("myChart6"),
    myLineChart = new Chart(ctx2, {
        type: 'line',
        data: chartData2,
        options: opt2
    });