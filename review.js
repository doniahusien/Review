let reviewDetials= document.getElementById("sen");
let image= document.getElementById("im");
let nam= document.getElementById("name");
let next= document.getElementById("next");
let pre= document.getElementById("pre");

let reviews =[
    {
        name:"Ali Ahmed",
        review:"thannnnks so muchhhh",
        img:"cut2 10.23.22 PM.jpeg",
    },
    {
        name:"Ahmed Ali",
        review:"sooo happy",
        img:"WhatsApp Image 2022-08-31 at 10.23.21 PM.jpeg",

    },
    {
        name:"Haneen Adel",
        review:"I'm very happy",
        img:"cut3.jpeg",

    },

]
let i=0;
let get=()=>{
    const item =reviews[i];
     image.src =item.img
     nam.textContent= item.name;
     reviewDetials.textContent= item.review
}
get();
next.addEventListener("click",()=>{
    i++;
    if(i>reviews.length-1) i=0;
    get();
}
)
pre.addEventListener("click",()=>{
    i--;
    if(i<0) i=reviews.length-1;
   get();
})

let none = document.getElementById("close")
let add = document.getElementById("popu");
let newdiv = document.getElementById("new");
add.addEventListener("click",()=>{
    newdiv.style.display="block";
});
none.addEventListener("click",()=>{
    newdiv.style.display="none";
});

let re=document.getElementById("re");
let n= document.getElementById("n");
let url = document.getElementById("url")

let save = document.getElementById("add");
save.addEventListener("click",()=>{
    reviews.push({name:n.value,
        review:re.value,
        img:url.value,
    });
})

