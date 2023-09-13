import './App.css';
import React, { useState, useEffect } from 'react';
import TitlePage from './components/TitlePage';
import Footer from './components/Footer';
import Header from './components/Header';
import productCard from './components/productCard';

function App() {

  console.log("Page initialized.");


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data.products);
      })
      .catch(err => console.log(err))
  }, []); 

  return (
    <div>
      <Header/>
      <TitlePage 
        title="monApp" 
        subtitle="lorem ipsum"
      />
      <div className="product_grid">
        {
          products.map(
            (product) => { return (
                <productCard 
                  title={product.title}
                  description={product.description}
                  imgSrc={product.thumbnail}
                  price={product.price}
                />
              )
            }
          )
        }
      </div>
      <Footer/>
    </div>
  )
}

export default App;
