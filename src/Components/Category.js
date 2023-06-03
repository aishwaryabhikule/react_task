import React, { useState } from 'react';
import Categories from './Categories';
import Navbar from './Navbar';

const Category = () => {
const [data,setData] = useState(Categories);
    const filterResult=(catItem)=>{
        const result=Categories.filter((curData)=>{
            return curData.category.includes(catItem);
        });
        setData(result);

}
    
    return(
        <>
            <h1 className='text-center text-warning'>Let's Shop</h1>
            <div className='container-fluid mx-2 mb-4'>
                {/* <div className='row mt-5 mx-2'> */}
                
                    <Navbar filterResult={filterResult} setData={setData} Categories={Categories} />
                
      
                    <div className='col-md-9'>
                    <div className='row' style={{ position: 'relative' }}>
                            {data.map((values)=>{
                                const {id,title,price,image}=values;
                                return(
                                    <>
                                        <div className='col-md-4 mb-4' key={id}>
                                            <div className="card" >
                                                <img src={image} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{title}</h5>
                                                    <p>Price: {price}</p>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <button className="btn btn-dark my-button">Buy now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}    
                        </div>
                    </div>
                </div>
            
        </>
    )
}


export default Category