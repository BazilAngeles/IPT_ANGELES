const images = ['trav2.jpg', 'trav3.jpg', 'trav4.jpg', 'trav1.jpg'];


let currentIndex = 0;


function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;  
    const imageElement = document.getElementById('image');
    imageElement.src = images[currentIndex];  
}


setInterval(changeImage, 1000);
