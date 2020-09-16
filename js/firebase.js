var config = {
  apiKey: 'AIzaSyAtdY97k1f8whxquB7_VXxLWuI7xPYv7Bc',
  authDomain: 'safety-mail.firebaseapp.com',
  databaseURL: 'https://safety-mail.firebaseio.com',
  storageBucket: 'safety-mail.appspot.com',
}

// Initialize your Firebase app
firebase.initializeApp(config)

// Reference to the recommendations object in your Firebase database
var informations = firebase.database().ref('informations')

// Save a new recommendation to the database, using the input in the form
var submitInformations = function () {
  // Get input values from each of the form elements
  var name = $('#name').val()
  var contacter = $('#contacter').val()
  var email = $('#email').val()

  // Push a new recommendation to the database using those values
  informations.push({
    name: name,
    contacter: contacter,
    email: email,
  })
}

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {
  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $('#contact-form').submit(submitInformations)
})
