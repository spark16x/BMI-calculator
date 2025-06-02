let form=document.querySelector('form'),
result=document.querySelector('.result');

form.addEventListener('submit',(ev)=>{
  ev.preventDefault();
  
  let w=document.querySelector('.w').value,
  h=document.querySelector('.h').value,
  bmi=w/(Math.pow(h/100,2));
  bmi=bmi.toFixed(2);
  if (bmi <= 18) {
    
  } else {
    
  }
  console.log(bmi)
  
})
