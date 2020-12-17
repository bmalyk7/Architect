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
const pictures = document.querySelectorAll('.pic');
const single = document.querySelector('.single');
const portfolio = document.querySelector('.portfolio');

let x = 0;

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




function add(arr,i){
    arr[i].classList.add('active');
}



function clean(arr){
    arr.forEach((item)=>{
        item.classList.remove('active')
    })
}


const wrap = document.querySelector('.wrapper_item')

box.addEventListener('mouseover',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('bg')){
        wrapItems.forEach((item,i)=>{
            if(item==target){
                add(wrapItems,i);
                add(descrs,i);
            }
        })
    }
})


box.addEventListener('mouseout',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('bg')){
        wrapItems.forEach((item)=>{
            if(item==target){
                clean(wrapItems);
                clean(descrs);
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





document.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop >= 80){
        pictures[1].classList.add('active');
    } if(document.documentElement.scrollTop >= 410){
        pictures[2].classList.add('active');
    } if(document.documentElement.scrollTop >= 700){
        pictures[3].classList.add('active');
    } if(document.documentElement.scrollTop >= 1000){
        pictures[4].classList.add('active');
    } if(document.documentElement.scrollTop >= 250){
        document.querySelector('.describe_box').classList.add('fixed');
    } if(document.documentElement.scrollTop <= 250){
        document.querySelector('.describe_box').classList.remove('fixed');
    }
})





function change (){
    if(x==0){
        portfolio.style.display = 'block';
        single.style.display = 'none';
    }if(x==1){
        portfolio.style.display = 'none';
        single.style.display = 'block';
    }
}


const menu = document.querySelector('menu');
const linkItem = document.querySelectorAll('.link_menu')
console.log(menu);


menu.addEventListener('click',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('first')){
        x=0;
        change();
        clean(linkItem)
        add(linkItem,0)
    } if(target&&target.classList.contains('second')){
        x=1;
        change();
        clean(linkItem)
        add(linkItem,1)
    }
})