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
