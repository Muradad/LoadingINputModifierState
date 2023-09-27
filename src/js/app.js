const password = document.querySelector('#password');
const warning = document.querySelector('#warning');
 
password.addEventListener('keyup', (e) => {
if(e.getModifierState("CapsLock")){
warning.style.display = "block";
}else{
    warning.style.display = "none";
}
})

// getModifierState funksiyasi klaviatura düymələrinin bir neçə əsas funksiyasını idarə etmək üçün istifadə edilən
// JavaScript funksiyasıdır. Xüsusilə, bu funksiya Caps Lock, Shift, Ctrl, Alt və s. kimi dəyişdirici düymələrin 
//(dəyişdirici düymələrin) vəziyyətini müəyyən etmək üçün istifadə olunur.
