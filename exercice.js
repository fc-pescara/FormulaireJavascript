const button = document.getElementById('button').value;

button.addEventListener('click',()=> Recuperer())

function Recuperer (){

const age = document.getElementById('age').value;
const adresse = document.getElementById('adresse').value;
const homme = document.getElementById('homme').value;
const email = document.getElementById('email').value;
const nom = document.getElementById('nom').value;
const button = document.getElementById('button').value;


alert('bonjour' +' '+nom+' '+' vous avez '+' '+age+' '+' et vous habitez à'+adresse+' '+
'votre adresse email est'+' '+email+' '+ 'vous etes un '+homme+' '+'bienvenue dans mon site cliquer sur ok')
}

///// FIN DE CONSTANTE ////

// CONSTA DE CHOIX DE SEXE ET LEVENEMENT QUI VA AVEC //
const Sexe  ={
    homme1 : homme,
    femme : femme,
}

button.addEventListener('click',() =>objecty())

const objecty= () => {
   const SelectSexe = [homme.value];
   
}


