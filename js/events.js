function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    img.tasty;
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which === 71){
      alert('You have pressed G');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
});
