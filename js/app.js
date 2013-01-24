$(document).ready(function(){

    // convert from text (with newline embedded) to html 
    // ref: http://stackoverflow.com/a/6455874/166286
    function toHTML(text) {
        var htmls = [];
        var lines = text.split(/\n/);
        // The temporary <div/> is to perform HTML entity encoding reliably.
        //
        // document.createElement() is *much* faster than jQuery('<div/>')
        // http://stackoverflow.com/questions/268490/
        //
        // You don't need jQuery but then you need to struggle with browser
        // differences in innerText/textContent yourself
        var tmpDiv = jQuery(document.createElement('div'));
        for (var i = 0 ; i < lines.length ; i++) {
            var html = tmpDiv.text(lines[i]).html();

            if(!(/^>+/).test(lines[i])) {
                html = "<span class=\"standout\">" + html + "</span>";
            }

            htmls.push(html);
        }
        return htmls.join("<br>");
    }

    function updateResult() {
        var input = $("#input-box").val();
        $('#result').html(toHTML(input));
    }

    $("#input-box").on("input", updateResult);
    $("#clearInput").on("click", function(){
        // clear
        $("#input-box").val("");
        updateResult();
    });
});
