//--------------------------------------משחק בול פגיעה---------------------------------------------
//--------------------------------------------------------------------------------------------------
//----------------------------------------הגדרת משתנים---------------------------------------------
//כפתור שיראה את התשןבה
let show = document.getElementById("show")
show.addEventListener("click",f_show)
//המערך הכללי של הצבעים
let colors = ["rgb(66, 139, 193)","rgb(237, 76, 92)","rgb(242, 178, 0)","rgb(178, 135, 105)","rgb(62, 67, 71)","rgb(255, 255, 255)"]
// המערך של הניחושים
let color1 = new Array(4)
//המיקום בו אוחז המילוי של הניחושים
let placeG = 0
//משתנה בול
let bool = 0
//משתנה פגיעה
let pgiah = 0
//מספר נסיונות
let tr = 0
//המקומות בדף לשמירת הנתונים
let here = document.getElementById("here")//הצבעים
let gues = document.getElementById("gues")//הניחוש
let points = document.getElementById("points")//הניקוד
let history = document.getElementById("history")//ההיסטוריה
//הכפתור שמאתחל את המשחק
let btn1 = document.getElementById("btn1")
//הוספת אירוע בעת לחיצה
btn1.addEventListener("click",f_inTheBegin)
f_inTheBegin()
//------------------------------------פונקצית אתחול המשחק---------------------------------------------
function f_inTheBegin(){
console.log(colors)
//איפוס המשתנים
document.getElementById("ans").style.display="none"
placeG =0 
bool=0
pgiah=0
tr=0
here.innerHTML = ""//כאן זה לרוקן את הדף
for(let i=0 ; i<6;i++){//מייצר את ששת כפתורי הצבעים
  let color = document.createElement("input")
  color.setAttribute("type","button")
  color.addEventListener("click",f_clickColor)
  color.setAttribute("id","color_"+i)
  color.style.backgroundColor =colors[i]
  color.className="color"
  here.appendChild(color)
} 
//לרוקן את החלק השני
gues.innerHTML = ""
//יוצר את כפתורי הניחוש
for(let i=0 ; i<4;i++){
  let g = document.createElement("input")
  g.setAttribute("type","button")
  g.setAttribute("id","g_"+i)
  g.className="guesHide"
  gues.appendChild(g)
} 
//הגרלת ארבע צבעים שונים
color1[0] =colors[parseInt(Math.random()*colors.length)]
color1[1] =colors[parseInt(Math.random()*colors.length)]
while(color1[0]==color1[1]){
  color1[1] =colors[parseInt(Math.random()*colors.length)]
}
color1[2]=colors[parseInt(Math.random()*colors.length)]
while(color1[0]==color1[2] || color1[1]==color1[2] ){
  color1[2] =colors[parseInt(Math.random()*colors.length)]
}
color1[3]=colors[parseInt(Math.random()*colors.length)]
while(color1[0]==color1[3] || color1[1]==color1[3] ||  color1[2]==color1[3]){
  color1[3] =colors[parseInt(Math.random()*colors.length)]
}
console.log(color1)

//יצירת הסטוריה
history.innerHTML=""
for(let i=0; i < 10; i++)
{
     if(i!=0)
     history.appendChild(document.createElement("br"))
     for(let j=0; j < 4 ; j++){
     h = document.createElement("input")
     h.setAttribute("type", "button")
     h.setAttribute("id","h_"+i+j)
     history.appendChild(h) 
     h.className = "h"
}
// בול בהיסטוריה
b = document.createElement("input")
b.setAttribute("type", "text")
b.setAttribute("readonly","readonly") 
b.setAttribute("id","b_"+i)
history.appendChild(b) 
b.className = "h"
//פגיעה בהיסטוריה
p = document.createElement("input")
p.setAttribute("type", "text")
p.setAttribute("readonly","readonly") 
p.setAttribute("id","p_"+i)
history.appendChild(p) 
p.className = "h"

}
}
// ------------------------------------------פונקציה בעת לחיצה על צבע מסוים-------------------------------
function f_clickColor(){
  if(placeG<4){//כאשר יש עדיין כפתורים ריקים
  for (let k= 0; k < placeG ;k++) { //תעבור אחורה על הכפתורים
    console.log("g_"+k,placeG) 
    //אם יש צבע זהה תחזיר
    if(document.getElementById("g_"+k).style.backgroundColor==event.target.style.backgroundColor)
  return
  }
  //ואם אין עדיין את הצבע הזה תכניס את הצבע
  document.getElementById("g_"+placeG).style.backgroundColor = event.target.style.backgroundColor
  placeG++;}
  //כאשר הוכנסו ארבע צבעים
  if(placeG==4){
  //האם יש בול או פגיעה
  //בול
  for (let i = 0; i < 4; i++) {
   if( document.getElementById("g_"+i).style.backgroundColor== color1[i])
    bool++
    //פגיעה
    else
    for (let j = 0; j < 4; j++){
    if(i!=j &&  document.getElementById("g_"+i).style.backgroundColor== color1[j])
     pgiah++
    }
    setTimeout(f_next,1500)

// כותב את זה בתיבות טקסט
//מרוקן את המקום של הנקודות
points.innerHTML=""
  } let boolT = document.createElement("input")
   boolT.setAttribute("type","text")
   boolT.setAttribute("readonly","readonly") 
   boolT.setAttribute("id","boolT") 
   boolT.setAttribute("value","bool - "+bool) 
   boolT.className="points"
   points.appendChild(boolT)

  let pT = document.createElement("input")
  pT.setAttribute("type","text")
  pT.setAttribute("readonly","readonly") 
  pT.setAttribute("id","pT") 
  pT.setAttribute("value","pgiah - " +pgiah) 
  pT.className="points"
  points.appendChild(pT)
  placeG++;

}
}
//---------------------------------פונקציה שעוברת לנסיון הבא--------------------------------
function f_next(){
  // אם יש ארבע בולים
  if(bool==4){
    alert("יפה מאוד!!")
    f_inTheBegin()
    return
    }
  //מרוקן את המקום של הנקודות
points.innerHTML=""
  if(placeG>4){
//אם פעם אחת לפני האחרונה
if(tr==9)
alert("נסיון אחרון...")
// אם עברו 10 נסיונות
if(tr==10){
alert("נסה שוב...")
f_show()
return
}
// מעביר להסטוריה
for (let i = 0; i < 4; i++){
  document.getElementById("h_"+tr + i).style.backgroundColor=document.getElementById("g_"+i).style.backgroundColor
  }
  document.getElementById("p_"+tr).value = pgiah
  document.getElementById("b_"+tr).value = bool
  gues.innerHTML=""
  placeG =0 //איפוס המיקום במילוי
 // כפתורי הניחוש
  gues.innerHTML=""
  for(let i=0 ; i<4;i++){
    let g = document.createElement("input")
    g.setAttribute("type","button")
    g.setAttribute("id","g_"+i)
    g.className="guesHide"
    gues.appendChild(g)
  } 
  tr++;
  bool=0
  pgiah=0
}
}
function f_show(){  
ans = document.getElementById("ans")
  for (let i = 0; i < 4; i++) {
    //  gues.innerHTML=""
    document.getElementById("ans").style.display="block"
     document.getElementById("g_"+i).style.backgroundColor= color1[i]
     setTimeout(f_inTheBegin,2000)
    } 
}
