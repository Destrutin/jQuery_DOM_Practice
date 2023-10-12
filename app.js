$(function() {
    $('#movie-form').submit(function(e) {
        e.preventDefault();
        
        let title = $('#title').val();
        let rating = $('#rating').val();
        
        if(title && rating) {
            if(title.length < 2) {
                alert("Title must be more that 2 characters")
                $('#title').val('');
                $('#rating').val('');
                return;
            }
    
            if(rating < 0 || rating > 10) {
                alert("Rating must be a number from 0 to 10")
                $('#title').val('');
                $('#rating').val('');
                return;
            }
            let ratedMovie = $('<div class="rated-movie">');
            let movieInfo = $('<span>'+title+' '+'Rating:'+rating+'</span>');
            let removeButton = $('<button class="remove-button">Remove</button>');

            ratedMovie.append(movieInfo, removeButton);
            $('#movie-list').append(ratedMovie);

            $('#title').val('');
            $('#rating').val('');

            removeButton.click(function() {
                ratedMovie.remove();
            });
        }
    });
});