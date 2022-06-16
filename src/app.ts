const processClick = (e: Event) => {
  if (
    (e.target as HTMLElement).nodeName === 'LI' &&
    (e.target as HTMLElement).classList.contains('menuNode')
  ) {
    (e.target as HTMLElement).classList.toggle('fix');
    (e.target as HTMLElement).querySelector('ul')!.classList.toggle('hide');
    (e.target as HTMLElement)
      .querySelector('.down')!
      .classList.toggle('rotate');
    (e.target as HTMLElement)
      .querySelector('.down')!
      .classList.toggle('filter');
  } else if ((e.target as HTMLElement).nodeName === 'IMG') {
    if ((e.target as HTMLElement).id === 'ham_icon') {
      document.querySelector('#container')!.classList.toggle('hide');
    } else if ((e.target as HTMLElement).id === 'close') {
      document.querySelector('#container')!.classList.toggle('hide');
    }
  } else {
    const listItems = document.querySelectorAll('.menuNode')!;

    for (const item of listItems) {
      if (item.classList.contains('fix')) {
        item.classList.toggle('fix');
        item.querySelector('ul')!.classList.toggle('hide');
        item.querySelector('.down')!.classList.toggle('rotate');
        item.querySelector('.down')!.classList.toggle('filter');
      }
    }
  }
};

const init = () => {
  document.addEventListener('click', processClick);
};
document.addEventListener('DOMContentLoaded', init);
