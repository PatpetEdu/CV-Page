
document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('toggle');
    var myLinks = document.getElementById('myLinks');
    var mainMenuLinks = document.querySelectorAll('.main-menu a');
    
    function scrollToTarget(targetId) {
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
            // Stäng menyn efter att ha klickat på en länk
            myLinks.style.display = 'none';
        }
    }
    
    // Hantera klick på hamburgemenyikonen
    toggle.addEventListener('click', function () {
        if (myLinks.style.display === 'block') {
            myLinks.style.display = 'none';
        } else {
            myLinks.style.display = 'block';
        }
    });
});
