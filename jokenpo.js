function jogar(){
    if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
            alert("Selecione uma opção")
    } else{
        //lógica principal: 1 - pedra ganha de tesoura e papel, tesoura corta papel, pedra amassa tesoura, papel enrola os dois(hehehhe)
        var sorteio = Math.floor(Math.random()*3)
        switch(sorteio){
            case 0:
                document.getElementById("pc").src="pedra1.jpeg"
                break
                
            case 1:
                document.getElementById("pc").src="papel1.jpeg"
                break
        
            case 2:  
                document.getElementById("pc").src="tesoura1.jpeg"
                break
        }
        var pontosJogador=0
        var pontosComputador=0
        //verificar vencedor ou declarar empate
        if((document.getElementById("pedra").checked == true && sorteio == 2 ) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura").checked == true && sorteio == 1))
        {
            document.getElementById("placar").innerHTML="Jogador venceu!"
                pontosJogador++
                         
            document.getElementById("placar").innerHTML="Computador venceu!"
                pontosComputador++

            document.getElementById("jogador-pontos").innerHTML= pontosJogador

            document.getElementById("computador-pontos").innerHTML= pontosComputador     
         } 
         else if ((document.getElementById("pedra").checked == true && sorteio == 0 ) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true && sorteio == 2))
         {
             document.getElementById("placar").innerHTML="Empate!"
         } 
         
        }       
             
    }

function resetar(){
    document.getElementById("pc").src="computador.jpg"
    document.getElementById("placar").innerHTML=""

}