// http://www.imdb.com/rg/rss/BORN-channel/OnThisDay
// http://www.imdb.com/search/name?birth_monthday=3-20

$(function() {

    // run python file
    /*$.ajax({
        type: 'POST',
        url: '../python/IMDbScraper.py',
        success: function(data) {
            console.log('success!');
        },
        error: function(data) {
            console.log('there was an error')
        }
    });*/
    
    // load json data
    $.ajax({
        url: "../python/json/info.json",
        success: function(response) {
            
            var obj = response;
            
            // update page view
            var i = 1;
            for (var celeb in obj) {
                console.log(obj[celeb]);
                $(`#celeb${i}`).html(`
                    <img src="../python/images/celeb${i}.jpg">
                    <div class="bottom-text-1">${obj[celeb].name}</div>
                    <div class="bottom-text-2">${obj[celeb].age} years old</div>
                `);
                i++;
            }
        }
    });
});