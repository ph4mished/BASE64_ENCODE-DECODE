function btn(){
  let x = document.getElementById("input").value;
  
  let encode = btoa(x);
  
  console.log(encode);

document.getElementById("output").value = encode;
}
   
function dec(){
  let x = document.getElementById("input").value;
  
  let decode = atob(x);
  
  console.log(decode);

document.getElementById("output").value = decode;
}
