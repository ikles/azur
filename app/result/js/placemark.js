jQuery(document).ready(function( $ ) {

    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
            center: [44.651491, 37.938316],        
            controls: ['zoomControl'],
            zoom: 15
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'islands#darkGreenIcon',

                balloonContent: 'Меня можно перемещать'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),



        // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([56.235340, 32.070925], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            iconContent: '',
            balloonContent: 'Тверская улица, 9',
            hintContent: 'Тверская улица, 9'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#buildingsIcon'
        });





        myPlacemark2 = new ymaps.Placemark([44.651491, 37.938316], {
            // Свойства.
            hintContent: '',
            iconContentLayout: '<div class="icn"></div>',
            iconContent: '<div class="icn"></div>'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/geo-map2.svg',
            // Размеры метки.
            iconImageSize: [28, 51],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42],        
            iconContentOffset: [11, 9] // позиция подписи
        });

        myPlacemark3 = new ymaps.Placemark([44.651350, 37.939304], {
            // Свойства.
            hintContent: '',
            iconContentLayout: '<div class="icn"></div>',
            iconContent: '<div class="icn"></div>'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/geo-map22.svg',
            // Размеры метки.
            iconImageSize: [28, 51],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42],        
            iconContentOffset: [11, 9] // позиция подписи
        });


        myPlacemark4 = new ymaps.Placemark([44.652184, 37.940166], {
            // Свойства.
            hintContent: '',
            iconContentLayout: '<div class="icn"></div>',
            iconContent: '<div class="icn"></div>'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/geo-map3.svg',
            // Размеры метки.
            iconImageSize: [28, 51],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42],        
            iconContentOffset: [11, 9] // позиция подписи
        });



        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small"
            }
        });



    // Добавляем все метки на карту.
    myMap.controls.add(zoomControl);    
    myMap.geoObjects
    .add(myPlacemark1)        
    .add(myPlacemark2)        
    .add(myPlacemark3)        
    .add(myPlacemark4)        
    .add(myGeoObject);
}

}); //ready