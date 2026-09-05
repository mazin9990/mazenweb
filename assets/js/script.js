'use strict';

// دالة التبديل العام لعنصر ما
const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {

  /* ===================================================
     1. الشريط الجانبي (Sidebar Toggle)
  =================================================== */
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });
  }

  /* ===================================================
     2. آراء العملاء والنافذة المنبثقة (Testimonials Modal)
  =================================================== */
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  };

  if (testimonialsItem.length > 0) {
    testimonialsItem.forEach(item => {
      item.addEventListener("click", function () {
        const avatar = this.querySelector("[data-testimonials-avatar]");
        const title = this.querySelector("[data-testimonials-title]");
        const text = this.querySelector("[data-testimonials-text]");

        if (modalImg && avatar) {
          modalImg.src = avatar.src;
          modalImg.alt = avatar.alt;
        }
        if (modalTitle && title) modalTitle.innerHTML = title.innerHTML;
        if (modalText && text) modalText.innerHTML = text.innerHTML;

        testimonialsModalFunc();
      });
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

  /* ===================================================
     3. القائمة المنسدلة والتصفية (Custom Select & Filter)
  =================================================== */
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  // تم تصحيح الإملاء من data-selecct-value إلى data-select-value
  const selectValue = document.querySelector("[data-select-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  if (select) {
    select.addEventListener("click", function () {
      elementToggleFunc(this);
    });
  }

  const filterFunc = function (selectedValue) {
    filterItems.forEach(item => {
      const category = item.dataset.category ? item.dataset.category.toLowerCase() : "";
      if (selectedValue === "all" || selectedValue === "الكل" || selectedValue === category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.trim().toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      if (select) elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      let selectedValue = this.innerText.trim().toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  /* ===================================================
     4. نموذج التواصل والتحقق (Contact Form)
  =================================================== */
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (form && formBtn) {
    formInputs.forEach(input => {
      input.addEventListener("input", function () {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    });
  }

  /* ===================================================
     5. التنقل بين الصفحات (Page Navigation)
  =================================================== */
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      const targetPage = this.getAttribute("data-nav-link") || this.innerText.trim().toLowerCase();

      navLinks.forEach(l => l.classList.remove("active"));
      pages.forEach(p => p.classList.remove("active"));

      this.classList.add("active");

      pages.forEach(page => {
        if (page.dataset.page.toLowerCase() === targetPage.toLowerCase()) {
          page.classList.add("active");
          window.scrollTo(0, 0);
        }
      });
    });
  });

  /* ===================================================
     6. تغيير اللغة (Language Toggle)
  =================================================== */
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

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "ar" ? "en" : "ar";
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      langToggleBtn.textContent = currentLang === "ar" ? "EN" : "عربي";

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang] && translations[currentLang][key]) {
          el.textContent = translations[currentLang][key];
        }
      });
    });
  }

  /* ===================================================
     7. تغيير الثيم (Theme Toggle)
  =================================================== */
  const themeToggleBtn = document.getElementById("theme-toggle");

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);

      const icon = themeToggleBtn.querySelector("i");
      if (icon) {
        icon.className = newTheme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
      }
    });
  }

});
