$("#submit").click(function(){
    var key = "8cce7edd41e14cec15c5a85b3ea142c8"
    var city = $("#cities").val();
    var info = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+key;
    console.log(info);
    $.get(info,function(data,status){
        $("#city").val(data.main.temp+" C")
        // console.log(data.main.temp_max);
        $("#sky").src(data.weather[0].icon);
    })
})
