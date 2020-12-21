'Use strict';



const nav = document.querySelector('.nav_bar');
const dropdownItem = document.querySelector('.drop');
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
const test = document.querySelectorAll('.wrapper_items');
const hamburger = document.querySelector('.hamburger');
const spans = document.querySelectorAll('.stick');
const destWrap = document.querySelector('.dest_wrapper');

let a = 0;

dropdownItem.addEventListener('mouseenter', () =>{
    dropdown.style.display = 'block';
    test[3].classList.add('change');
})

dropdownItem.addEventListener('mouseleave', () =>{
    dropdown.style.display = 'none';
    test[3].classList.remove('change');;
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



function infinity(){
    
    setInterval(()=>{
        a++;
        off()
        on(a)
        if(a==3){
            a=-1        }
    },3000)
    }


console.log(switchRound)


infinity();



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
    if(document.documentElement.scrollTop >= 300){
        upper.classList.add('active');
    }if(document.documentElement.scrollTop >= 690){
        wrappers[0].classList.add('change');
        wrappers[3].classList.add('change');
    }if(document.documentElement.scrollTop >= 1120){
        wrappers[4].classList.add('change');
    } if(document.documentElement.scrollTop >= 1490){
        wrappers[1].classList.add('change');
    }if(document.documentElement.scrollTop >= 1600){
        wrappers[5].classList.add('change');
    }if(document.documentElement.scrollTop >= 1700){
        wrappers[2].classList.add('change');
    }if(document.documentElement.scrollTop >= 1890){
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
    if(document.documentElement.scrollTop >= 90){
        pictures[1].classList.add('active');
    } if(document.documentElement.scrollTop >= 510){
        pictures[2].classList.add('active');
    } if(document.documentElement.scrollTop >= 800){
        pictures[3].classList.add('active');
    } if(document.documentElement.scrollTop >= 1100){
        pictures[4].classList.add('active');
    }
     if(document.documentElement.scrollTop >= 250){
        document.querySelector('.describe_box').classList.add('sticky');
    } if(document.documentElement.scrollTop <= 250){
        document.querySelector('.describe_box').classList.remove('sticky');
    }
})



function change (){
    if(x==0){
        portfolio.style.display = 'block';
        single.style.display = 'none';
        humb();
        
    }if(x==1){
        portfolio.style.display = 'none';
        single.style.display = 'block';
        humb();
    }
}


const menu = document.querySelector('ul');
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




hamburger.addEventListener('click',()=>{
   humb();
})

function humb (){
    spans.forEach((item)=>{
        item.classList.toggle('active');
    })
    destWrap.classList.toggle('active');
}