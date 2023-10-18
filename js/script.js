(function oderPalindromi(){
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
}());

(function oderOddOrEven(){
    const dispBtn = document.getElementById('dispBtn');
    const data = document.createElement('div');
    
    dispBtn.addEventListener('click', function(){
        const userNumber = parseInt(document.getElementById('numb').value);
        const msg = document.querySelector('#odd-even-side .alert');
        const userSelect =parseInt(document.getElementById('paridispari').value);
    
        const computerNumber = getRndInteger(1,5) ;
        const pari = 0;
        const dispari = 1;
        let somma ;
    
        messageReset(msg);
    
        if(isBetween1and5(userNumber)){
            
            somma = userNumber + computerNumber;
    
            if(userSelect === pari && isEven(somma)){
                msg.classList.add('bg-success');
                msg.innerHTML = 'Complimenti hai vinto!!' ;
            }else if(userSelect === dispari && isEven(somma)){
                msg.classList.add('bg-danger');
                msg.innerHTML = 'Peccato hai perso :(' ;
            }else if(userSelect === pari && !isEven(somma)){
                msg.classList.add('bg-danger');
                msg.innerHTML = 'Peccato hai perso :(' ;
            }else if(userSelect === dispari && !isEven(somma)){
                msg.classList.add('bg-success');
                msg.innerHTML = 'Complimenti hai vinto!!' ;
            }
    
            data.className= 'fs-2 fw-bold py-4'
            data.innerHTML = userNumber + '+' + computerNumber + '=' + somma ;
            document.getElementById('message-container').prepend(data);
        }else{
            msg.classList.add('bg-warning')
            msg.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> '+ userNumber + ' non è compreso tra 1 e 5 <i class="fa-solid fa-triangle-exclamation"></i>'
        }
    
        msg.classList.remove('d-none');
    })
}());
