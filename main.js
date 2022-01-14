const imgArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let contenutoRowPrinc = '';
let contenutoRowSec = '';
let elementActive = 0;                      


for(let ii=0; ii < imgArray.length; ii++){     
  contenutoRowPrinc +=`
  <div class=" myheight d_mynone" id="item-${ii}">
      <img id="img-active" class="item" src="${imgArray[ii]}"></img>     
      <div class="position-absolute text-white" id="title"><h3> ${title [ii]} </h3><p> ${text [ii]} </p> </div>
  </div>`;
}

document.getElementById("img_principale").innerHTML = contenutoRowPrinc ;           


for(let index=0; index< imgArray.length; index++){                                    
  contenutoRowSec +=`
  <div>
    <img id="img-active" class="item mystyle img-fluid" src="${imgArray[index]}"></img>
  </div>`;
}

document.getElementById("img_sec").innerHTML = contenutoRowSec;                    

document.getElementById("item-0").classList.add("d-block");



let itemActive = document.getElementById('item-'+elementActive);
itemActive.classList.add("d-block");

let frecciaUp = document.getElementById("arrow-up");
let frecciaDown = document.getElementById("arrow-down");



frecciaUp.addEventListener('click', function() {
  elementActive--;
  itemActive.classList.remove('d-block');
  itemActive = document.getElementById('item-'+elementActive);
  itemActive.classList.add('d-block');
  
});

frecciaDown.addEventListener('click', function(){
  elementActive++;
  itemActive.classList.remove('d-block');
  itemActive = document.getElementById('item-'+elementActive);
  itemActive.classList.add('d-block');
  
});