import React from 'react'
import "./About.css"
// import logo from "./mylogo.png"

const About = () => {
  return (
    <div className='abouts'>
      <div className='about'>
      {/* <div className="logo-site">
          <img src={logo} height={60} width={60} style={{}} className="d-inline-block align-top" alt="Logo" />
        </div> */}
        ПРО НАС   
      </div>
      <div className='about-img'>
        <img src="./assets/products/about.jpg" alt="" />
      </div>
      <div className='about-text'>
        <p><span>Про нас</span> – интернет-портал, на котором можно найти широкий ассортимент мебели. <br /> В нашем каталоге мебели представлены продавцы из Ташкента и Ташкентской области. <br /> На портале более тысячи мебельных компаний, интернет-магазинов, производителей мебели и <br /> мебельных комплектующих, производителей фурнитуры. В нашем каталоге мебели <br /> представлен широкий ассортимент различных направлений: кухни, офисная мебель, <br /> компьютерная мебель, элитная мебель, детская мебель, мягкая мебель.  <br /></p>

      </div>
      <div className='about-about'>
      <h1 className='texts'>Почему именно мы?</h1>
      <div className='about-text'>
        <p>- Предоставляем полную гарантию на товары и услуги, предоставляемые компанией</p>
        <p>- В наших шоурумах вы сможете прикоснуться к любой вашей идее с помощью профессиональной консультации и <br /> инструментов визуализации.</p>
        <p>- У нас самые комфортные условия обслуживания с высоким сервисом, наши клиенты рекомендуют нас, как <br /> профессионалов.</p>
        <p>- Вы экономите свое время и деньги за счет наших передовых технологий производства, постоянному развитию и <br /> оптимизации всех наших бизнес-процессов.</p>
      </div>
      </div>

      {/* <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block">readymade gluten</br>
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section> */}


    </div>

  )
}

export default About

// import React from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Image,
//   Heading,
//   Paragraph,
//   Button,
// } from "react-bootstrap";

// const AboutUs = () => {
//   return (
//     <Container>
//       <Row>
//         <Col md={12}>
//           <Heading as="h1">О нас</Heading>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={6}>
//           <Image src="/logo.png" alt="Логотип компании" />
//           <Paragraph>
//             Мы - компания, которая занимается разработкой программного обеспечения. Мы стремимся создавать инновационные и удобные продукты, которые помогают людям решать их проблемы.
//           </Paragraph>
//         </Col>
//         <Col md={6}>
//           <Paragraph>
//             Наша команда состоит из опытных и талантливых специалистов, которые увлечены своим делом. Мы всегда открыты для новых идей и предложений.
//           </Paragraph>
//           <Button href="/продукты">Наши продукты</Button>
//           <Button href="/услуги">Наши услуги</Button>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12}>
//           <Card>
//             <Card.Body>
//               <Heading as="h2">Наша история</Heading>
//               <Paragraph>
//                 Компания была основана в 2022 году двумя молодыми предпринимателями, которые мечтали создавать продукты, которые будут иметь значение для мира. С тех пор мы выросли в команду из более чем 100 человек, и мы продолжаем работать над тем, чтобы создавать продукты, которые помогают людям жить лучше.
//               </Paragraph>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12}>
//           <Card>
//             <Card.Body>
//               <Heading as="h2">Наша команда</Heading>
//               <Paragraph>
//                 Наша команда состоит из талантливых и увлеченных специалистов, которые стремятся создавать инновационные продукты. Мы верим в силу совместной работы и всегда готовы учиться и расти.
//               </Paragraph>
//               <ul>
//                 <li>
//                   <img src="/team/1.jpg" alt="Изображение члена команды" />
//                   <p>
//                     Джон Смит,
//                     <br />
//                     Основатель и генеральный директор
//                   </p>
//                 </li>
//                 <li>
//                   <img src="/team/2.jpg" alt="Изображение члена команды" />
//                   <p>
//                     Мария Иванова,
//                     <br />
//                     Главный инженер
//                   </p>
//                 </li>
//                 <li>
//                   <img src="/team/3.jpg" alt="Изображение члена команды" />
//                   <p>
//                     Петр Петров,
//                     <br />
//                     Дизайнер интерфейсов
//                   </p>
//                 </li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AboutUs;




