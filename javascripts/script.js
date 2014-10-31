/*
//Working on See All feature

$("#cbgroup1_master").change(function() {console.log("checked1");

// define var
var master = $ (this)
var cn = "cbgroup1"

//call function, passing var

	var cbarray = document.getElementsByClassName(cn);
	for(var i = 0; i < cbarray.length; i++) { 
		var cb = document.getElementById(cbarray[i].id); console.log(cbarray[i].id);
		cb.checked = master.checked;
			}})
			

//	window.addEventListener("scroll", yScroll);
*/


//When checkbox is checked turn on information (posters, type, etc.) and turn off 'content'
$(".checkboxes #cb1_1").change(function() { 
    if(this.checked) {
        $( "#Posters" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    }
});


$(".checkboxes #cb1_2").change(function() { 
    if(this.checked) {
        $( "#Typography" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    }
});

$(".checkboxes #cb1_3").change(function() { 
    if(this.checked) {
        $( "#Identity" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    }
});

$(".checkboxes #cb1_4").change(function() { 
    if(this.checked) {
        $( "#Motion" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    }
});

$(".checkboxes #cb1_5").change(function() { 
    if(this.checked) {
        $( "#Writing" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    }
});

$(function(){
    $(window).bind("load resize", function(){
        _winHeight = $(window).height();

        // Setting Height
        $('.writing').css({'height':_winHeight * 0.9}); // 0.5 = 50%, 0.8 = 80%
    });
});


//if boxes have been checked then show a certain div.
//define all divs with images and the in css desplay:none;
//".checkboes input"


//if its in the list then draw that section

//	$('checkbox')
//	togglecheckboxes(this,'cbgroup1')"