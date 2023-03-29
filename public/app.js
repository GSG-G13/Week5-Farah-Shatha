const searchForm = document.getElementById('search-form');
const searchTermInput = document.getElementById('search-term');
const gallery = document.getElementById('gallery');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchTerm = searchTermInput.value;

  fetch(`/search?q=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      gallery.innerHTML = '';

      data.results.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.regular;
        gallery.appendChild(img);
      });
    })
    .catch(error => console.error(error));
});
