document.addEventListener("DOMContentLoaded", function() {
    const imageButtons = document.querySelectorAll(".image-container button");
    const showImage = document.querySelector(".show-image .main-area");

    imageButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const imgSrc = button.querySelector("img").getAttribute("src");
            showImage.innerHTML = `<img src="${imgSrc}" alt="Selected Image" class="selected-image">`;
        });
    });
});
const rangeSelect = document.getElementById('range');
const imageList = document.querySelector('.image-list');

rangeSelect.addEventListener('change', function() {
    const selectedValue = this.value;
    const dimensions = selectedValue.split('x');
    const width = parseInt(dimensions[0]);
    const height = parseInt(dimensions[1]);

    const images = imageList.querySelectorAll('img');
    images.forEach(img => {
        showImage.style.width = width + 'px';
        showImage.style.height = height + 'px';
    });
});
