window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    const scrollY = window.scrollY;

    if (scrollY > 500) { // 스크롤 3번쯤
        header.classList.add('dark');
    } else {
        header.classList.remove('dark');
    }
});