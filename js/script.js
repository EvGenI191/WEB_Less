const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const headerContainer = document.querySelector(".header .container");

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("active");
    headerContainer.classList.toggle("menu-open");

    const isOpen = navigation.classList.contains("active");

    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Закрыть меню" : "Открыть меню"
    );
});

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Заполните все поля!";
            return;
        }

        formMessage.textContent = "Форма заполнена правильно!";
    });
}

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Заполните все поля!";
        return;
    }

    formMessage.textContent = "Форма заполнена правильно!";
});

const serviceCards = document.querySelectorAll(".service-card");
const counter = document.querySelector("#services-counter");

if (counter) {
    counter.textContent = `Мы предлагаем ${serviceCards.length} услуги.`;
}

const scrollButton = document.querySelector("#scroll-top");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollButton.classList.add("visible");
    } else {
        scrollButton.classList.remove("visible");
    }
});

scrollButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});