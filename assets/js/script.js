'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Toggle (Arabic / English)
  const translations = {
    ar: {
      role: "مبرمج ومطور ويب",
      show_contacts: "عرض جهات الاتصال",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      address: "السعودية، المدينة المنورة",
      nav_about: "عني",
      nav_resume: "السيرة الذاتية",
      nav_portfolio: "الأعمال",
      about_title: "نبذة عني",
      about_p1: "أنا مبرمج ومطور ويب من المملكة العربية السعودية، المدينة المنورة. أستمتع بتحويل المشاكل المعقدة إلى تصميمات بسيطة وجميلة ومبتكرة.",
      about_p2: "مهمتي هي بناء موقعك الإلكتروني بحيث يكون عملياً وسهل الاستخدام وجذاباً في نفس الوقت.",
      services_title: "ماذا أقدم",
      service1_title: "تصميم وتطوير الويب",
      service1_desc: "تصميم حديث وعالي الجودة على مستوى احترافي.",
      service2_title: "تطبيقات الجوال",
      service2_desc: "تطوير احترافي لتطبيقات الأندرويد.",
      resume_title: "السيرة الذاتية",
      education: "التعليم",
      edu1_title: "الكلية التقنية بالمدينة المنورة",
      edu1_desc: "شهادة جامعية متوسطة في تقنية البرمجيات وتطوير الويب.",
      skills: "المهارات",
      portfolio_title: "معرض الأعمال"
    },
    en: {
      role: "Programmer and Web Developer",
      show_contacts: "Show Contacts",
      email: "Email",
      phone: "Phone",
      location: "Location",
      address: "Saudi Arabia, Medina",
      nav_about: "About",
      nav_resume: "Resume",
      nav_portfolio: "Portfolio",
      about_title: "About Me",
      about_p1: "I am a programmer and web developer from Medina, Saudi Arabia. I enjoy turning complex problems into simple and intuitive designs.",
      about_p2: "My job is to build your website so that it is functional, user-friendly, and attractive.",
      services_title: "What I'm Doing",
      service1_title: "Web Design & Dev",
      service1_desc: "High-quality web design and development at a professional level.",
      service2_title: "Mobile Apps",
      service2_desc: "Professional development of Android applications.",
      resume_title: "Resume",
      education: "Education",
      edu1_title: "Technical College in Medina",
      edu1_desc: "Intermediate University Certificate in Software and Web Development.",
      skills: "My Skills",
      portfolio_title: "Portfolio"
    }
  };

  let currentLang = "ar";
  const langToggleBtn = document.getElementById("lang-toggle");

  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    langToggleBtn.textContent = currentLang === "ar" ? "EN" : "عربي";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });
  });

  // 2. Theme Toggle (Dark / Light)
  const themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    themeToggleBtn.querySelector("i").className = newTheme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  });

  // 3. Page Navigation
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("article[data-page]");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const pageTarget = link.getAttribute("data-nav-link");

      navLinks.forEach(l => l.classList.remove("active"));
      pages.forEach(p => p.classList.remove("active"));

      link.classList.add("active");
      document.querySelector(`article[data-page="${pageTarget}"]`).classList.add("active");
    });
  });
});
