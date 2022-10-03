let contador=0;


const value= document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btns){
    btns.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrementa")) {
            contador--;
        } else if (styles.contains("incrementa")) {
            contador++;
        } else {
            contador = 0;
        }
    
        if (contador > 0) {
          value.style.color = "green";
        }
        if (contador < 0) {
          value.style.color = "red";
        }
        if (contador === 0) {
          value.style.color = 'rgb(187, 183, 183)';
        }
        value.textContent = contador;
      });
    });

