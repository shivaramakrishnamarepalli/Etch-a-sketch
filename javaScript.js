let n=16;
let curColor="black";
let mode='colorMode';
 
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
 
 
 
const gridCont=document.querySelector('#grid');
const buttons=document.querySelector("#buttons");
const colorPicker=document.getElementById('colorPicker');
const clear=document.querySelector("#clear");
const button=document.querySelector('button');
 
const colorMode=document.querySelector("#colorMode");
const rainbowMode=document.querySelector("#rainbowMode");
const eraser=document.querySelector("#eraser");
const greyScale =document.querySelector('#greyScale');
 
 
colorPicker.oninput=(e)=>{setCurrentColor(e.target.value);setCurrentMode("colorMode");}
colorMode.onclick=(e)=>{setCurrentMode(e.target.id);  }
eraser.onclick=(e)=>{setCurrentMode(e.target.id);  }
rainbowMode.onclick=(e)=>{setCurrentMode(e.target.id);  }
greyScale.onclick=(e)=>{setCurrentMode(e.target.id);}
 
 
gridCont.onmouseover=(e)=>changeColor(e);
gridCont.onmousedown=(e)=>changeColor(e);//if i use onlick this is also reacting to mouse up and changig color of grid completely.
clear.onclick=()=>{grid.innerHTML='';createBox(n);}
 
// transform
const trans = document.querySelectorAll('button');
trans.forEach(button => button.addEventListener('mouseover',addTransition) );
 
const tend = document.querySelectorAll('button');
tend.forEach(button => button.addEventListener('mouseout',removeTransition) );
tend.forEach(button => button.addEventListener('click',removeTransition) );
 
function removeTransition(e)
{
  this.classList.remove('onpoint');
}
function addTransition(e)
{
  if(e.target.id==mode) return;
  this.classList.add('onpoint');
}
 
 
createBox(n);
function createBox(num)
{
  n=num;//for further usage
  let col=[];
  gridCont.append(col);
  for(i=0;i<num;i++)
  {
    col[i]=document.createElement('div');
    col[i].classList.add("coloumn");
    gridCont.append(col[i]);
    let row=[];
    for(j=0;j<num;j++)
    {    
      row[j]=document.createElement('div');
      row[j].classList.add("row");
      col[i].append(row[j]);
    }
  }
}
 
 
 
function changeColor(e){
  if (e.type === 'mouseover' && !mouseDown) return;
  if(mode=="colorMode")
  {
    e.target.style.backgroundColor=curColor;
  }
  if(mode=='rainbowMode')
  {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  }
  if(mode=='eraser')
  {
    e.target.style.backgroundColor=`rgb(248, 221, 221)`;
  }
  if(mode=='greyScale')
  {
    increment(e);
  }
}
 
function setCurrentColor(newColor)
{
  curColor=newColor;
}
 
 
setCurrentMode(mode);
function setCurrentMode(newMode) {
  if (mode === 'rainbowMode') {
    rainbowMode.classList.remove('active')
  } else if (mode === 'colorMode') {
    colorMode.classList.remove('active')
  } else if (mode === 'eraser') {
    eraser.classList.remove('active')
  }  else if(mode === 'greyScale'){
    greyScale.classList.remove('active');
  }
  mode=newMode;
  if (newMode === 'rainbowMode') {
    rainbowMode.classList.add('active')
  } else if (newMode === 'colorMode') {
    colorMode.classList.add('active')
  } else if (newMode === 'eraser') {
    eraser.classList.add('active')
  } else if (mode==='greyScale'){
    greyScale.classList.add('active');
  }
}
 
 



function increment(e)
{
  if(!e.target.style.backgroundColor)
  {
    e.target.style.backgroundColor=`RGBA(0,0,0,0.0)`;
  }
  else{
    const color=e.target.style.backgroundColor;
    const opacity = parseFloat(e.target.style.backgroundColor.slice(14));
    e.target.style.backgroundColor = `RGBA(0, 0, 0, ${opacity + 0.1})`;
  }

}