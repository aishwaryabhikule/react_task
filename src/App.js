import React from 'react';
// import React, { useState } from 'react';
import Category from './Components/Category';
// import Categories from './Components/Categories';

// import Navbar from './Components/Navbar';



function App () {

  // const [data, setData] = useState(Categories);

  // const filterResult = (catItem) => {
  //   const result = Categories.filter((curData) => {
  //     return curData.category.includes(catItem);
  //   });
  //   setData(result);
  // };

  return (
    <>
      <Category/>

      {/* <React.Fragment>
      <Navbar filterResult={filterResult} setData={setData} Categories={Categories} />
      </React.Fragment> */}
      
    </>
    
  );
}

export default App;
