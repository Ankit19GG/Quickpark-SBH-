// Login Modal Logic
const loginBtn = document.querySelector(".login-icon");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

closeLogin.addEventListener("click", () => {
  loginModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});
// Form Input Variables
const loginForm = loginModal.querySelector("form");
const emailInput = loginForm.querySelector("input[type='email']");
const passwordInput = loginForm.querySelector("input[type='password']");

// Optional: Handle form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from actually submitting

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Example: Log the collected data
  console.log("Email:", email);
  console.log("Password:", password);

  // TODO: You can now send this data to your backend for authentication
  // e.g., fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) })

  // Optionally close modal and clear fields
  loginModal.style.display = "none";
  loginForm.reset();
});
// Contact Form Submission
const contactForm = document.querySelector(".contact-form");
const nameInput = contactForm.querySelector("#name");
const emailInput2 = contactForm.querySelector("#email");
const messageInput = contactForm.querySelector("#message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent actual submission to Web3Forms or redirect

  const name = nameInput.value.trim();
  const email = emailInput2.value.trim();
  const message = messageInput.value.trim();

  // Example: Log the values
  console.log("Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // TODO: Send to backend or third-party service if needed

  // Reset form after submission (optional)
  contactForm.reset();

  // Optional: Show confirmation
  alert("Thank you for reaching out! We'll get back to you soon.");
});
// Hamburger Dropdown Toggle
const hamburgerIcon = document.querySelector(".hamburger");
const hamburgerDropdown = document.querySelector(".hamburger-dropdown");

hamburgerIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent bubbling
  hamburgerDropdown.style.display =
    hamburgerDropdown.style.display === "block" ? "none" : "block";
});

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburgerIcon.contains(e.target) && !hamburgerDropdown.contains(e.target)) {
    hamburgerDropdown.style.display = "none";
  }
});
// Language Translations (can be expanded)
const translations = {
    en: {
      home: "Home",
      features: "Features",
      about: "About Us",
      terms: "Terms & Conditions",
      contact: "Contact Us",
      findParking: "Find Parking",
      heroText: "Smart & secure solutions for your vehicle",
      choosePlan: "Choose Your Plan",
      hello: "Hello, Sign in"
    },
    hi: {
      home: "मुखपृष्ठ",
      features: "विशेषताएं",
      about: "हमारे बारे में",
      terms: "नियम और शर्तें",
      contact: "संपर्क करें",
      findParking: "पार्किंग खोजें",
      heroText: "आपके वाहन के लिए स्मार्ट और सुरक्षित समाधान",
      choosePlan: "अपनी योजना चुनें",
      hello: "नमस्ते, साइन इन करें"
    },
    bn: {
      home: "হোম",
      features: "বৈশিষ্ট্য",
      about: "আমাদের সম্পর্কে",
      terms: "শর্তাবলী",
      contact: "যোগাযোগ করুন",
      findParking: "পার্কিং খুঁজুন",
      heroText: "আপনার যানবাহনের জন্য স্মার্ট ও নিরাপদ সমাধান",
      choosePlan: "আপনার পরিকল্পনা বেছে নিন",
      hello: "হ্যালো, সাইন ইন করুন"
    }
  };
  
  // Get language options
  const langItems = document.querySelectorAll(".lang-dropdown ul li");
  const langText = document.querySelector(".language-select .text");
  
  // Add event listener to each language option
  langItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedLang = item.getAttribute("data-lang");
      applyLanguage(selectedLang);
      langText.textContent = item.textContent;
    });
  });
  
  // Function to update text content
  function applyLanguage(lang) {
    const t = translations[lang];
  
    // Update relevant sections by ID or class
    document.querySelector("nav ul li a[href='#home']").textContent = t.home;
    document.querySelector("nav ul li a[href='#features']").textContent = t.features;
    document.querySelector("nav ul li a[href='#about']").textContent = t.about;
    document.querySelector("nav ul li a[href='#terms']").textContent = t.terms;
    document.querySelector("nav ul li a[href='#contact us']").textContent = t.contact;
  
    document.querySelector(".hero h2").textContent = t.findParking;
    document.querySelector(".hero p").textContent = t.heroText;
    document.querySelector("#pricing h2").textContent = t.choosePlan;
    document.querySelector(".login-icon p").textContent = t.hello;
  }
  