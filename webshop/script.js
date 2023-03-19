const output=document.getElementById("output")
const frem=document.getElementById("frem")

const grønbuks={ 
    img:'<img src="img/grøn.jpeg" alt="1">',
    navn:"Grønne bukser", 
    pris:250 + " kr",
    beskrivelse:"gode grønne bukser der kan bruges til en hver lejlighed",
    
    viselementer: function(){ 
        output.innerHTML=this.img+this.navn+this.pris+this.beskrivelse
    }
}
grønbuks.viselementer();

const hvidbuks={ 
    img:'<img src="img/hvid.jpeg" alt="1">',
    navn:"Hvide bukser", 
    pris: 300 + " kr",
    beskrivelse: "gode hvide bukser der kan bruges til en hver lejlighed",
    viselementer: function(){ 
        output.innerHTML=this.img+this.navn+this.pris+this.beskrivelse
    }
}
hvidbuks.viselementer();

const sortbuks={ 
    img:'<img src="img/sort.jpeg" alt="1">',
    navn:"Sorte bukser", 
    pris: 600 + " kr",
    beskrivelse: "gode sort bukser der kan bruges til en hver lejlighed",
    viselementer: function(){ 
        output.innerHTML=this.img+this.navn+this.pris+this.beskrivelse
    }
}
sortbuks.viselementer();


const bukser=[grønbuks,hvidbuks,sortbuks];

let vistnu=0;
output.innerHTML=bukser[vistnu];

frem.addEventListener("click",næstebuks)

function næstebuks(){
    vistnu++;
    output.innerHTML=bukser[vistnu];
}