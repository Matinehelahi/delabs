/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
};



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    Delay: 300,
    //reset:true,//Animations repeat
});

sr.reveal(`.home__data,.footer`);

sr.reveal(`.word-1`, { Delay: 1300, duration: 1000, distance: '50px', origin: 'left' });
sr.reveal(`.word-2`, { Delay: 1300, duration: 1500, distance: '50px', origin: 'left' });
sr.reveal(`.word-3`, { Delay: 1300, duration: 2000, distance: '50px', origin: 'left' });
sr.reveal(`.word-4`, { Delay: 1300, duration: 2500, distance: '50px', origin: 'left' });
sr.reveal(`.word-5`, { Delay: 1300, duration: 3000, distance: '50px', origin: 'left' });
sr.reveal(`.word-6`, { Delay: 1300, duration: 3500, distance: '50px', origin: 'left' });


sr.reveal(`.div__ap-1,.div__ap-2,.div__ap-3,.adventure__title,.adventure__name,.adventure__description,.adventure__button`, { Delay: 1400, distance: '50px', origin: 'bottom', distance: '100px' });
sr.reveal(`.libre__title,.libre__description,.button__libre`, { Delay: 2000, distance: '50px', origin: 'bottom', distance: '100px' });

sr.reveal(`.delabs__button,.delabs__description,.delabs__name,.delabs__title,.footer__box,.footer__title,.backersPartners__title,.people__title,.advisor__list-col,.game__name,.game__description,.game__button,.game__title,.game__social,.game__icon`, { Delay: 1000, distance: '50px', origin: 'bottom', distance: '100px' });
sr.reveal(`.people__list-col,.advisor__list-col`, { interval: 120, Delay: 1400 });



/*=============== SCROLL title ===============*/

const title = document.querySelector('.home__title');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    title.style.transform = `translateY(${scrollY * -1.5}px)`;
});
/*=============== SCROLL  home__icon ===============*/
const isDesktop = () => window.innerWidth >= 1024; 

