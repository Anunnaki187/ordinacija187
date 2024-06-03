let potvrdi = document.getElementById("potvrdi");
let kontakt = document.getElementById("kontakt");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");

potvrdi.addEventListener("click", () =>{
    if(input1.value != ""){
    alert("Uspešno ste poslali Vaš mail!");
    }
});
kontakt.addEventListener("click", () =>{
    if(input2.value != "" && input3.value != "" && input4.value != "" && input5.value != ""){
    alert("Uspešno ste poslali Vaš kontakt!");
    }
});