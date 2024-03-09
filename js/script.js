const menuLinks = Array.from(document.querySelectorAll('.menu a'));
const tabs = Array.from(document.querySelectorAll('.tab'));

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    menuLinks.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
    const tabId = link.getAttribute('id').replace('content', 'tab');
 active
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  });
});