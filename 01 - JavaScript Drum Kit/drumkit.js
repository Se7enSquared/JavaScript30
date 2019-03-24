window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("playing");
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
})

const keys = document.querySelectorAll('.key');

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        console.log(this);
        this.classList.remove("playing");

    };
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))