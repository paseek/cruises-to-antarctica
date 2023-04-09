let apiLoaded = false;
// const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const createMap = ({id, initials, placemark}) => {
  const map = new window.ymaps.Map(id, initials);
  map.geoObjects.add(new window.ymaps.Placemark(map.getCenter(), ...placemark));
  map.behaviors.disable('scrollZoom');
  // if (isMobile) {
  //   map.behaviors.disable('drag');
  // }
};

const initMap = (mapData) => {
  document.querySelector('.contacts__map-image').style.display = 'none';
  const mapElement = document.getElementById(mapData.id);
  if (!mapElement) {
    return;
  }

  if (apiLoaded) {
    createMap(mapData);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      scriptElement.addEventListener('load', () => {
        window.ymaps.ready(() => {
          createMap(mapData);
          apiLoaded = true;
        });
      });

      document.body.append(scriptElement);
      observer.unobserve(mapElement);
    }
  }, {
    rootMargin: '0px',
    threshold: 0,
  });

  observer.observe(mapElement);
};

export {initMap};
