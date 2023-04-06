document.addEventListener("DOMContentLoaded", function () {
    const brandDropdown = document.querySelector('.has-megamenu .dropdown-toggle');
    const megaMenu = document.querySelector('.has-megamenu .megamenu');

    brandDropdown.addEventListener('click', function (event) {
        event.stopPropagation();
        megaMenu.classList.toggle('show');
        brandDropdown.classList.toggle('active');
    });

    document.body.addEventListener('click', function () {
        megaMenu.classList.remove('show');
        brandDropdown.classList.remove('active');
    });
});
