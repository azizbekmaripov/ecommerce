import React from 'react'
import './section.css'

const Section = () => {
  return (
    <div className='section'>
      {/* <img style={{width: '1400px'}} src="https://assets.weimgs.com/weimgs/ab/images/dp/ecm/202319/0067/027/091.jpg" loading="lazy" class></img> */}
      <div className='section-2'>
        {/* <picture>
          <source srcSet='../assets/products/business-class.jpg'
          media='(min-width: 600px'/>
        </picture> */}
        <img className="p-2" style={{ height: '100%', width: '50%',   }} src="./assets/products/business-class.jpg" alt="hui" />
        <div style={{display: '',marginTop: '60px', padding: '20px 20px'}}>


           <b style={{ fontSize: '30px' }}>Бизнес для бизнеса</b>
     
        <p style={{ color: 'gray  ' }}>Душевные решения от пола до потолка

Продукты контрактного уровня и поддержка дизайна,  <br />а также привилегии только для участников для больших и малых проектов.</p>
        <div className="">
          <button className="learn">Узнать больше</button>
        </div>

        </div>
      </div>
      
    </div>
    

  )
}

export default Section