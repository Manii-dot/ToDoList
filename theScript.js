//Create timeblocks
$(document).ready(function(){
    $(".save-button").on("click",function(){
        var time = $(this).parent().attr("id")
        var description = $(this).siblings(".event-description").val()
        localStorage(time, description)
    })
    $("#hour-9 .event-description").val(localStorage.getItem("hour-9"))//duplicate for every time block//

    function calendar(){
        var currentTime = moment().hours()
        $(".hour-block").each(function({
            var hourBlock = parseInt($(this).attr("id").split("-")[1])
            if(timeSlot < currentTime){
                $(this).addClass("past")
            }
        }))
    }
    calendar()
})