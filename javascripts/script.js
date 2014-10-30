$(":checkbox").change(function() {
    if(this.checked) {
        $( "#Posters" ).show( "fast" );
        console.log("checked")
    }
});


//if boxes have been checked then show a certain div.
//define all divs with images and the in css desplay:none;