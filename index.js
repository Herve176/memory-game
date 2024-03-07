let btn = document.getElementById("btn");
const elements = ['#ff0000', '#008000', '#5733ff', '#ffff00',
'#ff0000', '#008000', '#5733ff', '#ffff00', 
'#ff0000', '#008000', '#5733ff', '#ffff00', 
'#ff0000', '#008000', '#5733ff', '#ffff00' ];
const rai = shuffleArray(elements)
const shuffled = shuffleArray(rai);
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
        tbl[i].style.backgroundColor = shuffled[i];
        
        
    function coutdown() {
        clock.innerHTML = imer;
        imer--;
        if (imer == 0) {
            imer = 5;
            
            alert('time out try to find the Yellow color!🤖')
        }
        
        }

    }
    
})
for (let i = 0; i < 16; i++) {
    tbl[i].innerHTML = defaul[i];
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

    

