function time(){
    let hour =Number(document.getElementById("hour") .value);
    let answer;

    if(document.getElementById("htm").checked){
        answer = Number(hour)*60;  
        document.getElementById("answer").innerHTML= hour+ " hour =" + answer + " minutes";
    } 
    if(document.getElementById("hts").checked){
        answer = Number(hour)*60*60;  
        document.getElementById("answer").innerHTML= hour+ " hour =" + answer + " seconds";
    } 

}




