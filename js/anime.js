    const formBG = document.querySelector(".form-bg");
    const casinoBtn = document.querySelector(".btn-group__item--casino");
    const betsBtn = document.querySelector(".btn-group__item--bets");

    betsBtn.addEventListener("click", function () {
        formBG.classList.add("showing");
    });

    casinoBtn.addEventListener("click", function () {
        formBG.classList.add("showing");
    });