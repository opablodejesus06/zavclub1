/*==========================================
AOS
==========================================*/

AOS.init({
    duration: 900,
    once: true,
    offset: 80
});


/*==========================================
LENIS
==========================================*/

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2
});

function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


/*==========================================
HEADER
==========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});


/*==========================================
BOTÃO TOPO
==========================================*/

const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        scrollBtn.classList.add("active");

    }else{

        scrollBtn.classList.remove("active");

    }

});

scrollBtn.onclick=()=>{

    lenis.scrollTo(0);

};


/*==========================================
CURSOR
==========================================*/

const cursor=document.querySelector(".cursor");
const blur=document.querySelector(".cursor-blur");

window.addEventListener("mousemove",(e)=>{

    gsap.to(cursor,{
        x:e.clientX,
        y:e.clientY,
        duration:.15
    });

    gsap.to(blur,{
        x:e.clientX,
        y:e.clientY,
        duration:.6
    });

});


/*==========================================
LINKS
==========================================*/

document.querySelectorAll("a[href^='#']").forEach(link=>{

    link.addEventListener("click",(e)=>{

        const id=link.getAttribute("href");

        if(id==="#") return;

        e.preventDefault();

        lenis.scrollTo(id);

    });

});


/*==========================================
CONTADORES
==========================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const increment=target/120;

function update(){

current+=increment;

if(current<target){

counter.innerText=Math.floor(current).toLocaleString();

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString()+"+";

}

}

update();

counterObserver.unobserve(counter);

});

},{
threshold:.6
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==========================================
GSAP HERO
==========================================*/

gsap.from(".hero-text",{

    opacity:0,

    y:80,

    duration:1,

    ease:"power3.out"

});

gsap.from(".glass-card",{

    opacity:0,

    scale:.8,

    rotate:8,

    duration:1.2,

    delay:.2,

    ease:"back.out(1.7)"

});


/*==========================================
PARALLAX HERO
==========================================*/

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

gsap.to(".glass-card",{

x:x,

y:y,

rotationY:-x,

rotationX:y,

duration:.7

});

});


/*==========================================
CARDS 3D
==========================================*/

document.querySelectorAll(".link-card,.feature-card,.shop-card,.testimonial-card,.number-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


/*==========================================
GALERIA
==========================================*/

gsap.utils.toArray(".gallery-item").forEach(item=>{

gsap.from(item,{

scrollTrigger:{

trigger:item,

start:"top 85%"

},

opacity:0,

y:80,

duration:1,

ease:"power3.out"

});

});


/*==========================================
FEATURES
==========================================*/

gsap.utils.toArray(".feature-card").forEach((card,index)=>{

gsap.from(card,{

scrollTrigger:{

trigger:card,

start:"top 85%"

},

opacity:0,

y:60,

delay:index*.08,

duration:.8

});

});


/*==========================================
FLOATING ICONS
==========================================*/

gsap.to(".glass-icons i",{

y:-10,

duration:1.2,

repeat:-1,

yoyo:true,

stagger:.15,

ease:"power1.inOut"

});


/*==========================================
PULSE WHATSAPP
==========================================*/

gsap.to(".whatsapp",{

scale:1.08,

repeat:-1,

yoyo:true,

duration:.8,

ease:"power1.inOut"

});


/*==========================================
CTA
==========================================*/

gsap.from(".cta-box",{

scrollTrigger:{

trigger:".cta",

start:"top 75%"

},

opacity:0,

scale:.9,

duration:1

});


/*==========================================
FOOTER
==========================================*/

gsap.from(".footer-container",{

scrollTrigger:{

trigger:".footer",

start:"top 85%"

},

opacity:0,

y:60,

duration:1

});


/*==========================================
MENU ATIVO
==========================================*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-200;

const height=section.offsetHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*==========================================
PRELOAD IMAGENS
==========================================*/

window.addEventListener("load",()=>{

document.querySelectorAll("img").forEach(img=>{

const preload=new Image();

preload.src=img.src;

});

});


/*==========================================
REVEAL DOS TÍTULOS
==========================================*/

gsap.utils.toArray(".section-title").forEach(title=>{

gsap.from(title,{

scrollTrigger:{

trigger:title,

start:"top 85%"

},

opacity:0,

y:50,

duration:.9

});

});


/*==========================================
EASTER EGG
==========================================*/

console.log("%cZAVNAI","font-size:40px;font-weight:bold;color:#ff8c1a;");
console.log("%cPowered by PowerCell Soluções Digitais","font-size:16px;color:white;");