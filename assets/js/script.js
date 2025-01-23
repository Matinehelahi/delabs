/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', function(){
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
};



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    Delay:300,
    //reset:true,//Animations repeat
});

sr.reveal(`.home__data,.footer`);

sr.reveal(`.word-1`,{Delay:1300,duration:1000,distance:'50px',origin:'left'});
sr.reveal(`.word-2`,{Delay:1300,duration:1500,distance:'50px',origin:'left'});
sr.reveal(`.word-3`,{Delay:1300,duration:2000,distance:'50px',origin:'left'});
sr.reveal(`.word-4`,{Delay:1300,duration:2500,distance:'50px',origin:'left'});
sr.reveal(`.word-5`,{Delay:1300,duration:3000,distance:'50px',origin:'left'});
sr.reveal(`.word-6`,{Delay:1300,duration:3500,distance:'50px',origin:'left'});
sr.reveal(`.home__icon`,{interval:6000,Delay:1300,duration:3000,origin:'bottom'});


sr.reveal(`.adventure__title,.adventure__name,.adventure__description,.adventure__button`,{Delay:1400,distance:'50px',origin:'bottom',distance:'100px'});
sr.reveal(`.libre__title,.libre__description,.button__libre`,{Delay:2000,distance:'50px',origin:'bottom',distance:'100px'});

sr.reveal(`.footer__box,.footer__title,.backersPartners__title,.people__title,.advisor__list-col,.game__name,.game__description,.game__button,.game__title,.game__social,.game__icon`,{Delay:1000,distance:'50px',origin:'bottom',distance:'100px'});
sr.reveal(`.people__list-col,.advisor__list-col`,{interval:120,Delay:1400});

/*=============== SCROLL Icon ANIMATION ===============*/
// const image = document.querySelector('.home__title');

// window.addEventListener('scroll',() =>{
//     const scrollY = window.scrollY;
//     image.style.transform = `translateY(-${scrollY / 5}px)`;
// });


/*=============== SCROLL Show navlog===============*/

ScrollReveal().reveal('.nav__logo',{
    distance:'50px',
    origin:'bottom',
    opacity:0,
    duration:1000,
    Delay:200,
    easing:'ease',
    reset:true,
});




