"use strict";
const processClick = (e) => {
    if (e.target.nodeName === 'LI' &&
        e.target.classList.contains('menuNode')) {
        // Before opening the required list, check that there isn't any open lists
        const listItems = document.querySelectorAll('.menuNode');
        for (const item of listItems) {
            if (item.classList.contains('fix') && item !== e.target) {
                item.classList.toggle('fix');
                item.querySelector('ul').classList.toggle('hide');
                item.querySelector('.down').classList.toggle('rotate');
                item.querySelector('.down').classList.toggle('filter');
            }
        }
        e.target.classList.toggle('fix');
        e.target.querySelector('ul').classList.toggle('hide');
        e.target
            .querySelector('.down')
            .classList.toggle('rotate');
        e.target
            .querySelector('.down')
            .classList.toggle('filter');
    }
    else if (e.target.nodeName === 'IMG') {
        if (e.target.id === 'ham_icon') {
            document.querySelector('#container').classList.toggle('hide');
        }
        else if (e.target.id === 'close') {
            document.querySelector('#container').classList.toggle('hide');
        }
    }
    else {
        // If there is a click anywhere on the page, other than the list, close any open dropdown list
        const listItems = document.querySelectorAll('.menuNode');
        for (const item of listItems) {
            if (item.classList.contains('fix')) {
                item.classList.toggle('fix');
                item.querySelector('ul').classList.toggle('hide');
                item.querySelector('.down').classList.toggle('rotate');
                item.querySelector('.down').classList.toggle('filter');
            }
        }
    }
};
const init = () => {
    document.addEventListener('click', processClick);
};
document.addEventListener('DOMContentLoaded', init);