// تابع اصلی انیمیشن 
const runAnimation = () => {
  const icon = document.querySelector('.home__icon'); 

  // تعیین نقاط اسکرول 
  const startScroll = 10; // شروع انیمیشن 
  const midScroll = 300; // مرحله دوم 
  const endScroll = 500; // مرحله سوم (نهایی) 

  let finalStateApplied = false; // پرچم برای اجرای ثابت در موقعیت نهایی 

  // رویداد اسکرول 
  window.addEventListener('scroll', () => { 
    const scrollY = window.scrollY; // مقدار اسکرول فعلی 

    // مرحله اول: حرکت خطی با اسکرول 
    if (scrollY < startScroll) { 
      const translateY = scrollY * 0.5; // حرکت خطی به سمت پایین 
      icon.style.transform =` translateY(${translateY}px) scale(1) rotate(0deg)`; // بدون چرخش یا تغییر اندازه 
    } 

    // مرحله دوم: چرخش و جابه‌جایی 
    else if (scrollY >= startScroll && scrollY < midScroll) { 
      const progress = (scrollY - startScroll) / (midScroll - startScroll); // درصد پیشرفت 
      const rotate = progress * -170; // چرخش تا 180 درجه 
      const translateX = progress * 400; // انتقال به راست 
      const translateY = progress * 0.01; // انتقال به پایین 
      const scale = 2 + progress; // افزایش اندازه (تا 2 برابر) 
      icon.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`; 
    } 

    // مرحله نهایی: ثابت ماندن در موقعیت نهایی 
    else if (scrollY >= endScroll && !finalStateApplied) { 
      icon.style.position = 'absolute'; 
      icon.style.transform =` translate(-300px, 630px) rotate(0deg) scale(3)`; 

      icon.style.bottom = 'auto'; 
      icon.style.left = 'auto'; 
      finalStateApplied = true; // اطمینان از اینکه این مرحله فقط یک بار اجرا شود 
    } 
  });
};

// بررسی عرض صفحه و اجرای انیمیشن فقط در دسکتاپ 
if (isDesktop()) {
  runAnimation();
} else{
    const icon = document.querySelector('.home__icon');
    if(icon){
        icon.style.position='static';
    }
}

// نظارت بر تغییر سایز صفحه برای غیر فعال کردن عملکرد در حالت موبایل و تبلت 
window.addEventListener('resize', () => {
  if (!isDesktop()) {
    window.location.reload(); // بارگذاری مجدد صفحه برای جلوگیری از اجرای انیمیشن در حالت موبایل
  }
});


/*=============== SCROLL  header icon ===============*/

const navlogo = document.querySelector('.nav__logo');
const header = document.querySelector('.header'); // انتخاب هدر

// مقدار حداقل عرض برای دسکتاپ
const desktopBreakpoint = 1024;
const hideUntil = 700; // مقدار اسکرول برای نمایش لوگو

// تابع مدیریت اسکرول
function handleScroll() {
    const scrollY = window.scrollY;
    const headerHeight = header.offsetHeight; // ارتفاع هدر

    // پنهان کردن لوگو تا زمانی که اسکرول به 800px نرسیده
    if (scrollY < hideUntil) {
        navlogo.style.opacity = '0'; // مخفی کردن لوگو
        navlogo.style.top = '-100px'; // انتقال لوگو به بالا
    } else {
        navlogo.style.opacity = '1'; // نمایش لوگو
        // حرکت لوگو هماهنگ با هدر
        if (scrollY <= hideUntil + headerHeight) {
            navlogo.style.top = `${scrollY - hideUntil}px`; // حرکت لوگو با اسکرول
        } else {
            navlogo.style.top = `${headerHeight}px`; // ثابت شدن لوگو بعد از هدر
        }
    }
}

// تابع اصلی برای اجرا فقط در دسکتاپ
function handleScrollForDesktop() {
    if (window.innerWidth >= desktopBreakpoint) {
        window.addEventListener('scroll', handleScroll); // اضافه کردن اسکرول فقط در دسکتاپ
    } else {
        // حذف اسکرول برای موبایل
        navlogo.style.opacity = '0'; // پنهان کردن لوگو در موبایل
        navlogo.style.top = '-100px'; // ریست موقعیت لوگو
        window.removeEventListener('scroll', handleScroll); // حذف لیسنر اسکرول
    }
}

// اجرا هنگام بارگذاری صفحه
handleScrollForDesktop();

// اجرا هنگام تغییر اندازه صفحه (resize)
window.addEventListener('resize', handleScrollForDesktop);

// /*=============== SCROLL  metaoltsAp ===============*/

const section1 = document.querySelector('.home__container');
const section2 = document.querySelector('.delabas__container');
const section3 = document.querySelector('.metaoltsAp__container');
const section4 = document.querySelector('.adventure__container');

// وضعیت ابتدایی سکشن سوم

section3.style.position = 'absolute'; // سکشن سوم ابتدا در پایین قرار دارد
section3.style.top = '100vh'; // در ابتدا خارج از نمای دید قرار دارد

// نقاط اسکرول برای تغییر موقعیت
const startScroll = section2.offsetHeight; // زمان شروع حرکت سکشن ۳
const endScroll = startScroll + section3.offsetHeight; // زمانی که سکشن ۴ شروع می‌شود

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // مقدار اسکرول فعلی
    const section2Height = section2.offsetHeight;
    const section3Height = section3.offsetHeight;
    
    // مرحله اول: وقتی به سکشن ۲ رسیدیم و انیمیشن سکشن ۲ کامل شد
    if (scrollY >= startScroll && scrollY < startScroll + section2Height) {
        // انیمیشن‌های سکشن ۲ اجرا می‌شود (مثلاً افزایش اندازه، چرخش و غیره)
        section2.style.transform = `scale(1.1)`;  // به عنوان مثال یک انیمیشن روی سکشن ۲
    }

    // مرحله دوم: وقتی به سکشن ۳ رسیدیم، سکشن ۳ به بالای سکشن ۲ می‌آید
    if (scrollY >= startScroll && scrollY < endScroll) {
        const progress = (scrollY - startScroll) / (endScroll - startScroll);
        
        // انتقال سکشن ۳ به بالا، با تنظیم مقدار بیشتر برای top
        section3.style.top = `${100 + progress * 100}vh`;  // اینجا مقدار 100 به  progress * 100 اضافه شد تا سکشن سوم بالاتر از سکشن ۲ بیاید
    }

    // مرحله سوم: وقتی به سکشن ۴ رسیدیم، سکشن ۳ دیگر حرکت نمی‌کند
    if (scrollY >= endScroll) {
        section3.style.position = 'absolute'; // سکشن ۳ در موقعیت ثابت می‌ماند
        section3.style.top = '0vh';  // همین موقعیت را حفظ می‌کند، می‌توانید عدد این را به دلخواه تنظیم کنید
    }
});