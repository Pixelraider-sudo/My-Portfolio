document.addEventListener("DOMContentLoaded", () => {

  /* 
    Smooth Scroll
  */
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });


  /* 
     Typewriter Effect
  */
  const text = "I build scalable web applications that solve real-world problems";
  const typeTarget = document.querySelector(".top:nth-child(2)");
  let i = 0;
  const speed = 50;

  function typeWriter() {
    if (typeTarget && i < text.length) {
      typeTarget.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  if (typeTarget) {
    typeTarget.innerHTML = "";
    typeWriter();
  }


  /* 
     Section Reveal Animation
   */
  const sections = document.querySelectorAll("section");

  function revealSections() {
    sections.forEach(sec => {
      const position = sec.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        sec.style.opacity = "1";
        sec.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();


  /* 
     Progress Bars (Single System)
  */
  const progressBars = document.querySelectorAll(".progress-bar");

  function animateBars() {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();

      if (rect.top < window.innerHeight - 50 && !bar.classList.contains("loaded")) {
        const target = bar.getAttribute("data-progress");
        if (target) {
          bar.style.width = target + "%";
          bar.classList.add("loaded");
        }
      }
    });
  }

  window.addEventListener("scroll", animateBars);
  animateBars();


  /* 
     Dark Mode Toggle
  */
  const toggle = document.createElement("button");
  toggle.innerText = "🌙";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.zIndex = "1000";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });


  /* 
     Email Validator
   */
  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }


  /* 
      GitHub Fetch
  */
  fetch("https://api.github.com/users/Pixelraider_sudo/repos")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("GitHub fetch error:", err));


  /* 
     Custom Cursor
 */
  const cursor = document.querySelector(".cursor");

  if (cursor) {
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }


  /* 
     Particle Canvas
 */
  const canvas = document.getElementById("particles");

  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let j = 0; j < 80; j++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3,
        dx: (Math.random() - 0.5),
        dy: (Math.random() - 0.5)
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }


  /* 
     Preloader
 */
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
    }
  });


  /* 
     3D Tilt Effect
  */
  const tiltCards = document.querySelectorAll(".card, .core1, .web");

  tiltCards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = -(y - rect.height / 2) / 15;
      const rotateY = (x - rect.width / 2) / 15;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });


  /* 
     Contact Button Scroll
  */
  const contactBtn = document.getElementById("contactBtn");
  const contactSection = document.getElementById("contact");

  if (contactBtn && contactSection) {
    contactBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }


  /* 
     13. Auto Highlight Nav
 */
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));


  /* 
    Contact Section Animation
  */
  if (contactSection) {
    const contactObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactSection.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    contactObserver.observe(contactSection);
  }


  /* 
     Glow Button While Scrolling
   */
  window.addEventListener("scroll", () => {
    if (contactBtn) {
      if (window.scrollY > 300) {
        contactBtn.classList.add("glow");
      } else {
        contactBtn.classList.remove("glow");
      }
    }
  });

});
const progressBar = document.getElementById("progressBar");

function updateProgressBar(){
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
}

window.addEventListener("scroll", updateProgressBar);
const floatingCTA = document.getElementById("floatingCTA");

window.addEventListener("scroll", () => {
  if(window.scrollY > 400){
    floatingCTA.classList.add("show");
  } else {
    floatingCTA.classList.remove("show");
  }
});

floatingCTA.addEventListener("click", () => {
  document.getElementById("contact")
    .scrollIntoView({ behavior: "smooth" });
});
const parallaxLayers = document.querySelectorAll(".parallax");

function parallaxEffect(){
  const scrollY = window.scrollY;

  parallaxLayers.forEach(layer => {
    const speed = layer.dataset.speed;
    layer.style.transform = `translateY(${scrollY * speed}px)`;
  });
}

window.addEventListener("scroll", parallaxEffect);
/*throttle*/
function throttle(func, limit){
  let lastCall = 0;
  return function(){
    const now = Date.now();
    if(now - lastCall >= limit){
      lastCall = now;
      func.apply(this, arguments);
    }
  };
}
/*use it*/
window.addEventListener("scroll",
  throttle(() => {
    updateProgressBar();
    parallaxEffect();
  }, 16) // ~60fps
);
window.addEventListener("load", () => {

  const intro = document.getElementById("introOverlay");
  const loader = document.getElementById("loader");
  const paper = document.getElementById("paperTransition");
  const main = document.getElementById("mainContent");

  // Step 1: Glass shatter ends
  setTimeout(() => {
    intro.style.display = "none";
    loader.classList.add("show");
  }, 1500);

  // Step 2: Show loader for 1.5s
  setTimeout(() => {
    loader.classList.remove("show");
    paper.classList.add("active");
  }, 3000);

  // Step 3: Paper fast scroll reveal
  setTimeout(() => {
    paper.style.display = "none";
    main.classList.add("show");
    document.body.style.overflow = "auto";
  }, 3800);

});
window.addEventListener("load", () => {

  const tl = gsap.timeline();
  const impact = document.getElementById("impactSound");

  // GLASS CRACK IMPACT
  tl.to(".glass-layer", {
    scale:1.1,
    duration:0.3,
    ease:"power2.out",
    onStart: () => impact.play()
  });

  tl.to(".glass-layer", {
    scale:3,
    rotation:15,
    opacity:0,
    duration:1,
    ease:"power4.in"
  });

  // LOADER APPEAR
  tl.to(".loader-screen", {
    opacity:1,
    duration:0.6
  });

  tl.fromTo(".loader-text",
    { y:30, opacity:0 },
    { y:0, opacity:1, duration:0.8, ease:"power3.out" }
  );

  tl.to(".loader-screen", {
    opacity:0,
    duration:0.6,
    delay:1
  });

  // PAPER FAST SCROLL
  tl.to(".flash-paper", {
    y:"100%",
    duration:0.8,
    ease:"power4.inOut"
  });

  // MAIN CONTENT REVEAL
  tl.to("#mainContent", {
    opacity:1,
    scale:1,
    duration:1,
    ease:"power3.out",
    onStart: () => {
      document.body.style.overflow="auto";
    }
  });

  // REMOVE INTRO COMPLETELY
  tl.to("#cinematicIntro", {
    opacity:0,
    duration:0.5,
    onComplete: () => {
      document.getElementById("cinematicIntro").remove();
    }
  });

});
// Define social links
const socialLinks = {
  "linkedin": "https://www.linkedin.com/in/your-profile",
  "x-twitter": "https://twitter.com/your-handle",
  "instagram": "https://www.instagram.com/your-handle",
  "whatsapp": "https://wa.me/254712345678",
  "github": "https://github.com/your-username",
  "email": "mailto:your-email@example.com"
};

// Attach click event
document.querySelectorAll(".social-container .icon").forEach(icon => {
  icon.addEventListener("click", () => {
    const platform = icon.dataset.platform;
    const url = socialLinks[platform];
    if (url) window.open(url, "_blank");
  });
});
// Wait until your main content is shown
window.addEventListener("load", () => {
  setTimeout(() => {
    const socialContainer = document.querySelector(".social-container");
    if (socialContainer) {
      socialContainer.classList.add("show");
    }
  }, 4000); // Adjust timing to match your paper-scroll reveal
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".web").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});