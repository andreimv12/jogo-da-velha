//dados iniciais
const quadro = {
    a1:"",a2:"",a3:"",
    b1:"",b2:"",b3:"",
    c1:"",c2:"",c3:""
};
let vez = 'O';
let infoWinner = "";
let playng = true;
let turn = "x";
let rotate = 0;
//eventos



let restart = document.querySelector("button");
let infoPlayer = document.querySelector(".info-player").innerHTML = turn;
let tabuleiro = document.querySelectorAll(".table div");
let infoPlayerWinner = document.querySelector(".info-plyer-winner");
let champion = document.querySelector(".info-plyer-winner span");

tabuleiro.forEach((div)=>{
    
    div.addEventListener("click",()=>{
        let id = div.getAttribute("id");
        let area = document.querySelector(`#${id}`);
        
        turnos(id);
        alternarPlayer(id);
        
        marcar(area,id);
       
        reset(area,id);
        winner();
        console.log(quadro);
    });
    
   
});

//funções
function marcar(area,id){
    if(quadro[id] == ""){
        quadro[id] = vez;

        if(playng == true){
            area.innerHTML = quadro[id];
        };
       
    }
};

function alternarPlayer(id){
    if(playng == true){
        if(quadro[id] == ""){
            if(vez == 'O'){
                vez = 'X';
            }else{
                vez = 'O';
            };
        }
    };


};

function turnos(id){
    document.querySelector(".info-player").innerHTML = turn;
    let areaTurn = document.querySelector(".info-player");
    
    if(playng == true){
        if(quadro[id] == ""){
        vez == 'X' ? turn = 'X': turn = 'O';
        areaTurn.innerHTML = turn;
        };
    };
};

function reset(area,id){
    restart.addEventListener("click",()=>{
    quadro[id] = "";
    area.innerHTML = quadro[id];
    infoPlayerWinner.style.color = "#333";
    playng = true;
    });
};

function winner(){
    if(quadro.a1 == "X" && quadro.a2 == "X" && quadro.a3 == "X"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "X";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.b1 == "X" && quadro.b2 == "X" && quadro.b3 == "X"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "X";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform =`rotate(${rotate}deg)`;
        });
    };

    if(quadro.c1 == "X" && quadro.c2 == "X" && quadro.c3 == "X"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "X";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.a1 == "X" && quadro.b1 == "X" && quadro.c1 == "X"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "X";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform =`rotate(${rotate}deg)`;
        });
    };

    if(quadro.a2 == "X" && quadro.b2 == "X" && quadro.c2 == "X"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "X";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.a3 == "X" && quadro.b3 == "X" && quadro.c3 == "X"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "X";
        playng = false;
    };

    if(quadro.a1 == "X" && quadro.b2 == "X" && quadro.c3 == "X"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "X";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.a3 == "X" && quadro.b2 == "X" && quadro.c1 == "X"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "X";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    // the "O" winner when:

    if(quadro.a1 == "O" && quadro.a2 == "O" && quadro.a3 == "O"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "O";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.b1 == "O" && quadro.b2 == "O" && quadro.b3 == "O"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "O";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.c1 == "O" && quadro.c2 == "O" && quadro.c3 == "O"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "O";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.a1 == "O" && quadro.b1 == "O" && quadro.c1 == "O"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "O";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.a2 == "O" && quadro.b2 == "O" && quadro.c2 == "O"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "O";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.a3 == "O" && quadro.b3 == "O" && quadro.c3 == "O"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "O";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.a1 == "O" && quadro.b2 == "O" && quadro.c3 == "O"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "O";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };

    if(quadro.a3 == "O" && quadro.b2 == "O" && quadro.c1 == "O"){
        rotate = rotate += 360;
        infoPlayerWinner.style.color = "gold";
        champion.innerHTML = "O";
        playng = false;
        tabuleiro.forEach((div)=>{
            div.style.transform = `rotate(${rotate}deg)`;
        });
    };
}






