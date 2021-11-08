var arrow = document.querySelectorAll(".icon");
var clicked = false;

arrow.forEach(arrow => {
    arrow.addEventListener('click', (event)=> {
        // ... event handled
        if (!clicked) {
            clicked = true;
            arrow.parentNode.classList.add('open');

        }
        else {
            clicked = false;
            arrow.parentNode.classList.remove('open');
        }
    });
});