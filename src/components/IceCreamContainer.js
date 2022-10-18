import React from 'react';
import {connect}from 'react-redux'
import { buyIceCream } from '../Redux';


const IceCreamContainer = (props) => {
  return (
    <>
    <div>
      <h2>Number of IceCreams-{props.NumOfIceCream}</h2>
      <button onClick={props.buyIceCream}>BUY ICECREAM</button>
    </div>
    </>
  )
}

const mapStateToProps =(state)=>{
  return {
    NumOfIceCream:state.iceCream.NumOfIceCream,
  }
};

const mapDispatchToProps = dispatch =>{
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);
