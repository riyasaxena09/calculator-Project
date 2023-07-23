let input1=document.getElementById('t');

let string="";
const buttons=document.querySelectorAll('button');

Array.from(buttons).forEach((b)=>{
  b.addEventListener('click',(e)=>{
    e.preventDefault();
  if(e.target.innerHTML=='='){
    string=eval(string)
    
    input1.value=string;
    
  }
    else if(e.target.innerHTML=='C'){
      string="";
        input1.value=string;
    }
   else{
     string=string+e.target.innerHTML;
    
     input1.value=string;
   }
    

  })
})