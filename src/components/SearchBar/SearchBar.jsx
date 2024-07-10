import React, { useState } from 'react'
import { PRODUCTS } from '../../products'
import "./SearchBar.css"

const getFilteredProducts = (query, products) => {
  if (!query) {
    return products;
  }

  return products.filter((product) => product.productName.includes(query));
}

const SearchBar = () => {

  const [query, setQuery] = useState("")
  // const {items} = PRODUCTS
  const filteredProducts = getFilteredProducts(query, PRODUCTS)
  console.log(filteredProducts)
  return (
    <div className='search-bar' style={{marginTop:'135px'}}>
      {/* <input value={query} required="" onChange={e => setQuery(e.target.value)} type="search"  placeholder='Поиск...'/>
        <div className='btn'>
        <button style={{width:'35px'}} type='submit'><img style={{color:'gray'}} src="./assets/products/loupe.png" alt="" /></button>
        </div> */}

      {/* <div class="search-box">
          <div class="search-field">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." class="input" type="searc"/>
            <div class="search-box-icon">
              <button class="btn-icon-content">
                <i class="search-icon">
                  <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
                </i>
              </button>
            </div>
          </div>
        </div>
 
      <h1 className='porduct-name' style={{ display: "flex", marginLeft: '-25px' }}>
        {filteredProducts.map((product) =>
          <h3 style={{ marginLeft: '45px', marginTop: '20px', fontSize: '18px' }} key={product.id} >{product.productName}</h3>
        )}
      </h1> */}
      <div class="container-input">
        <input  value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder="Искать..."  class="input"/>
          <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
          </svg>
      </div>
      <h1 className='porduct-name' style={{ display: "flex", marginLeft: '-25px' }}>
        {filteredProducts.map((product) =>
          <h3 style={{ marginLeft: '45px', marginTop: '20px', fontSize: '18px' }} key={product.id} >{product.productName}</h3>
        )}
      </h1>

    </div>
  )
}

export default SearchBar