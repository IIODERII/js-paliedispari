const paliBtn = document.getElementById('palBtn');

paliBtn.addEventListener('click', function(){
    const userWord = document.getElementById('word').value;
    const msg = document.querySelector('#pali-side .alert');

    messageReset(msg);

    if(isPalindroma(userWord)){
        msg.classList.add('bg-success');
        msg.innerHTML = '&check; Sì ' + userWord +' è una parola palindroma!!'
    }else{
        msg.classList.add('bg-danger');
        msg.innerHTML = '&cross; No ' + userWord +' non è una parola palindroma!!'
    }
    msg.classList.remove('d-none')
    
})

const dispBtn = document.getElementById('dispBtn');

dispBtn.addEventListener('click', function(){
    const userNumber = document.getElementById('numb').value;
    const msg = document.querySelector('#odd-even-side .alert');

    console.log(userNumber);
    console.log(isBetween1and5(userNumber));
})