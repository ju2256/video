require(['jquery', 'bootstrap', 'bootstrap-switch'], function($){
    define(function (require) {
        var namedModule = require('name');
    });
    $(function() {
        $.fn.bootstrapSwitch.defaults.size = 'mini';
        $(".chk").bootstrapSwitch();

        $('input[id="titre-display"]').on('switchChange.bootstrapSwitch', function(event, state) {
            state === true ? s = 1 : s = 0
            var jqXHR = video.update({
                "field" : 'display',
                "value" : s,
                "var"   : 'titre'
            });
        });
        $('#titre-value').change(function(){
            var jqXHR = video.update({
                "field" : 'value',
                "value" :  "'" + $(this).val() + "'",
                "var"   : 'titre'
            });
        });

        $('input[id="msg-display"]').on('switchChange.bootstrapSwitch', function(event, state) {
            state === true ? s = 1 : s = 0
            var jqXHR = video.update({
                "field" : 'display',
                "value" : s,
                "var"   : 'msg'
            });
        });
        $('#msg-value').change(function(){
            var jqXHR = video.update({
                "field" : 'value',
                "value" :  "'" + $(this).val() + "'",
                "var"   : 'msg'
            });
        });

        $('input[id="reseau-display"]').on('switchChange.bootstrapSwitch', function(event, state) {
            state === true ? s = 1 : s = 0
            var jqXHR = video.update({
                "field" : 'display',
                "value" : s,
                "var"   : 'reseau'
            });
        });
        $('input[id="reseau-value"]').on('switchChange.bootstrapSwitch', function(event, state) {
            state === true ? s = 1 : s = 0
            var jqXHR = video.update({
                "field" : 'value',
                "value" : s,
                "var"   : 'reseau'
            });
        });

        $('input[id="inscription-display"]').on('switchChange.bootstrapSwitch', function(event, state) {
            state === true ? s = 1 : s = 0
            var jqXHR = video.update({
                "field" : 'display',
                "value" : s,
                "var"   : 'inscription'
            });
        });
        $('input[id="inscription-value"]').on('switchChange.bootstrapSwitch', function(event, state) {
            state === true ? s = 1 : s = 0
            var jqXHR = video.update({
                "field" : 'value',
                "value" : s,
                "var"   : 'inscription'
            });
        });


        $('input[id="tournoi-display"]').on('switchChange.bootstrapSwitch', function(event, state) {
            state === true ? s = 1 : s = 0
            var jqXHR = video.update({
                "field" : 'display',
                "value" : s,
                "var"   : 'tournoi'
            });
        });

        $('#tournoi-value').change(function(){
            var jqXHR = video.update({
                "field" : 'value',
                "value" :  "'" + $(this).val() + "'",
                "var"   : 'tournoi'
            });
        });

        $('input[id="stream-display"]').on('switchChange.bootstrapSwitch', function(event, state) {
            state === true ? s = 1 : s = 0
            var jqXHR = video.update({
                "field" : 'display',
                "value" : s,
                "var"   : 'stream'
            });
        });

        $('#stream-value').change(function(){
            var jqXHR = video.update({
                "field" : 'value',
                "value" :  "'" + $(this).val() + "'",
                "var"   : 'stream'
            });
        });

        $('#retourC').click(function(){
            console.log('ok');
            var content = $('#tournoi-value').val();
            $('#tournoi-value').val(content + "<br>");
        });
        $('#gras').click(function(){
            console.log('ok');
            var content = $('#tournoi-value').val();
            $('#tournoi-value').val(content + "<b></b>");
        });
        $('#souligne').click(function(){
            console.log('ok');
            var content = $('#tournoi-value').val();
            $('#tournoi-value').val(content + "<u></u>");
        });

        displayValues();

        // recuperation de l'état
        function displayValues(){
            var jqXHR = video.donnees()
            .done(function(jsontext){
                var result = jQuery.parseJSON(jsontext);
                console.dir(result);
                $.each( result, function( key, value ){
                    if(value.display === "1"){
                        $("#"+ value.var + "-display").click();
                    }
                    switch(value.value){
                        case "1":
                            $("#"+ value.var + "-value").click();
                        break;
                        default:
                            $("#"+ value.var + "-value").val(value.value);
                        break;
                    }
                });
            });
        }
    });
});