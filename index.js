const circle = document.querySelector('.progress-ring-circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const input = document.querySelector('.value-input')
const animateCheckbox = document.getElementById('animate-toggle');
const hideCheckbox = document.getElementById('hide-toggle');

input.addEventListener('change', function(){
   setProgress(input.value);
})

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;



let setProgress =(percent)=>{
    const offest = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offest;
}

function setProgressAnimated(animate) {
  if (animate) {
    document.querySelector('.progress-ring').classList.add('progress-state-animated');
  } else {
    document.querySelector('.progress-ring').classList.remove('progress-state-animated');
  }
}

function setProgressHidden(hidden) {
  if (hidden) {
    document.querySelector('.progress-ring').classList.add('progress-state-hidden');
  } else {
    document.querySelector('.progress-ring').classList.remove('progress-state-hidden');
  }
}

animateCheckbox.addEventListener('change', () => {
    setProgressAnimated(animateCheckbox.checked);
  });
  
  hideCheckbox.addEventListener('change', () => {
    setProgressHidden(hideCheckbox.checked);
  });