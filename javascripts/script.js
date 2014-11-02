//When checkbox is checked turn on information (posters, type, etc.) and turn off 'content'
$(".checkboxes #cb1_0").change(function() { 
    if(this.checked) {
        $( "#About" ).show( "fast" );
        $( ".content" ).hide( "fast" );
  } else {
    $( "#About" ).hide( "fast" );
    $( ".content" ).show( "fast" );
    }
});

$(".checkboxes #cb1_1").change(function() { 
    if(this.checked) {
        $( "#Posters" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    } else {
    $( "#Posters" ).hide( "fast" );
    $( ".content" ).show( "fast" );
    }
});

$(".checkboxes #cb1_2").change(function() { 
    if(this.checked) {
        $( "#Typography" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    } else {
    $( "#Typography" ).hide( "fast" );
    $( ".content" ).show( "fast" );
    }
});

$(".checkboxes #cb1_3").change(function() { 
    if(this.checked) {
        $( "#Identity" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    } else {
    $( "#Identity" ).hide( "fast" );
    $( ".content" ).show( "fast" );
    }
});

$(".checkboxes #cb1_4").change(function() { 
    if(this.checked) {
        $( "#Motion" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    } else {
    $( "#Motion" ).hide( "fast" );
    $( ".content" ).show( "fast" );
    }
});

$(".checkboxes #cb1_5").change(function() { 
    if(this.checked) {
        $( "#Writing" ).show( "fast" );
        $( ".content" ).hide( "fast" );
    } else {
    $( "#Writing" ).hide( "fast" );
    $( ".content" ).show( "fast" );
    }
});

