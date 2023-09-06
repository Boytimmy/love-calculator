function good(){
  lovername0 = firstinput.value
  lovername = secondinput.value
  var calc = Math.random()*100;
  var lover = `${Math.round(calc)}%`
  if(firstinput.value !="" && secondinput.value !=""){
    console.log('good')
    firstinput.value=""
    secondinput.value=""
  
   if ( calc >20 && calc ) {
    disp.innerHTML = `<h4>${lovername0} and ${lovername} is not match</h4> 
          <p>${lover}</p> 
          <h5>No blame oo</h5>`
  }
  if(calc < 40){
    disp.innerHTML = `<h2>${lovername0} and ${lovername} is not match</h2>
    <h4>${lover}</h4>
    <h5>I dey tell you no try ham</h5>`
  }
   if (calc >=40 && calc < 45){
    disp.innerHTML = `<h2>${lovername0} and ${lovername} is not match</h2>
    <h4>${lover}</h4>
    <h5>Ahhh  i tell you oo</h5>`
  }
  if(calc >=45 && calc < 49){
   disp.innerHTML = `<h2>${lovername0} and ${lovername} is not match</h2>
   <h4>${lover}</h4>
    <h5>God go do your own</h5>`
  }
   if (calc >=50 && calc< 59){
    disp.innerHTML = `<h2>${lovername0} and ${lovername} is match</h2>
    <h4>${lover}</h4>
    <h5>Enjoy</h5>`
  }
   if(calc >=60 && calc < 69){
    disp.innerHTML = `<h2>${lovername0} and ${lovername} is match</h2>
    <h4>${lover}</h4>
    <h5>Wow! Una go build good family oo</h5>`
  } if (calc >=70 && calc <=100){
    disp.innerHTML = `<h2>${lovername0} and ${lovername} is match</h2>
    <h4>${lover}</h4>
    <h5>You don see your rib</h5>`
  } 
} 
else{
    // alert('Input must not be empty')
    disp.innerHTML = `<h1 style="margin-top:30px; padding-top:20px;">Enter player name</h1>`
  }
}
