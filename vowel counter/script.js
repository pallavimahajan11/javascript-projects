const word = document.querySelector(".input-text"),
 btn = document.querySelector(".btn"),
 result = document.querySelector(".result");

 btn.addEventListener("click",vowel)

 function vowel(){
     let vowelcount = 0 ;
     let wordvalue = word.value.toLowerCase();
     for (let i = 0;i<wordvalue.length;i++)
     {
let letter = wordvalue[i];
if(letter.match(/([a,e,i,o,u])/)){
   vowelcount++;
}
     }
     result.innerHTML = `${word.value.toUpperCase()} has ${vowelcount} vowels`;
 }
 