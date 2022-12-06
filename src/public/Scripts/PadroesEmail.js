


function myFunction() {
  let input = document.getElementById('myInput').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('ListUl');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}
