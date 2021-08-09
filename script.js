const chess =Array(8).fill(Array(8).fill(0)); 

let draw =()=>{
    let out ='';
    let m =0;
    for(let i in chess){
        let arr = chess[i];
        for(let k in arr){
            if(m%2==0){
            out +=`<div class="chess-block" data-x="${k}" data-y="${i}"></div>`;
            }
            else{
            out+=`<div class="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`
            }
            m++;
        }
        m++;
    }
    document.querySelector('#field').innerHTML = out;
    document.querySelectorAll('.chess-block').forEach(function(elem){
        elem.addEventListener('mouseover',(event)=>{
            let target = event.target;
            target.onclick = horse;
            }
        )
    })
}
draw();

function horse(){
    document.querySelectorAll('.chess-block.green').forEach(e=>e.classList.remove('green'));
    document.querySelectorAll('.chess-block.active').forEach(e=>e.classList.remove('active'));
    let x = +this.dataset.x;
    let y = +this.dataset.y;
    console.log(x+' '+y);
    this.classList.add('green');
    
    let possible=[[x+2,y+1],[x+2,y-1],[x-2,y+1],[x-2,y-1],[x+1,y+2],[x+1,y-2],[x-1,y+2],[x-1,y-2]]; 
    possible.forEach(([xx,yy])=>{
    if(xx>=0 && xx<8 && yy>=0 && yy<8){
        document.querySelector(`.chess-block[data-x="${xx}"][data-y="${yy}"]`).classList.add('active');
        }
    });
}
