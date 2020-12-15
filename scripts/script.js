'Use strict';



const nav = document.querySelector('.nav_bar');
const dropdownItem = document.querySelector('#drop');
const dropdown = document.querySelector('.dropdown');
const items = document.querySelectorAll('.item');
const switchRound = document.querySelector('.switch_wrapper');
const rounds = document.querySelectorAll('.switch_round');
const textSw = document.querySelector('.slider_text');
const portfolioCont = document.querySelector('.portfolio_content');




dropdownItem.addEventListener('mouseenter', () =>{
    dropdown.style.display = 'block';
})

dropdownItem.addEventListener('mouseleave', () =>{
    dropdown.style.display = 'none';
})


function on(i=0){
        items[i].classList.add('active');
        setInterval(()=>{
            textSw.classList.add('change');
        },900)
        rounds[i].classList.add('change');
}

function off(){
    items.forEach((item)=>{
        item.classList.remove('active');
    })
    textSw.classList.remove('change');
    rounds.forEach((item)=>{
        item.classList.remove('change');
    });
}





switchRound.addEventListener('click',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('switch_round')){
        rounds.forEach((item,i)=>{
            if(item==target){
                off();
                on(i);
            }
        })
    }
})



console.log()


const wrapItems = document.querySelectorAll('.bg')
const descrs = document.querySelectorAll('.descr_block');
const box = document.querySelector('.content_box');

console.log(box);
console.log(wrapItems);


function add(i){
        wrapItems[i].classList.add('active');
        descrs[i].classList.add('active');
}

function clean(){
    wrapItems.forEach((item)=>{
        item.classList.remove('active')
    })
    descrs.forEach((item)=>{
        item.classList.remove('active');
    })
}


const wrap = document.querySelector('.wrapper_item')

box.addEventListener('mouseover',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('bg')){
        // console.log("hi");
        wrapItems.forEach((item,i)=>{
            if(item==target){
                add(i);
            }
        })
    }
})


box.addEventListener('mouseout',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('bg')){
        // console.log("hi");
        wrapItems.forEach((item,i)=>{
            if(item==target){
                clean();
            }
        })
    }
})