// import React, { useMemo, useRef, useState } from 'react'





// function NavFoot() {
//   const[items, setItems] = useState([])
//   const [query, setQuery] = useState("")
//   const inputRef = useRef()

//   const filterdItems = useMemo(() => {
//     return items.filter(item => {
//       return item.toLowerCase().includes(query.toLowerCase())
//     })

//   }, [items, query])
//   function onSubmit(e) {
//     e.preventDefault()

//     const value = inputRef.current.value
//     if (value === "") return
//     setItems(prev => {
//       return [...prev, value]
//     })
//     inputRef.current.value = ""

//   }



//   return (
    
//     <>
//       Search:
//       <input value={query} onChange={e => setQuery(e.target.value)} type="search" />
//       <br/>
//       <form onSubmit={onSubmit}>
//         New Item: <input ref={inputRef} type="text" />
//         <button type='submit'>Add</button>
//       </form>
//       <h3>Items:</h3>
//       {items.map(item => (
//         <div>{item}</div>
//       ))}
//     </>
//   )
// }

// export default NavFoot


// // import React from 'react'

// // function NavFoot({placeholder, data}) {
// //   return (
// //     <div className='navfoot' style={{marginBottom: '40px'}}>
// //       <div className="navfootInputs">
// //         <input type="text" />
// //         <div className="navfootIcon"></div>
// //       </div>
// //       <div className="dataResult"></div>
// //     </div>
// //   )
// // }

// // export default NavFoot;



// import React, { useState } from 'react'
// import {products} from "../../products";

// const NavFoot = () => {
//   const [searchText, setSearchText] = useState("");
//   const [foundProduct, setFoundProduct] = useState(null);

//   const handleSearch = () => {
//       const query = searchText.toLowerCase();
//       const product = products.find(product => product.title.toLowerCase().includes(query));
//       setFoundProduct(product || "Продукт не найден");
//   };

//   return (
//       <div>
//           <input
//               type="text"
//               value={searchText}
//               onChange={e => setSearchText(e.target.value)}
//               placeholder="Введите название продукта"
//           />
//           <button onClick={handleSearch}>Поиск</button>

//           <div>
//               {foundProduct !== null && (
//                   <div>
//                       {typeof foundProduct === "object" ? (
//                           <div>
//                               <h3>{foundProduct.title}</h3>
//                               <p>Цена: {foundProduct.price} руб.</p>
//                           </div>
//                       ) : (
//                           <p>{foundProduct}</p>
//                       )}
//                   </div>
//               )}
//           </div>
//       </div>
//   );
// }

// export default NavFoot
