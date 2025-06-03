let form=document.querySelector('form'),
result=document.querySelector('.result');

function back() {
result.hidden = true;
form.hidden = false;
}

form.addEventListener('submit',(ev)=>{
  ev.preventDefault();
  
  let w=document.querySelector('.w').value,
  h=document.querySelector('.h').value,
  bmi=w/(Math.pow(h/100,2)),remark,color;
  bmi=bmi.toFixed(2);
  
  if (bmi <= 18.5) {
    remark='Your underweigt';
    color='yellow';
  } else  if (bmi >= 18.5 && bmi <= 24.9){
    remark= 'Your normal';
    color='green';
  }
  else if (bmi >= 25 && bmi <= 29.9) {
  remark='Your Overweigt';
  color='orange';
}else{
  remark='Your Obesity';
  color='red';
}
result.innerHTML=`<div class="wegth">Wegth : ${w} kg</div> 
<div class = "heigth" > Height: ${h} cm</div> 
<div class = "BMi" > BMI: ${bmi} </div> 
<div class = "remark" style="color:${color}" > Remark: ${remark} </div>
  <button onclick="back() " >Back</button>`;
  result.hidden=false;
  form.hidden=true;
  console.log(bmi)
  
})
