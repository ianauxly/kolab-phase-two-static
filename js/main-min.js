"use strict";$(document).ready(function(){$(".slick-carousel").slick({prevArrow:"<img class='a-left control-c prev slick-prev' src='../phase_two/images/arrow-left-transparent.png'>",nextArrow:"<img class='a-right control-c next slick-next' src='../phase_two/images/arrow-right-transparent.png'>"}),$.ajax({url:"https://api.openweathermap.org/data/2.5/weather?q=Ottawa&APPID=dc4f7bfefdba56bf33f8c972ec927173",dataType:"json",success:function(t){rates=t.main,$temp=Math.floor(rates.temp-273.15),$(".temp").html($temp)}})});