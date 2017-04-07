/*
*
* Source: https://github.com/omegga/wikipedia-viewer
*/
$(document).ready(function(){

    function getSearch(entry){
        var URL = "https://en.wikipedia.org/w/api.php?action=query&format=json",
            action="&action=query&list=search&srsearch=" + entry + "&callback=?";

        var query = URL + action;
        console.log(query);
        $.getJSON(query, function(jsonVal){
            var titles = [];
            var snippets = [];
            var tab = jsonVal.query.search;
            var html = "";

            for (var i = 0; i < tab.length; i++){
                titles.push(tab[i].title);
                snippets.push(tab[i].snippet);
            }

            if (titles.length > 1){
                for (i = 0; i < titles.length; i++){
                   html += '<div class="wiki">';
					html += '<a href="http://wikipedia.org/wiki/' + titles[i] + '"></a>';
					html += '<h3 class="text-warning">' + titles[i] + "</h3>";
					html += "<h5>" + snippets[i] + "...</h5>";
html += '</div>';
                }
            } else {
                    html += '<h2 style="text-align:center">No Entry.</h2>';
                }
                $("#content").html(html);

        });
    }

    $("#search").on("click", function(){
        var entry = $(".entry").prop("value");
      $("#headerFont_1").attr('class', "fa fa-circle-o-notch fa-spin");
        getSearch(entry);
    });
});
