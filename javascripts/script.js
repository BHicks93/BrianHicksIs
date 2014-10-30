$(":checkbox").change(function() { console.log("checked1");
    if(this.checked) {
        $( "#Posters" ).show( "fast" );
        console.log("checked2");
    }
});

console.log("checked3");
//if boxes have been checked then show a certain div.
//define all divs with images and the in css desplay:none;