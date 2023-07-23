# Тестовое задание на вакансию React-разработчика компании ILS

<p padding="0" align="center">~~~~~~~~~~</p>
<a  href="https://gutmalina.github.io/route-display/" target="_blank" align="center"><img src="./readme/videogift.gif" width="100%" alt="Демо"></a>
<p padding="0" align="center">~~~~~~~~~~</p>

### Стэк:
* React
* Redux-saga
* Redux-toolkit
* Leaflet
* Ant Design
* OSRM API

### Задание:
Используя заданный набор маршрутов (таблица 1), реализовать экран:
* в котором слева будет таблица со списком маршрутов, а справа карта
* При выборе в таблице строки с маршрутом, выбранная строка должна подсветиться, а на карте должны отобразиться точки маршрута в виде маркеров и полилиния (polyline) трека движения по точкам маршрута, полученная из сервиса построения треков по дорогам OSRM (или другой). 
* При выборе маршрута в таблице, на карте происходит центрирование и масштабирование таким образом, что весь маршрут должен попасть в область видимости карты. 
* Одновременно на карте может отображаться только один маршрут – выбранный.

### Использовать Стэк:
* Для отображения карты желательно использовать пакет Leaflet
* Для отображения компонентов — AntDesign
* Для хранения стейта компонентов и данных обязательно использовать Redux (redux-toolkit)
* Для реакции на события — Sagas. 
* В качестве основы приложения можно использовать React Create App или Vite. 
* Использовать только функциональные компоненты и преимущественно функциональное программирование. 
* Распределять код по каталогам, исходя из принадлежности к функциям: components, selectors, reducers, sagas, HTTP-services, helpers, etc. 
* Обязательно задействовать sagas для получения трека по точкам
* а также обязательно задействовать любой HTTP-сервис для обращения к API построения треков. 
* Предусмотреть обработку ошибок от HTTP-сервисов. 
* CSS-стили допускается писать в  препроцессоре SASS/LESS.
* Для получения полилиний (polylines) маршрута можно использовать [API OSRM](http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service)

Решение требуется предоставить в виде исходного кода, готового для развертывания на веб-сервере (приложить файловый архив или ссылку на github, например). Приложение нужно писать чисто и аккуратно, используя известные паттерны, сразу с рефакторингом - так, будто вы пишите production-приложение.

### Ссылки:
* :mag_right: [Открыть проект](https://gutmalina.github.io/route-display/)

