let btn = document.getElementById("btn");
const elements = ['#ff0000', '#008000', '#5733ff', '#ffff00',
'#ff0000', '#008000', '#5733ff', '#ffff00', 
'#ff0000', '#008000', '#5733ff', '#ffff00', 
'#ff0000', '#008000', '#5733ff', '#ffff00' ];
const shuffled = shuffleArray(elements);
let tbl = [];
let clock = document.getElementById("clock");
let imer = 5;
const defaul = ['🤖', '🤖', '🤖', '🤖', 
'🤖', '🤖', '🤖', '🤖', 
'🤖', '🤖', '🤖', '🤖', 
'🤖', '🤖', '🤖', '🤖'];


btn.addEventListener("click", function () {
    setTimeout(coutdown, 5000)
    
        
    for(let i=0;i<16;i++){
        
        tbl[i] = document.getElementById(i+1);
        tbl[i].innerHTML = shuffled[i] 
        
    function coutdown() {
        clock.innerHTML = imer;
        imer--;
        if (imer == 0) {
            imer = 5;
            tbl[i].innerHTML = defaul[i];
            alert('time out try to find the Yellow color!🤖')
        }
        
        }

    }})

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

    

