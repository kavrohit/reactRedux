import React from "react";
import { connect } from "react-redux";
import { decr, incr } from "../Redux/Array/ArrayActions";

const ArrayContainer = (props) => {
  console.log('----------props',props);

  return (
    <>
      {props.output &&
        props.output.map((value, i) => {
          return (
            <>
              <h2> counters-{value} </h2>
              <div>
                <button onClick={()=>props.increment(i)}>+</button>
                <button onClick={()=>props.decrement(i)}>-</button>
              </div>
            </>
          );
        })}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('-----------state-counters',state.coutners);
  return {
    output: state.counters
  }
  
};
const mapDispatchToProps = dispatch => {
  return {
     increment: (number) => dispatch(incr(number)),
     decrement: (number) => dispatch(decr(number)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayContainer);
