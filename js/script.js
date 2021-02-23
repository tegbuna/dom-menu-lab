// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = ('var(--main-bg)');

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList= 'flex-ctr';

const topMenuEl = document.querySelector('#top-menu');

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = ('var(--top-menu-bg)');

topMenuEl.classList= 'flex-around';

menuLinks.forEach(function(linkOb) {
    const lOb = 
    document.createElement('a');
    lOb.setAttribute('href', linkOb.href);
    lOb.innerHTML = linkOb.text;
    topMenuEl.appendChild(lOb).textContent;
});










