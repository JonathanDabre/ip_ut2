// Below functions waits for the document to be fully loaded
$(document).ready(function (){
    $('#get-quote').click(function(){
       
        $.ajax({
            url: "https://api.quotable.io/random",
            method: 'GET',
            success: function(data){
                let quoteText = data.content;
                let author = data.author;

                $('#quote').text('"' + quoteText + '"');
                $('#author').text('~' +author )
            },
            error: function(){
                alert("Failed to load quotes.")
            }
        })
    })
})