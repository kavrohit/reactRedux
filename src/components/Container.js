import React from 'react';
import {connect} from 'react-redux';
import { NumOperation } from '../Redux';


const Container = (props) => {
  return (
    <>
    <h2>Number:{props.NumValue}</h2>
    <button onClick={props.NumOperation}>OperationButton</button>
    </>
  )
}

const mapStateToProps = (state) =>{
  return{
    NumValue:state.NumValue
  }
};
const mapDispatchToProps = (dispatch) =>{
  return {
    NumOperation:()=> dispatch(NumOperation())
  }
};

export default connect
(mapStateToProps,mapDispatchToProps)
(Container);