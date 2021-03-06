var arrow = document.querySelectorAll(".open-icon");
var clicked = false;

arrow.forEach(arrow => {
    arrow.addEventListener('click', (event)=> {
        // ... event handled
        if (!clicked) {
            clicked = true;
            arrow.parentNode.classList.add('open');
            arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>`;
        }
        else {
            clicked = false;
            if (arrow.parentNode.classList.contains('open')) {
                arrow.parentNode.classList.remove('open');
                arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>`;
            }
        }
    });
});