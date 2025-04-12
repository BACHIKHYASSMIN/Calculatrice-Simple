let  Globalnumber=0;
let sub=0;
let opera=0;
let premiervalue=0;
let deuxiemevalue=0;
let enattent=false;
window.resizeTo(document.body.scrollWidth, document.body.scrollHeight);
function printOnscreen(){
    if (opera==1){
        Globalnumber=premiervalue+deuxiemevalue;
        const value=document.getElementById("Resultat");
        value.textContent = premiervalue.toString() + ' + ' + deuxiemevalue.toString() + ' = ' + Globalnumber;
        premiervalue=0;
        deuxiemevalue=0;
        enattent=false;
    }
    else if (opera==2){
        Globalnumber=premiervalue-deuxiemevalue;
        const value=document.getElementById("Resultat");
        value.textContent = premiervalue.toString() + ' - ' + deuxiemevalue.toString() + ' = ' + Globalnumber;
        premiervalue=0;
        deuxiemevalue=0;
        enattent=false;
    }
    else if(opera==3){
        Globalnumber=premiervalue*deuxiemevalue;
        const value=document.getElementById("Resultat");
        value.textContent = premiervalue.toString() + ' x ' + deuxiemevalue.toString() + ' = ' + Globalnumber;

        premiervalue=0;
        deuxiemevalue=0;
        enattent=false;
    }
    else if (opera==4) {
        Globalnumber=premiervalue / deuxiemevalue;
        const value=document.getElementById("Resultat");
        value.textContent = premiervalue.toString() + ' ÷ ' + deuxiemevalue.toString() + ' = ' + Globalnumber;
        premiervalue=0;
        deuxiemevalue=0;
        enattent=false;
    }
  
}

function printValue(number){
    
    if(!enattent){
        premiervalue += number;
    }else{
        deuxiemevalue += number;
    }
    const value=document.getElementById("Resultat");
    value.textContent=number;
}


function operation(op){
    if(premiervalue != 0){
        opera=op;
        enattent=true;
    }
}

function Clear(){
    Globalnumber =0;
    const value=document.getElementById("Resultat");
    value.textContent=Globalnumber;
}

