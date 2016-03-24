// currently uses http://imdb.com
// possibly update to http://imdb.com/search/name?birth_monthday=3-20

$(function() {
    
    // load json data
    $.ajax({
        url: "../python/json/info.json",
        success: function(response) {
                        
            // update page view
            var i = 1;
            for (var celeb in response) {
                $(`#celeb${i}`).html(`
                    <img src="../python/images/celeb${i}.jpg">
                    <div class="bottom-text-1">${response[celeb].name}</div>
                    <div class="bottom-text-2">${response[celeb].age} years old</div>`);
                i++;
            }
        }
    });

});