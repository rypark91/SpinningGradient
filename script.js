var background = document.querySelector("#background");
var color = "#ff0000";
var colorCom = ""

var degrees = 0;

var color1 = document.querySelector("#color1");
color1.value = "#ff0000";
color1.addEventListener("change",function(){
    color = color1.value;
    setComplementaryColor();
});
setComplementaryColor();
setInterval(function(){
    degrees += 1;
    degrees = degrees % 360;
    background.style.background = `conic-gradient(from ${degrees}deg, ${color}, ${colorCom}, ${color})`;
        
    },10);

function setComplementaryColor(){
    var com = String(color1.value);

    var redValue = com[1] + com[2];
    var greenValue = com[3] + com[4];
    var blueValue = com[5] + com[6];
    var finalRed = Math.abs(parseInt(redValue, 16) - 255);
    var finalGreen = Math.abs(parseInt(greenValue, 16) - 255);
    var finalBlue = Math.abs(parseInt(blueValue, 16) - 255);

    colorCom = `rgb(${finalRed}, ${finalGreen}, ${finalBlue})`

}
