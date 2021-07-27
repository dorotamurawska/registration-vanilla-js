import Registration from "./views/Registration.js";
import CardRead from "./views/CardRead.js";

const rootDiv = document.getElementById('root');

const registration = Registration();
const cardRead = CardRead();
let routes = {};
let isDisabled = true;


const main = () => {
    rootDiv.innerHTML = registration;
    routes = {
        // '/': registration,
        '/registration': registration,
        '/card-read': cardRead,
    };
};

main()

const changeViewTo = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
}

const onNavClick = (pathname) => {
    if (!isDisabled) {
        changeViewTo(pathname)
        if (pathname === '/registration') {
            isDisabled = true;
        }
    }
};

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
};

document.addEventListener("DOMContentLoaded",
    () => {
        document.body.addEventListener("input", e => {

            // handle nickname input
            if (e.target.matches("[data-nickname-input]")) {
                const inputValue = e.target.value.toLowerCase();
                isDisabled = !inputValue
                document.querySelector('button.next').disabled = isDisabled;
            }

            // handle next, back buttons
            document.body.addEventListener("click", e => {
                if (e.target.matches("[data-link]")) {
                    // e.preventDefault();
                    onNavClick(e.target.dataset.link);
                }
            })

            // handle card read input
            if (e.target.matches("[ data-card-read-input]")) {
                addClass('p.validation', 'hide');
                addClass('button.save', 'hide');
                const inputValue = e.target.value;
                const inputValueLength = inputValue.length
                const MAX_CARD_CHARATERS = 6;
                if (inputValue && !isNaN(inputValue)) {
                    if (inputValueLength === MAX_CARD_CHARATERS) {
                        removeClass('button.save', 'hide');
                    }
                } else if (inputValueLength) {
                    removeClass('p.validation', 'hide');
                }
            }
        });
    });
const addClass = (selector, className) => document.querySelector(selector).classList.add(className);
const removeClass = (selector, className) => document.querySelector(selector).classList.remove(className);



