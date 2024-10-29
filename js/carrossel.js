    const companyNames = ['Amazon', 'Microsoft', 'Google', 'Facebook'];
    let currentIndex = 0;

      async function fetchLogo(company) {
        const response = await fetch(`https://api.api-ninjas.com/v1/logo?name=${company}`, {
          headers: { 'X-Api-Key': 'oZ9zdtyGReDk3Hs6WujNGg==vRASf0WI84ubmTXl' }
        });
        const logoData = await response.json();
      
        if (logoData.length > 0 && logoData[0].image) {  // Acessa o primeiro elemento do array
          return logoData[0].image;
        } else {
          console.log(`Logo não encontrado para: ${company}`);
          return null;
        }
      }

      async function loadCarouselImages() {
        const carouselSlide = document.getElementById('carousel-slide');
        for (let company of companyNames) {
          const logoUrl = await fetchLogo(company);
          if (logoUrl) {  // Só adiciona se a URL da imagem for válida
            const imgElement = document.createElement('img');
            imgElement.src = logoUrl;
            imgElement.alt = `${company} logo`;
            carouselSlide.appendChild(imgElement);
          }
        }
        updateSlide();
      }

    function moveSlide(direction) {
      const totalImages = document.querySelectorAll('#carousel-slide img').length;
      currentIndex = (currentIndex + direction + totalImages) % totalImages;
      updateSlide();
    }

    function updateSlide() {
      const slideWidth = document.querySelector('.carousel-container').offsetWidth;
      document.getElementById('carousel-slide').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    window.addEventListener('resize', updateSlide);

    loadCarouselImages();

