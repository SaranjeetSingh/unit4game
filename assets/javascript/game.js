var sum = 0;
var win = 0;
var loss = 0;
var random;
var a = [1,2,3,4,5,6,7,8,9,10];
// var randomNumber;

function onload(){
    sum = 0;
    var r=[];
    // randomNumber = Math.floor((Math.random() *10) + 1);
    //console.log(randomNumber);
    for(var n=1;n<=4;++n){
        var i = Math.floor((Math.random() * (10-n))+1);
        r.push(a[i]);
        a[i] = a[10-n];
    }

    random = Math.floor((Math.random() * 80) + 30);
    console.log(random);
    $("#randomNumber").html(random);
    $("#total").text(sum);
    $(".image1").attr("val",r[0]);
    $(".image2").attr("val",r[1]);
    $(".image3").attr("val",r[2]);
    $(".image4").attr("val",r[3]);
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