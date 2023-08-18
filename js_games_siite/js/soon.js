
let r =0
carousel();

function carousel() {
 let x = document.getElementsByClassName("soon");
 console.log(x,r)
  for ( let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  r++;
  if (r > x.length) {r = 1}  console.log(r-1)  
  x[r-1].style.display = "block";  
  setTimeout(carousel, 500);    
}

