
function addTask(something){

  if (something == 'todo') {
    columndiv = document.getElementById('SaareTodoHere');
  } else if (something == 'progress') {
    columndiv = document.getElementById('SaareProgessHere');
  } else {
    columndiv = document.getElementById('SaareReviewHere');
  }
  const taskname=prompt("Enter u task:");

  if(taskname){
    //create a div-->add taskName to it,ID, addeventlistner-->append it to empty div(in html) in column div
    const taskdiv=document.createElement('div');
    taskdiv.id=Date.now();
    taskdiv.textContent=taskname;
    taskdiv.draggable=true;
    taskdiv.addEventListener('dragstart',(e)=>{
      e.dataTransfer.setData('text',e.target.id);//storing tasdiv id(to identify)-->say in event obj(assumne in big block,globally avialble between a drag and drop)
     
    })

    columndiv.appendChild(taskdiv);

  }
}


//this is callback fxn,used with evenlistner, u ascept event obj(js obj) from browser
function handleDragOver(e){
  e.preventDefault();
}

function handledrop(e){
  e.preventDefault();
  const taskid=e.dataTransfer.getData('text'); //basically in drag and drop(we share some data,say ID-->use that info to drag and drop)
  taskdiv=document.getElementById(taskid);
  //e.target: mean event(koi bhi,drag,drop,etc)-->jisne start kiya ho
  //.closest('we provide class name')-->return closest div with that clss name in Dom
  let divInsidewhichweDrop=e.target.closest('.emptydiv'); 
  if(divInsidewhichweDrop){
    divInsidewhichweDrop.appendChild(taskdiv);
  }

}


//then adding this 2 above fxn to "emptydiv(id,see html file)'s eventlistner"
document.querySelectorAll('.emptydiv').forEach((divelm)=>{
    divelm.addEventListener('dragover',handleDragOver);
    divelm.addEventListener('drop',handledrop);
})