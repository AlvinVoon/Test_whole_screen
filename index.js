document.querySelector('.trigger').addEventListener('click', function(event) {
  event.preventDefault();
  var myDiv = document.getElementById('myDiv');
  myDiv.classList.add('hidden');
  });