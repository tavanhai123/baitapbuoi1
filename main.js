  /* ----- NAVIGATION BAR FUNCTION ----- */
  function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
    var typingEffect = new Typed(".typedText",{
      strings : ["Designer","Developer"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
    })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
    const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
    })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }
  /* ----- CHECK AND INFORM ----- */
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định của form

        var formData = new FormData(form);

        // Kiểm tra xem các trường đã được điền đầy đủ chưa
        if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
            var errorMessage = document.getElementById('error-message');
            errorMessage.innerHTML = 'Vui lòng nhập đủ thông tin';
            errorMessage.style.display = 'block'; // Hiển thị thông báo lỗi
            setTimeout(function() {
                errorMessage.style.opacity = '0'; // Biến mất thông báo sau 2 giây
                setTimeout(function() {
                    errorMessage.style.display = 'none'; // Ẩn thông báo sau khi biến mất
                    errorMessage.style.opacity = '1'; // Đặt lại opacity
                }, 500);
            }, 2000); // Thời gian là 2 giây
            return; // Dừng quá trình gửi dữ liệu nếu thiếu thông tin
        }

        // Gửi dữ liệu bằng AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'process_form.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var inform = document.getElementById('inform');
                inform.innerHTML = xhr.responseText;
                inform.style.display = 'block'; // Hiển thị thông báo
                setTimeout(function() {
                    inform.style.opacity = '0'; // Biến mất thông báo sau 3 giây
                    setTimeout(function() {
                        inform.style.display = 'none'; // Ẩn thông báo sau khi biến mất
                        inform.style.opacity = '1'; // Đặt lại opacity
                    }, 500);
                }, 3000); // Thời gian là 3 giây
                form.reset(); // Reset biểu mẫu sau khi gửi thành công
            } else {
                console.log('Đã có lỗi khi gửi dữ liệu');
            }
        };
        xhr.send(formData);
    });
});
  window.addEventListener('scroll', scrollActive)
