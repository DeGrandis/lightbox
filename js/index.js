$(function () {
  $("#onButton").click(function() {
    $("button").removeClass("off");
    $("button").addClass("on");
    $("body").removeClass("night");
    $("body").addClass("day");
    $("#moon").fadeOut(50);
    $("#sun").delay(100).fadeIn(300);
        navigator.vibrate(20);
        $.ajax({
        type: 'POST',
        url: 'on.php',
        success: function(data) {           
        }
    });
  });
});       

$(function() {
  $("#offButton").click(function() {
    $("button").removeClass("on");
    $("button").addClass("off");
    $("body").removeClass("day");
    $("body").addClass("night");
    $("#sun").fadeOut(50);
    $("#moon").delay(100).fadeIn(300);
        navigator.vibrate(20);
        $.ajax({     
        type: 'POST',
        url: 'off.php',
        success: function(data) {
        }
    });
  });
});

$(document).ready(function(){
    $("#moon").fadeIn(1000); 
    $("#sun").hide(); 
});
    
    
$(document).ready(function(){
    $('#love').hide();
    setTimeout(function(){
        $('#love').show().addClass('style animated fadeIn');
        }, 2000);
});
  
///////////////////////TESTING

function checkState(){
    var xhttp = new XMLHttpRequest();
    var url = "state.txt";
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var state = JSON.parse(this.resoponseText);
            
        }
    };
    
    document.getElementById("#love").innerHTML = state;
    xmlhttp.open("GET", url, true);
xmlhttp.send();
}
