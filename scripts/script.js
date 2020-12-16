'Use strict';



const nav = document.querySelector('.nav_bar');
const dropdownItem = document.querySelector('#drop');
const dropdown = document.querySelector('.dropdown');
const items = document.querySelectorAll('.item');
const switchRound = document.querySelector('.switch_wrapper');
const rounds = document.querySelectorAll('.switch_round');
const textSw = document.querySelector('.slider_text');
const portfolioCont = document.querySelector('.portfolio_content');
const wrappers = document.querySelectorAll('.wrapper_item');
const wrapItems = document.querySelectorAll('.bg')
const descrs = document.querySelectorAll('.descr_block');
const box = document.querySelector('.content_box');
const upper = document.querySelector('.upper');




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
        wrapItems.forEach((item)=>{
            if(item==target){
                clean();
            }
        })
    }
})


document.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop >= 500){
        upper.classList.add('active');
    }if(document.documentElement.scrollTop >= 890){
        wrappers[0].classList.add('change');
        wrappers[3].classList.add('change');
    }if(document.documentElement.scrollTop >= 1320){
        wrappers[4].classList.add('change');
    } if(document.documentElement.scrollTop >= 1590){
        wrappers[1].classList.add('change');
    }if(document.documentElement.scrollTop >= 1800){
        wrappers[5].classList.add('change');
    }if(document.documentElement.scrollTop >= 2000){
        wrappers[2].classList.add('change');
    }if(document.documentElement.scrollTop >= 2140){
        wrappers[6].classList.add('change');
    }
})

document.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop >= 500){
        upper.classList.add('active');
    }if(document.documentElement.scrollTop < 500){
        upper.classList.remove('active');
    }
})

upper.addEventListener('click',()=>{
    let a = setInterval(()=>{
        document.documentElement.scrollTop = document.documentElement.scrollTop - 100
        if( document.documentElement.scrollTop === 0){
            clearInterval(a);
        }
    },10)
})



