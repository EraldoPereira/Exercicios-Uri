let participantes = [{nome:"Eraldo", amigo:"", status: false}, 
                    {nome:"Maria", amigo:"",   status: false},
                    {nome:"Vanessa", amigo:"", status: false},
                    {nome:"Gustavo", amigo:"", status: false}, 
                    {nome:"Ana", amigo:"", status: false}, 
                    {nome:"Matheus", amigo:"", status: false}, ]

 console.log( participantes)


function sortear(){
    qtd = participantes.length
    
    let i = 0
    while( qtd > i ){
        sorteado = parseInt(Math.random(qtd) * qtd)
        console.log("Sorteado: " + sorteado)
        if(participantes[sorteado].amigo === ""){
            amigo = parseInt(Math.random(qtd) * qtd)
            console.log("Amigo: " + amigo)
            if (amigo != sorteado && !participantes[amigo].status){
                participantes[sorteado].amigo = participantes[amigo].nome
                participantes[amigo].status = true
                i++
            }
        }

    }

}

function mostar(){
    for(let i = 0; participantes.length > i; i++){
        console.log(participantes[i].nome + " Seu amigo secreto é " + participantes[i].amigo  )
    }
}



//for(let i = 0; 3 > i; i++){
    sortear()
    console.log("----------------------------------------------")
    mostar()
//}