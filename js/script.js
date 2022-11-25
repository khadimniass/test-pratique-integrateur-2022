/**************     DECLARATION DES VARIABLES      **************/
const facebook=document.getElementById('facebook');
const google=document.getElementById('google');
const submit = document.getElementById('submit');
const inputName =document.getElementById('nom');
const inputEmail =document.getElementById('email');
const inputPassword = document.getElementById('password')
const inputConfirmPassword = document.getElementById('password2')
const paragraphNom=document.getElementById('p-nom-empty')
const paragrapEmail=document.getElementById('p-email-empty')
const paragraphPassword=document.getElementById('p-pasword-empty')
const paragraphConfirmPassword=document.getElementById('p-confirm-pasword-empty')
var regexEmailVali=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regexSpecialCaracter = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g


/**************     DEFINITION DE MES EVENEMENTS      **************/
facebook.addEventListener("click",function(){
    confirm('voulez vous connecter avec facebook ?')
});
google.addEventListener("click",function(){
    confirm('voulez vous connecter avec goole ?')
});
//événement pour soumission du formulaire
submit.addEventListener('click',(e)=>{ //j'ai donné le 'e' en paramettre por récupérer l'évenement creer
    // console.log(e);
    if(inputName.value==''){
        e.preventDefault()
        paragraphNom.classList.add('d-block')
        inputName.classList.add('invalid')
    }if(inputEmail.value==''){
        e.preventDefault()
        paragrapEmail.classList.add('d-block')
        inputEmail.classList.add('invalid')
    }if(inputPassword.value==''){
        e.preventDefault()
        paragraphPassword.classList.add('d-block')
        inputPassword.classList.add('invalid')
    }if(inputConfirmPassword.value==''){
        e.preventDefault()
        paragraphConfirmPassword.classList.add('d-block')
        inputConfirmPassword.classList.add('invalid')
    }if(inputPassword.value!=inputConfirmPassword.value){
        e.preventDefault()
        paragraphConfirmPassword.classList.add('d-block')
        paragraphConfirmPassword.innerHTML="les deux mots de pass ne correspondent pas veillez revoir la saisie"
        inputPassword.classList.add('invalid')
        inputConfirmPassword.classList.add('invalid')
    }if (inputEmail.value!=''){
        if(!inputEmail.value.match(regexEmailVali)){
            e.preventDefault()
            paragrapEmail.classList.add('d-block')
            paragrapEmail.innerHTML="email invalid"
            inputEmail.classList.add('invalid')
        }
    }
    if(inputPassword.value!=''){
            if(inputPassword.value.match(regexSpecialCaracter)==null || inputPassword.value.length<10){
            e.preventDefault()
            paragraphPassword.classList.add('d-block')
            paragraphPassword.innerHTML = "le mot de passe doit contenir au moins 10 dont 1 caractère"
            inputPassword.classList.add('invalid')
        }
    }

    // alert('soumission du formulaire passée avec succés')
})

/**************   DECLARATION DE MES FONCTIONS    **************/
//cette fonction elle permet de faire 2 choses :changer le type du champ et la vue en claire
//J'ai aussi préféré de la donné des arguments pour pouvoir l'appelée 2 fois sur les 2 champs de type password
function showHiddenPassword(id_eye='eye',id_input='password'){
 var eye=document.getElementById(id_eye)
 eye.classList.toggle('bi-eye')
 eye.classList.toggle('bi-eye-slash')
 var input=document.getElementById(id_input)
    //ceci est une amélioration, optimale au lie de faire des if, else: une seule me suffit
    input.type = input.type != 'password' ? 'password' : 'text';
}