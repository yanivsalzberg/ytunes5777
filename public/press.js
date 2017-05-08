Pressure.set('#do', {
  change: function(force, event){
    console.log(force);
    var colorNum1 = Math.floor(force * 256);
    var colorNum2 = 70;
    var colorNum3 = 100;
    console.log("rgb(" + colorNum1 + "," + colorNum2 + "," + colorNum3 + ")");
    $("#center").css("background-color","rgb(" + colorNum1 + "," + colorNum2 + "," + colorNum3 + ")")
    console.log(colorNum1);
    nodeC4.gain.value = force;



  }
});
