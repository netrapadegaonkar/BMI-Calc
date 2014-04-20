$(document).ready(function(){
    home();
 });
   

function home(){
$('#text').show();
$('#ans').hide();
$('#under').hide();
$('#over').hide();
$('#under1').hide();
$('#under2').hide();
$('#bmiresult').hide();
$('#overweightc').hide();
$('#overweightl').hide();


}
function calc(){
	var a = document.f1.weight.value;
	var b = document.f1.height.value;
	var c = b*b;
	var d = a/c;
	$('#bmiresult').show();
	$('#text').hide();
	$('#ans').show();
	$('#bmi').html("BMI &raquo; "+Math.round(d * 100) / 100);
	if(d < 18.5){
$('#status').html("You are UNDERWEIGHT");
$('#under').show();
}
if(d > 18.5 && d < 25){
$('#status').html("You are perfectly HEALTHY!!!");
}
if(d > 25){
$('#status').html("You are OVERWEIGHT");
$('#over').show();
}
}
function num(){
var p=document.forms["f1"]["weight"].value;
var q=document.forms["f1"]["height"].value;
	if ( isNaN(p) || p==null || p=="")
    {
      alert("Please enter valid weight");
      return false;
    }
	else if(isNaN(q)|| q==null || q==""){
		alert("Please enter valid height")
	}
	else
		{
		calc();
		
		}
}
						
						
	
/*function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }  
 }*/
  
function reset(){
	document.f1.weight.value="";
	document.f1.height.value="";
	}
	
	function underweight()
	{
		$('#under2').hide();
		$('#under1').show();
	}
	
	function underweight1()
	{
		$('#under1').hide();
		$('#under2').show();
	}
	
	function overweightc(){
		$('#overweightc').show();
		$('#overweightl').hide();
		
	}
	
	function overweightl(){
		$('#overweightc').hide();
		$('#overweightl').show();
		
	}
