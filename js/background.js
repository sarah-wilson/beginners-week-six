// writes to the log 'hello'
console.log('hello!')

// three different variables for the different images
var teamnames = ['Hello World','Callback Cats','The Four Fridgeteers','Pastabilities','The Beige Cardis','Team Attenborough', 'Team ZKhenna']

// Only fires logic after the page has fully loaded
$( document ).ready(function(){

  // when the button is clicked it triggers a function
  $('h1').on('click', function () {

    // 1. log to the console that you have clicked the button
    console.log('I was clicked!')

    // this selects a randon background from above and stores it as the variable 'randomBackground'
    var randomName = teamnames[Math.floor(Math.random() * teamnames.length)];
    // this creates a string that css will understand to be a background url

    // EXTENSION TASK!
    // 3. Change the text of the 'span' to be that of the photographer
    //   (hint, you should re-use randomBackground)
    $('h1').text(randomName)

    // Double points if you replace '-' between their names with a space
    var artist = randomName.replace(/-/g, ' ');
    $('span').text(artist)
      })
    }) // here endeth the function
