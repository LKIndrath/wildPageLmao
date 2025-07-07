function clockUpdater(){
    const agora = new Date();

    const hours = agora.getHours().toString().padStart(2, "0");
    const minutes = agora.getMinutes().toString().padStart(2, "0");
    const seconds = agora.getSeconds().toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").innerHTML = timeString;
};

clockUpdater();
setInterval(clockUpdater, 1000);

let cat = window.document.querySelector("#cat");
let catButton = window.document.getElementById("catFixerButton");
let isCatOver = true;

cat.addEventListener("click", e =>{
    switch (isCatOver) {
        case true: {
            cat.style.zIndex = "1";
            isCatOver = false;
            break;
        };
        case false: {
            cat.style.zIndex = "3";
            isCatOver = true;
            break;
        };
    };
});

let randomMsg = window.document.getElementById("randomMsg");
let message = window.document.querySelector(".emptyField");

randomMsg.addEventListener("click", e => {
    message.innerHTML ="&nbspTenha um ótimo dia!<br><br>⎛⎝ ≽  >  ⩊   < ≼ ⎠⎞";
});

const PLink = document.querySelector(".PLink");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.add("blinking", entry.isIntersecting);
        setTimeout(() => {
            entry.target.classList.remove("blinking")
        }, 1000)
    })
}, {
    threshold: 0.5,
});

observer.observe(PLink);

