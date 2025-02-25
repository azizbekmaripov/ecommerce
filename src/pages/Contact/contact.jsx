import React from "react";
import "./contact.css"

export const Contact = () => {
  return (<div className="contact">
    <div style={{margin:'auto'}}>
      <img src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/A-Day-in-the-Life-of-a-Customer-Service-Rep-og.jpg" alt="image title" />
      
      
    </div>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex  sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/1 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 style={{fontSize:'15px'}} className="title-font font-semibold text-gray-900 tracking-widest text-xs">АДРЕС</h2>
              <p className="mt-1">город Ташкент Яккасарайский район улица Богобостон 186</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 style={{fontSize:'15px'}} className="title-font font-semibold text-gray-900 tracking-widest text-xs">Электронная почта</h2>
              <a className="text-indigo-500 leading-relaxed">azizbekmaripovv@email.com</a>
              <h2 style={{fontSize:'15px'}} className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Телефон номер</h2>
              <p className="leading-relaxed">+99890177-XX-XX</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font" style={{fontSize: '30px'}}>Обратная связь</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Имя Фамилия</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Электронная почта</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4"> 
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Сообщение</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button style={{color:'mediumspringgreen'}} className="text-white bg-indigo-950 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">Отправлять</button>
          <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  </div>
  )
};


