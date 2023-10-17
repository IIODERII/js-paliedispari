const paliBtn = document.getElementById('palBtn');
const dispBtn = document.getElementById('dispBtn');

paliBtn.addEventListener('click', function(){
    const userWord = document.getElementById('word').value;
    const msg = document.querySelector('#pali-side .alert');

    msg.className = 'alert d-none p-4 fw-bold mt-3';
    if(isPalindroma(userWord)){
        msg.classList.add('bg-success');
        msg.innerHTML = '&check; Sì ' + userWord +' è una parola palindroma!!'
    }else{
        msg.classList.add('bg-danger');
        msg.innerHTML = '&cross; No ' + userWord +' non è una parola palindroma!!'
    }
    msg.classList.remove('d-none')
    
})