
//document.querySelector(".saveBtn").addEventListener("click", function(){
//save button clicks
$(document).ready(function(){
$(".saveBtn").on("click", function(){
    console.log("Saved");

    //let timeID = document.querySelector(this).parent().attr("id");
    //This adds a ID to the save button class
    let timeID = $(this).parent().attr("id");
    //let value = document.querySelector(this).siblings(".description").value();
    //this is letting the user input text into the description
    let value = $(this).siblings(".description").val();

    console.log(timeID);
    console.log(value);

    // this stores the timeID and value to the local storage
    localStorage.setItem(timeID ,value);

    //  document.querySelector(".notification").classList.add("show");
    //this shows the message inside of the class .notificcation that its been logged
    $(".notification").addClass("show");


    //this hides the message inside of the class .notificcation that its been logged after 5 seconds
    //  setTimeout(function(){
    //document.querySelector(".notification").classList.remove("show");
    //}, 5000)
    setTimeout(function(){
        $(".notification").removeClass("show");
    }, 5000)
    
})


function hourUpdate(){

    // this uses the moment to log the current hour
    //   document.querySelector(".notification").classList.add("show");
    let currentHour = moment().hours();
    console.log(currentHour)



    //  for(let i=0; i < document.querySelector(".time-block").length; i++){
    for(let i=0; i < $(".time-block").length; i++){
        //function parses a string argument and returns an integer
        //let hour = parseInt(document.querySelector(".time-block")[i].getAttribute("id").split("-")[1])
        let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
        if(hour-1 < currentHour){
        // document.querySelector(".time-block")[i].classList.add("past")
        $(".time-block")[i].classList.add("past")
        }else if (hour === currentHour){
                    // document.querySelector(".time-block")[i].classList.add("past")
                     $(".time-block")[i].classList.add("past")
                     // document.querySelector(".time-block")[i].classList.remove("present")
                     $(".time-block")[i].classList.remove("present")
            
                     }else{
                        // document.querySelector(".time-block")[i].classList.remove("past")
                         $(".time-block")[i].classList.remove("past")
                         //document.querySelector(".time-block")[i].classList.remove("present")
                        $(".time-block")[i].classList.remove("present")
                        //document.querySelector(".time-block")[i].classList.add("future"),
                         $(".time-block")[i].classList.add("future"),
       
       5000                 }
    } 
 }
hourUpdate();




let interval = setInterval(hourUpdate, 15000);

//document.querySelector("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-1 .description").val(localStorage.getItem("hour-1"))
$("#hour-2 .description").val(localStorage.getItem("hour-2"))
$("#hour-3 .description").val(localStorage.getItem("hour-3"))
$("#hour-4 .description").val(localStorage.getItem("hour-4"))
$("#hour-5 .description").val(localStorage.getItem("hour-5"))

//document.querySelector("#currentDay").text(moment().format('MMMM Do YYYY'))
$("#currentDay").text(moment().format('MMMM Do YYYY'))
// $("#currentDay").text(moment().date( Number ));



})



