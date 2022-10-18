import React from "react";
import { connect } from "react-redux";
import { inCr, deCr, reSet, fetchData } from "../Redux/Players/PlayersActions";
// import { fetchData } from '../Redux/Players/PlayersActions'
import Card from "react-bootstrap/Card";

const PlayersContainer = ({ userData }) => {
  return (
    <>
      <div className="card d-flex">
        {userData.data &&
          userData.data.map((d, i) => {
            return (
              <>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <h2>Count-{d.score}</h2>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Img variant="top" src={d.img} />
                    <Card.Text>
                      <button>+</button>
                      <button>-</button>
                    </Card.Text>
                    <button>reset</button>
                    {/* <Button variant="primary">Reset</Button> */}
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.player,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer);
