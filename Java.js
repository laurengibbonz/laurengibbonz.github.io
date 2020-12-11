const navLinks = document.querySelectorAll('nav a'),
        sliderRects = document.querySelectorAll('.rect');

    function scrollSection(section) {

      window.scroll({
        top: document.getElementById(section).offsetTop,
        behavior: 'smooth' 
      });
    }

    function animateStuff() {
      sliderRects.forEach(function(sliderRect) {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderRect.offsetHeight / 2;
        const imageBottom = sliderRect.offsetTop + sliderRect.offsetHeight;
        const isHalfShown = slideInAt > sliderRect.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderRect.classList.add('active');
        } else {
          sliderRect.classList.remove('active');
        }
      });
    }

    navLinks.forEach(function(element) {
      element.addEventListener('click', function(e) {
        e.preventDefault();

        let target = this.dataset.link;

        scrollSection(target);
      });
    });

    window.addEventListener('scroll', function() {
      animateStuff();
    });
