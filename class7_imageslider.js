img_array = ['1.jpg' , '2.jpg' , 'wall.jpg', '12.jpg', '9.jpg']
img_length = img_array.length
console.log(img_length)
i=0

const demofunction=()=>{
    i=i%img_length

    //i = 0%5 = 0
    //i = 1%5 = 1
    //i = 2%5 = 2
    //i = 3%5 = 3
    //i = 4%5 = 4
    //i = 5%5 = 0
    // if(i>4){
    //     i=0
    // }
    document.querySelector('img').src = `img/${img_array[i]}`
    i++
}

let set = setInterval(demofunction, 2000)

document.getElementById('btnr').addEventListener('click',demofunction)
document.getElementById('btnl').addEventListener('click', ()=>{
    if(i<0){
        i=4;
    };

    document.querySelector('img').src = `img/${img_array[i]}`;
    i--;
})

document.querySelector('.container').addEventListener('mouseover', ()=>{
    clearInterval(set)
})

document.querySelector('.container').addEventListener('mouseout', ()=>{
    set = setInterval(demofunction, 2000)
})
