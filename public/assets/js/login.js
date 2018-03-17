$(document).ready(function() {
    $('.signupSubmit').on('click', function(event) {
        event.preventDefault();
        var newUser = {
            email: $('.signupEmail').val().trim(),
            password: $('.signupPassword').val().trim()
        };

        $.post('/signup', newUser)
        .then(function(data) {
            console.log(data);
            console.log('added');
        });
    });

    $('.loginSubmit').on('click', function(event) {
        event.preventDefault();
        var loginUser = {
            email: $('.loginEmail').val().trim(),
            password: $('.loginPassword').val().trim()
        };

        $.post('/login', loginUser)
        .then(function(data) {
            console.log(data);
            console.log('logged in');
        });
    });
});