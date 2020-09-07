function saveEmail(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('email-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveEmail(email);
