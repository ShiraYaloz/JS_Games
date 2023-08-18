// //homeWork
// //debugger
let tz = new Array(3,2,5,4,3,6,2,0,2);
let count=0; 
for (let i = 1; i < tz.length-1; i+=2) {
   tz[i]=tz[i]*2;
   if(tz[i]>10){
       tz[i]=Math.round(tz[i]/10)+tz[i]%10;
    }
   count= count+tz[i]+tz[i-1];     
}
if(tz[8]==10-count%10){
    alert ("correct!"); 
}
else{
    alert ("not correct!")  
}
let dateY = document.getElementById("dateY")
dateY.addEventListener("keypress", f_keypressd)
dateY.addEventListener("blur", f_blur)
let nameP = document.getElementById("nameP")

nameP.addEventListener("keypress", f_keypressn)

function f_keypressn()
{
    if(!((event.keyCode>=97  && event.keyCode<=122) || 
    (event.keyCode>=1488  && event.keyCode<=1514) || 
    (event.keyCode>=65  && event.keyCode<=90) || ( event.keyCode==32)))
        event.preventDefault()
console.log(event.keyCode)
}
function f_blur()
{
if(dateY.value.length<4)
dateY.focus()
if(dateY.value>2022)
{
dateY.focus()
innerD.innerHTML="not correct"
}
else
innerD.innerHTML=""
}
function f_keypressd()
{
if(dateY.value.length==4)
event.preventDefault()
if(!(event.keyCode>=48  && event.keyCode<=57))
event.preventDefault()
}

debugger
let month = new Array ('jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec');
let d= new Date();
//1
let d1  = d.getDate() + '-' +  parseInt(d.getMonth()+1) + '-' +  d.getFullYear();
let n2 =  d.getDate() + ' ' + month[d.getMonth()] + ' ' +  d.getFullYear();
let d3  = d.getDate() + '/' +  parseInt(d.getMonth()+1) + '/' +  d.getFullYear();
//4
debugger
let x="nan", ans;
for (let i = 0; i < x.length; i++) {
    if( x[i]=='a' )
     ans = "yes"
}
debugger
let p="nan", ans1 ,i,l;
if(p.length%2==0)
l=p.length/2;
else
l=Math.floor(p.length/2) +1
for ( i = 0; i < l &&  p[i]==p[p.length-1-i] ; i++) {}
   if(i==l)
     ans1 = "yes"
debugger
let num, num1;
num=Math.random;
let button = document.getElementById("buttom")
button.addEventListener("click",f_click)
f_click()
{
let here =  document.getElementById("here")
let words = ["משחק", "האיש", "תלוי","פורים","שמח","המן","רעשן","משלוח","מנות","אביון","קטן","מתנה"]
let word = words[parseInt(Math.random()*words.length)]
let inputs = new Array()
for(let i=1; i <= word.length; i++)
{
     inputs[i] = document.createElement("input")
     inputs[i].setAttribute("type", "text")
     inputs[i].setAttribute("placeholder",i)
     inputs[i].setAttribute("readonly","readonly")
     here.appendChild(inputs[i])// 
     inputs[i].className="inputS"
    
    // here.appendChild(document.createElement("br"))//?
}
let countM=1
let inputL = document.getElementById("inputL")

inputL.addEventListener("keypress", f_stop)// לחיצה 
inputL.addEventListener("blur", f_letter)// שחרור 

function f_stop()
{
 if(inputL.value.length==1) 
 event.preventDefault()   
}
function f_letter()
{
if(word.indexOf(inputL.value)!=-1 && inputL.value!="")
{
inputs[word.indexOf(inputL.value)+1].value= inputL.value
countM=1
}
else
alert(countM++)
}
}

let k=1;
let here =  document.getElementById("here")
for(let i=0; i < 4; i++)
{
     here.appendChild(document.createElement("br"))
     for(let j=0; j < 4 ; j++){
     inputs = document.createElement("input")
     inputs.setAttribute("type", "button")
     inputs.setAttribute("data-i",i)
     inputs.setAttribute("data-j",j)
     inputs.setAttribute("id",k)
     here.appendChild(inputs) 
     inputs.addEventListener("click", f_click) 
     inputs.addEventListener("click", f_isInOrder) 
     // inputs.addEventListener(f_click, f_isInOrder) 
     if( k!=16)    
     inputs.setAttribute("value",k++)
     else
     inputs.setAttribute("value"," ")
     inputs.className= "btn"
}
}
let but =  document.getElementById("but")
but.addEventListener("click", f_mix) 
//debugger
function f_click(){
    // alert(here.children[event.target.getAttribute("id")].value)
     let i = event.target.getAttribute("data-i")
     let j = event.target.getAttribute("data-j")
     let k1 = event.target.getAttribute("id")
    console.log(i,j,k1,parseInt(k1)+parseInt(1))
     console.log(document.getElementById(k1).value)
     //למעלה
      if(i!=0 &&(document.getElementById(parseInt(k1)-parseInt(4))).value==" "){
     document.getElementById(parseInt(k1)-parseInt(4)).value= document.getElementById(parseInt(k1)).value
     document.getElementById(parseInt(k1)).value=" "
}
      //למטה
     else if(i!=3 && (document.getElementById(parseInt(k1)+parseInt(4))).value==" "){
      //alert("יש")
     document.getElementById(parseInt(k1)+parseInt(4)).value= document.getElementById(parseInt(k1)).value
     document.getElementById(parseInt(k1)).value=" "
      }
     // שמאלה
     else if(j!=0 &&(document.getElementById(parseInt(k1)-parseInt(1))).value==" "){
     document.getElementById(parseInt(k1)-parseInt(1)).value= document.getElementById(parseInt(k1)).value
     document.getElementById(parseInt(k1)).value=" "
   }
      //ימינה
      else if(j!=3 && (document.getElementById(parseInt(k1)+parseInt(1))).value==" "){
      document.getElementById(parseInt(k1)+parseInt(1)).value= document.getElementById(parseInt(k1)).value
      document.getElementById(parseInt(k1)).value=" "
     }
}
let k1 = 16
function f_mix(){
     for(let i=0; i<200; i++)   {
     let z = parseInt(Math.random()*4)
   //למעלה
      if(z==0){
     document.getElementById(parseInt(k1)).value= document.getElementById(parseInt(k1)-parseInt(4)).value
     document.getElementById(parseInt(k1)-parseInt(4)).value=" "
     k1 = parseInt(k1)-parseInt(4)
     }
      //למטה
     else if(z==1 ){
     document.getElementById(parseInt(k1)).value= document.getElementById(parseInt(k1)+parseInt(4)).value
     document.getElementById(parseInt(k1)+parseInt(4)).value=" "
     k1 = parseInt(k1)+parseInt(4)
      }
     // שמאלה
     else if(z==2){
     document.getElementById(parseInt(k1)).value= document.getElementById(parseInt(k1)-parseInt(1)).value
     document.getElementById(parseInt(k1)-parseInt(1)).value=" "
     k1 = parseInt(k1)-parseInt(1)
     }
      //ימינה
      else if(z==3){
      document.getElementById(parseInt(k1)).value= document.getElementById(parseInt(k1)+parseInt(1)).value
      document.getElementById(parseInt(k1)+parseInt(1)).value=" "
      k1 = parseInt(k1)+parseInt(1)
      }
     }
}
function f_isInOrder(){
     for(let i=1; i < 16 ;i++){
     if(document.getElementById(i).value!= i)
     return
}
     alert("inOrder")
     return
}
// f_dont()
// {
//     event.preventDefault() 
// }