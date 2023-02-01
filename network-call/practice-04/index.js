const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((photos) => renderPhotos(photos));
  };
  
  const renderPhotos = (photos) => {
    let html = "";
    photos.map((photo) => {
      let htmlElement = `<div class="photo">
                            <img src="${photo.url}" >
                            <h2>${photo.title} </h2>
                        </div>`;
  
      html = html + htmlElement;
    });
  
    let container = document.querySelector(".container");
    container.innerHTML = html;
  };
  
  fetchData();
    