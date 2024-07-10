import Carousel from 'react-bootstrap/Carousel'
import React from 'react'


const Slider = () => {
  return (
    <div className="slider sticky">

      <Carousel fade className="presentation sticky" data-bs-theme="white">
        <Carousel.Item>
          <img
            className="card w-100 slider-item"
            src="https://picjumbo.com/wp-content/uploads/dark-living-room-design-free-photo.jpg"
            alt="First slide"
            />
            <div class="carousel-caption d-none d d-md-block">
              <h5>ВСЕ ДЛЯ ВАШЕГО УДОБСТВА</h5>
            <p>Воплотите свой собственный стиль в жизнь <br /> с помощью нашей вдохновляющей коллекции мебели на заказ.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card d-block w-100 slider-item"
            src="https://images.squarespace-cdn.com/content/v1/5ce56c992a52ef0001811af5/1566193042224-7MWT7OLVJKSYFE4LMJ2D/17.jpg"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>ЛУЧШАЯ КОЛЛЕЦИЯ МЕБЕЛИ ДЛЯ ВАШЕГО ДОМА</h5>
            <p>подготовим проект мебели под ваше рамеры бесплатно </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card d-block w-100 slider-item"
            src="https://cdn.home-designing.com/wp-content/uploads/2022/09/dark-industrial-living-room.jpg"
            alt="Third slide"

          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Все в House Sphere</h5>
            <p>House Sphere предлагает вам только новые и современный мебели </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider