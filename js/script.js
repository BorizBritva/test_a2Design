let headerButton = document.querySelectorAll('.mainHeader_button');

function addActive(e) {
    e.target.classList.toggle("active");
};

headerButton.forEach((item) => {
    item.addEventListener('click', addActive);
})
