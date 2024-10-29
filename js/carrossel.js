(function () {
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/logo?name=A',
    headers: { 'X-Api-Key': 'zn0DLZGiNDA7Z1YSdhyL5g==G0AZmyj0xReSGJQh' },
    contentType: 'application/json',
    success: function (result) {
      carouselSlide = document.getElementById('carousel-slide');

      result.shift();

      for (let imagem in result) {
        const imgElement = document.createElement('img');
        imgElement.src = result[imagem].image;
        carouselSlide.appendChild(imgElement);
      }

    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
})();

let currentIndex = 0;


function moveSlide(direction) {
  const totalImages = (document.querySelectorAll('#carousel-slide img').length/3) - 1;
  console.log(`Total Images: ${totalImages}, Current Index: ${currentIndex}`);

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  console.log(`Total Images: ${totalImages}, Current Index: ${currentIndex}`);
  updateSlide();
}


function updateSlide() {
  const slideWidth = document.querySelector('.carousel-container').offsetWidth;
  document.getElementById('carousel-slide').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

window.addEventListener('resize', updateSlide);





