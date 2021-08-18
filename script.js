let body = document.querySelector('body');
let result = document.querySelector('#result');

let clear = document.querySelector('#clear');
let history = document.querySelector('#history');
let equalTo = document.querySelector('#equalTo');
let delete_single_num = document.querySelector('#delete_single_num');

let Normal_btn = document.querySelectorAll('#Normal_btn');


let initial_value = "";

Normal_btn.forEach((Normal_btn, index)=>{
  Normal_btn.addEventListener('click', function(){
      let text = this.innerHTML;
      initial_value += text; 
      result.innerHTML = initial_value;
    });
});

/*equal to button action*/
equalTo.addEventListener('click', function(){
  if (result.innerHTML != "") {
    history.innerHTML = result.innerHTML;
    result.innerHTML = eval(result.innerHTML);
    initial_value = eval(result.innerHTML);
  }else{
    alert('please enter any Number');
  }
});

/*Mi Dark-Mode*/
const btntgl = document.getElementById('toggle');

btntgl.addEventListener('click', () => {
  document.body.classList.toggle('toggle');
  btntgl.classList.toggle('active');

  // Save Local Storage
  if(document.body.classList.contains('toggle')){
    localStorage.setItem('drk-mode', 'true');
  } else {
    localStorage.setItem('drk-mode', 'false');
  }
});

// Current Mode
if(localStorage.getItem('drk-mode') === 'true'){
  document.body.classList.add('toggle');
  btntgl.classList.add('active');
} else {
  document.body.classList.remove('toggle');
  btntgl.classList.remove('active');
}


/*clear all number*/
clear.addEventListener('click', function(){
  result.innerHTML = "";
  initial_value = "";
});

/*delete single number*/
delete_single_num.addEventListener('click', function(){
  result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);
  initial_value = result.innerHTML;
});
