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
sr.reveal(`.metaoltsAp__container`, { interval: 120, Delay: 1400, origin: 'top' });

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
      icon.style.transform = ` translateY(${translateY}px) scale(1) rotate(0deg)`; // بدون چرخش یا تغییر اندازه 
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
      icon.style.transform = ` translate(-300px, 630px) rotate(0deg) scale(3)`;

      icon.style.bottom = 'auto';
      icon.style.left = 'auto';
      finalStateApplied = true; // اطمینان از اینکه این مرحله فقط یک بار اجرا شود 
    }
  });
};

// بررسی عرض صفحه و اجرای انیمیشن فقط در دسکتاپ 
if (isDesktop()) {
  runAnimation();
} else {
  const icon = document.querySelector('.home__icon');
  if (icon) {
    icon.style.position = 'static';
  }
}

// نظارت بر تغییر سایز صفحه برای غیر فعال کردن عملکرد در حالت موبایل و تبلت 
window.addEventListener('resize', () => {
  if (!isDesktop()) {
    window.location.reload(); // بارگذاری مجدد صفحه برای جلوگیری از اجرای انیمیشن در حالت موبایل
  }
});


/*=============== SCROLL  header icon ===============*/
const navlogo = document.querySelector(".nav__logo");

// افزودن رویداد اسکرول
window.addEventListener("scroll", () => {
  if (window.scrollY >= 800) {
    navlogo.style.display = "block"; // نمایش div بعد از 800px اسکرول
  } else {
    navlogo.style.display = "none"; // مخفی کردن دوباره در صورت اسکرول به بالا
  }
});

// const navlogo = document.querySelector('.nav__logo');
// const header = document.querySelector('.header'); // انتخاب هدر

// // مقدار حداقل عرض برای دسکتاپ
// const desktopBreakpoint = 1024;
// const hideUntil = 700; // مقدار اسکرول برای نمایش لوگو

// // تابع مدیریت اسکرول
// function handleScroll() {
//     const scrollY = window.scrollY;
//     const headerHeight = header.offsetHeight; // ارتفاع هدر

//     // پنهان کردن لوگو تا زمانی که اسکرول به 800px نرسیده
//     if (scrollY < hideUntil) {
//         navlogo.style.opacity = '0'; // مخفی کردن لوگو
//         navlogo.style.top = '-100px'; // انتقال لوگو به بالا
//     } else {
//         navlogo.style.opacity = '1'; // نمایش لوگو
//         // حرکت لوگو هماهنگ با هدر
//         if (scrollY <= hideUntil + headerHeight) {
//             navlogo.style.top = `${scrollY - hideUntil}px`; // حرکت لوگو با اسکرول
//         } else {
//             navlogo.style.top = `${headerHeight}px`; // ثابت شدن لوگو بعد از هدر
//         }
//     }
// }

// // تابع اصلی برای اجرا فقط در دسکتاپ
// function handleScrollForDesktop() {
//     if (window.innerWidth >= desktopBreakpoint) {
//         window.addEventListener('scroll', handleScroll); // اضافه کردن اسکرول فقط در دسکتاپ
//     } else {
//         // حذف اسکرول برای موبایل
//         navlogo.style.opacity = '0'; // پنهان کردن لوگو در موبایل
//         navlogo.style.top = '-100px'; // ریست موقعیت لوگو
//         window.removeEventListener('scroll', handleScroll); // حذف لیسنر اسکرول
//     }
// }

// // اجرا هنگام بارگذاری صفحه
// handleScrollForDesktop();

// // اجرا هنگام تغییر اندازه صفحه (resize)
// window.addEventListener('resize', handleScrollForDesktop);

// /*=============== SCROLL  metaoltsAp ===============*/

// const section1 = document.querySelector('.home__container');
// const section2 = document.querySelector('.delabas__container');
// const section3 = document.querySelector('.metaoltsAp__container');
// const section4 = document.querySelector('.adventure__container');

// const section1Height = section1.offsetHeight; // ارتفاع سکشن اول
// const section2Height = section2.offsetHeight; // ارتفاع سکشن دوم

// // رویداد اسکرول
// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY; // مقدار اسکرول فعلی

//   // مرحله اول: زمانی که اسکرول به سکشن 2 رسید
//   if (scrollY >= section1Height && scrollY < section1Height + section2Height) {
//     const progress = (scrollY - section1Height) / section2Height; // درصد پیشرفت در سکشن 2
//     const topPosition = Math.min(progress * 100, 100); // حرکت سکشن 3 به سمت بالا

//     // قرار گرفتن سکشن 3 روی سکشن 2
//     section3.style.position = 'absolute'; // تغییر موقعیت سکشن 3 به absolute
//     section3.style.top = `${100 - topPosition}vh`; // حرکت سکشن 3 به سمت بالا
//   } else {
//     // اگر اسکرول هنوز به سکشن 2 نرسیده است، سکشن 3 در پایین می‌ماند
//     section3.style.top = '100vh'; // قرار گرفتن سکشن 3 در پایین صفحه
//     section3.style.position = 'static'; // تغییر موقعیت سکشن 3 به حالت پیش‌فرض
//   }

//   // مرحله نهایی: وقتی اسکرول به انتهای سکشن 2 رسید
//   if (scrollY >= section1Height + section2Height) {
//     // سکشن 3 باید در بالای سکشن 2 باقی بماند
//     section3.style.top = '0'; // قرار گرفتن در بالای سکشن 2
//     section3.style.position = 'absolute'; // ثابت ماندن در موقعیت
//     section3.style.padding ='166px 200px';
//     section3.style.width ='2000px';
//     section3.style.margin ='0';
//     // section3.style.left ='100px';



//   }
// });

// /*=============== SCROLL  Progress Bar ===============*/

// انتخاب نوار پیشرفت
const sectionss = document.querySelectorAll('section'); // تمام سکشن‌ها
const progressBars = document.querySelectorAll('.bar'); // نوارهای پیشرفت

window.addEventListener('scroll', () => {
  sectionss.forEach((section, index) => {
    const sectionTop = section.offsetTop; // موقعیت بالای سکشن
    const sectionHeight = section.offsetHeight; // ارتفاع سکشن
    const scrollY = window.scrollY + window.innerHeight / 2; // مقدار اسکرول فعلی (وسط ویوپورت)

    // بررسی اینکه اسکرول در محدوده این سکشن است
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      const progress = ((scrollY - sectionTop) / sectionHeight) * 100; // محاسبه درصد پیشرفت
      progressBars[index].style.width = `${progress}%`; // اعمال درصد پیشرفت به نوار
    } else if (scrollY < sectionTop) {
      // اگر اسکرول به سکشن نرسیده، عرض نوار را صفر کن
      progressBars[index].style.width = '0%';
    } else if (scrollY > sectionTop + sectionHeight) {
      // اگر اسکرول از سکشن عبور کرده، نوار را پر کن
      progressBars[index].style.width = '100%';
    }
  });
});

const fixedDiv = document.querySelector(".scroll_Progress_Bar");

// افزودن رویداد اسکرول
window.addEventListener("scroll", () => {
  if (window.scrollY >= 800) {
    fixedDiv.style.display = "block"; // نمایش div بعد از 800px اسکرول
  } else {
    fixedDiv.style.display = "none"; // مخفی کردن دوباره در صورت اسکرول به بالا
  }
});
