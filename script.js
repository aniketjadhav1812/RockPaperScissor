const arr = ["rock","paper","scissors"];
const info = document.querySelector("#info");
let leftFist = document.querySelector('#fist-left');
let rightFist = document.querySelector('#fist-right');
let score = {
    com : 0,
    you : 0,
}
const start = () => {
    document.querySelector('#start').style.display = 'none';
}
const replay = () =>{
    info.style.display = 'none';
    leftFist.innerHTML = '<i  class="fa-regular fa-hand-back-fist"></i>';
    rightFist.innerHTML = '<i class="fa-regular fa-hand-back-fist fa-flip-horizontal"></i>';
    leftFist.style.animation = '';
    rightFist.style.animation = '';
    
}

const checkwin = (option) =>{
    const com = Math.floor((Math.random()*100)%3);
    if(arr[com]=== option){
       info.innerHTML = `<h1 id="result">Its Draw..!</h1>
                    <div id="left">
                        <h1>Sco</h1>
                        <h2>Computer : ${score.com}</h2>
                    </div>
                    <div id="right">
                        <h1>re</h1>
                        <h2>You : ${score.you}</h2>
                    </div>
                    <button id="play-again" onclick="replay()">Play Again</button>`
        leftFist.style.animation = 'none';
        rightFist.style.animation = 'none';
    }
    else if(((arr[com]=== "rock")&&(option === "paper")) ||((arr[com]==='paper')&&(option === 'scissors'))||((arr[com]=== 'scissors')&&(option==='rock'))){
        score.you++;
        info.innerHTML = `<h1 id="result">You Won..!</h1>
                    <div id="left">
                        <h1>Sco</h1>
                        <h2>Computer : ${score.com}</h2>
                    </div>
                    <div id="right">
                        <h1>re</h1>
                        <h2>You : ${score.you}</h2>
                    </div>
                    <button id="play-again" onclick="replay()">Play Again</button>`
        leftFist.style.animation = 'none';
        rightFist.style.animation = 'none';
    }
    else if(((option=== "rock")&&(arr[com] === "paper")) ||((option==='paper')&&(arr[com] === 'scissors'))||((option=== 'scissors')&&(arr[com]==='rock'))){
        score.com++;
        info.innerHTML = `<h1 id="result">Computer Won..!</h1>
                    <div id="left">
                        <h1>Sco</h1>
                        <h2>Computer : ${score.com}</h2>
                    </div>
                    <div id="right">
                        <h1>re</h1>
                        <h2>You : ${score.you}</h2>
                    </div>
                    <button id="play-again" onclick="replay()">Play Again</button>`
        leftFist.style.animation = 'none';
        rightFist.style.animation = 'none';
    }
    
    changeI(option , com);
    gsap.to(info , {
        display:'flex',
        delay: 1.5,
    })
    gsap.to( document.getElementById('play-again') , {
    bottom: "120px",
    delay: 2.5,

});
    gsap.from( document.getElementById('result'),{
    top: "-200px",
    delay: 2.5,    
})
    gsap.to(document.getElementById('left'),{
    left: 0,
    delay: 2.0,
})
    gsap.to(document.getElementById('right'),{
    right: 0,
    delay: 2.0,
})
    
}

const  changeI = (option , com) =>{
    if (option === 'paper') {
        rightFist.innerHTML = '<i class="fa-regular fa-hand fa-flip-horizontal"></i>';

    }
    else if (option === 'scissors') {
        rightFist.innerHTML = '<i id="scissors" class="fa-regular fa-hand-peace fa-flip-horizontal">';
    }

    if (com === 1) {
        leftFist.innerHTML = '<i class="fa-regular fa-hand"></i>';
    }
    else if (com === 2) {
        leftFist.innerHTML = '<i id="scissors" class="fa-regular fa-hand-peace">'
    }

}