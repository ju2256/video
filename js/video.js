var video = (function () {
    function donnees(){
        return $.ajax({
			url :           './php/video.php',
			type:           'post',
			timeout:        5000,
			cache:          false,  
			data:           { "action": "donnees" }
		})
    };
    function update(d){
        return $.ajax({
			url :           './php/video.php',
			type:           'post',
			timeout:        5000,
			cache:          false,  
			data:           { "action": "update", "field": d.field, "value" : d.value, "var" : d.var }
		})
    };
    /*
    function getAdherent(){
        return $.ajax( {
			url :           'app/php/video.php',
			type:           'post',
			timeout:        5000,
			cache:          false,  
			data:           { "action": "getAdherent" }
		} )
    };
    */
    
    return {
        donnees: donnees,
        update : update
	};
})();