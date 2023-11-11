$(document).ready(function(){

    $("#submit").click(function(){

        let city = $('#city').val()

        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9433837bb24b91424813d8b5ab7598b2`,
            method: "GET",
            success: function(data){
                let temperature = data.main.temp;
                let description = data.weather[0].description;
                let humidity = data.main.humidity;

                $('#temp').text( temperature);
                $('#description').text(description)
                $('#humidity').text(humidity)
            },
            error: function(){
                alert("Failed to load data")
            }
        })
    })

    
})