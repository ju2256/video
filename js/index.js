require(['jquery', 'bootstrap', 'bigtext','jwplayer'], function($){
    $(function() {
        var components = {
            titre: 0,
            msg: 0,
            reseau: 0,
            inscription: 0,
            tournoi: 0
        };
        var streamUrl = "";
        var freezePageRefreshing = false;
        BigText.DEBUG_MODE = false;
        // recuperation de l'état
        function display(){
            var jqXHR = video.donnees()
            .done(function(jsontext){
                var result = jQuery.parseJSON(jsontext);
                $.each( result, function( key, value ) {
                    switch(value.var){
                        case "titre":
                            if(value.display === "1"){
                                $("#" + value.var + "-display").removeClass("hide");
                                $("#" + value.var + "-value").html(value.value);
                                $("#titre-display").bigtext();
                                components.titre = 1;
                            } else {
                                if(components.titre === 1){
                                    changes = true;
                                    components.titre = 0;
                                    $("#" + value.var + "-display").addClass("hide");
                                }
                            }
                        break;
                        case "msg":
                            if(value.display === "1"){
                                $("#" + value.var + "-display").removeClass("hide");
                                $("#" + value.var + "-value").html(value.value);
                                $("#msg-display").bigtext({maxfontsize: 60});
                                components.msg = 1;
                            } else {
                                if(components.msg === 1){
                                    changes = true;
                                    components.msg = 0;
                                    $("#" + value.var + "-display").addClass("hide"); 
                                } 
                            }
                        break;
                        case "reseau":
                            if(value.display === "1"){
                                $("#" + value.var + "-display").removeClass("hide");
                                if(value.value === "1"){ 
                                    $("#" + value.var + "-value").html('<span class="glyphicon glyphicon-thumbs-up ok"></span>');
                                } else {
                                    $("#" + value.var + "-value").html('<span class="glyphicon glyphicon-thumbs-down ko"></span>');
                                }
                                components.reseau = 1;
                            } else {
                                components.reseau = 0;
                                $("#" + value.var + "-display").addClass("hide");
                            }
                        break;
                        case "inscription":
                            if(value.display === "1"){
                                $("#" + value.var + "-display").removeClass("hide");
                                value.value === "1" ? ( 
                                    $("#" + value.var + "-value").html('<span class="glyphicon glyphicon-thumbs-up ok"></span>') 
                                ) : (
                                    $("#" + value.var + "-value").html('<span class="glyphicon glyphicon-thumbs-down ko"></span>') 
                                )
                                components.inscription = 1;
                            } else {
                                components.inscription = 0;
                                $("#" + value.var + "-display").addClass("hide");
                            }
                        break;
                        case "tournoi":
                            if(value.display === "1"){
                                $("#" + value.var + "-display").removeClass("hide");
                                $("#" + value.var + "-value").html(value.value);
                                components.tournoi = 1;
                            } else {
                                components.tournoi = 0;
                                $("#" + value.var + "-display").addClass("hide");
                            }
                        break;
                        case "stream":
                            if(value.display === "1"){
                                if(value.value != streamUrl){
                                    $("#" + value.var + "-display").removeClass("hide");
                                    stream(value.value);
                                    components.stream = 1;
                                    freezePageRefreshing = true;
                                } else {
                                    freezePageRefreshing = true;
                                }
                            } else {
                                freezePageRefreshing = false;
                                components.stream = 0;
                                $("#" + value.var + "-display").addClass("hide");
                            }
                        break;
                    }

                });
                if(freezePageRefreshing === false){
                   calculate(); 
                }
            });
        }

        function stream(val){
            console.dir(jwplayer);
            /*
            window.jwplayer = jwplayer;
            jwplayer.key="Mp9kNGvefRQR+v+cNaQK1Ub6wQgxlwySEXBybA==";
            jwplayer('stream-value').setup({
                file: './video-sample/sample.mp4',
            });
            jwplayer("player").setup({
                width: '320',
                height: '40',
                sources: [{
                    file: './video-sample/sample.mp4'
                },{
                    file: "http://127.0.0.1:1935/vod/sample_1.mp3/playlist.m3u8"
                }]
            });
            */
        }
        
        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key) && obj[key] != 0) { size++ }
            }
            return size;
        };

        function calculate(){
            console.log('calculate');
            var nb = Object.size(components);
            console.dir(components);
            console.log("nb=" + nb);
            var wMax = (window.innerWidth);
            var hMax = (window.innerHeight);
            console.log("w=" + wMax + " h=" + hMax);
            h = 0;
            $.each(components, function(index, value){
                if(value != 0){
                    h += $("#" + index + "-display").height();
                    console.log($("#" + index + "-display").height());
                    console.log("item=" + index + " h=" + h);
                }
            });
            if(components.reseau === 1 && components.inscription === 1){
                h = h- $("#reseau-display").height();
                nb = nb - 1;
            }
            console.log("hauteur cumulée=" + h);
            $.each(components, function(index, value){
                if(value != 0){
                    var margin = (hMax-h)/(nb*2);
                    console.log("margin calculée=" + margin);
                    $("#" + index + "-display").css("margin-top", margin);
                }
            });
        }
        display();
        setInterval(display, 3100);
    });
});