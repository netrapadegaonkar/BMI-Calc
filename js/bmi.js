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
$('#overp').hide();
$('#underp').hide();
$('#h1').hide();


}
function calc(){
	var a = document.f1.weight.value;
	var b = document.f1.height.value;
	var c = b*b;
	var d = a/c;
	$('#bmiresult').show(1000);
	$('#text').hide();
	$('#ans').show(1000);
	$('#bmi').html("BMI: &nbsp; &nbsp; "+Math.round(d * 100) / 100);
	if(d < 18.5){
$('#status').html("You are UNDERWEIGHT");
$('#under').show(1000);
}
if(d > 18.5 && d < 25){
$('#status').html("You are perfectly HEALTHY!!!");
$('#h1').show(1000);
}
if(d > 25){
$('#status').html("You are OVERWEIGHT");
$('#over').show(1000);
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
						
						
	

function reset(){
	document.f1.weight.value="";
	document.f1.height.value="";
	}
	
	function underweight()
	{
		$('#under2').hide();
		$('#under1').show();
		$('#underp').hide();
	}
	
	function underweight1()
	{
		$('#under1').hide();
		$('#under2').show();
		$('#underp').hide();
	}
	
	function underweight2()
	{
		$('#under1').hide();
		$('#under2').hide();
		$('#underp').show();
	}
	
	function overweightc(){
		$('#overweightc').show();
		$('#overweightl').hide();
		$('#overp').hide();
		
	}
	
	function overweightl(){
		$('#overweightc').hide();
		$('#overweightl').show();
		$('#overp').hide();
	}

	function overweight2(){
		$('#overweightc').hide();
		$('#overweightl').hide();
		$('#overp').show();
	}
