import React from 'react'
import "./SectionTwo.css"


const SectionTwo = () => {
  return (
    <div className='section-two'>
      {/* <div classNameNameName='section-two' >
        <p><span>Мебель на заказ в Ташкенте.</span> Мы производим мебель по индивидуальным проектам уже более 10 лет. Наши клиенты всегда знают, что заказ будет выполнен вовремя, мебель собрана аккуратно, готовое изделие получится таким, как задумывалось в проекте. Наш собственный мебельный цех, позволяет браться за любые идеи. Приглашаем в гости по предварительной договоренности. Изготавливаем любую мебель на заказ по городу Ташкент. К нашему списку услуг подходят такие категории как: кухонная мебель, офисная мебель, спальная мебель, детская мебель, мебель для прихожей, мебель для гостиной (горки), стойка администрации, шкафы купе и т.п. Вы всегда можете обратиться к нам по нижеуказанным номерам. Наши специалисты помогут оформить вашу мебель на заказ. Home Sphere — Мебельная фабрика в городе Ташкент. Мебель на заказ по вашим эскизам!</p>
       
      </div> */}
      <section className="text-gray-600 body-font">
  <div className="container px-1 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Отзывы покупателей</h1>
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-950 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">

        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./assets/products/mirfozil.jpg"/>
        <div className="flex-grow">
          <h2 style={{fontWeight: 'bold'}} className="text-gray-900 text-lg title-font font-medium mb-3">Mirfozil Nabiyev</h2>
          <p className="leading-relaxed text-base">
                Я бы хотела поблагодарить компанию <span>Home Sphere</span> за Кухню моей мечты! Материал великолепный, за ним легко ухаживать.  Очень удобное расположение — дизайнеры подсказали, как лучше оформить кухню., и предусмотрели, чтобы она была безопасна для ребенка. Все сделано отлично и в кратчайшие сроки. Спасибо, <span>Home Sphere</span>!</p>
          {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Посмотреть больше
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./assets/products/djonson.jpg"/>

        <div className="flex-grow">
          <h2 style={{fontWeight: 'bold'}} className="text-gray-900 text-lg title-font font-medium mb-3">Dwayne Johnson</h2>
          <p className="leading-relaxed text-base">
                Спасибо вам, я довольна кухней, красивая и очень удобная в использовании. Благодарю вас и ваших ребят, которые очень хорошо проработали все детали. Отдельное спасибо бригаде ваших мастеров и особенно тем, кто собирает мебель! </p>
          {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Посмотреть больше
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./assets/products/elon.jpeg"/>
        <div className="flex-grow">
          <h2 style={{fontWeight: 'bold'}} className="text-gray-900 text-lg title-font font-medium mb-3">Elon Musk</h2>
          <p className="leading-relaxed text-base">
                Хочу поблагодарить Александра, грамотного специалиста Максима, команду монтажников Мансура и Алишера. Ребята, вы молодцы! Да, были трудности, но удалось все вовремя исправить и уложиться в сроки. С уверенностью советую компанию <span>Home Sphere</span>! </p>
          {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Посмотреть больше
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
    </div>
    
  </div>
</section>
    </div>
  )
}

export default SectionTwo