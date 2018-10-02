var sum = 0;
var win = 0;
var loss = 0;
var random;
var numberOptions = [10, 5, 3, 7];
//var randomNumber;

function onload(){
    sum = 0;
    //randomNumber = Math.floor((Math.random() *10) + 1);
    //console.log(randomNumber);
    random = Math.floor((Math.random() * 80) + 30);
    console.log(random);
    $("#randomNumber").html(random);
    $("#total").text(sum);
    $(".image1").attr("val",numberOptions[0]);
    $(".image2").attr("val",numberOptions[1]);
    $(".image3").attr("val",numberOptions[2]);
    $(".image4").attr("val",numberOptions[3]);
}

$(document).ready(function() {
    onload();
    $("#randomNumber").html(random);

    $(".crystal").on("click", function(){
        var value = this.getAttribute("val");
        value = parseInt(value);
        sum = sum+value;
        $("#total").text(sum);

        if(sum == random){
            win++;
            $("#wins").html(win);
            onload();
        }
        else if(sum > random){
            loss++;
            $("#Lose").html(loss);
            onload();
            
        }
    });

    
});