import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { addUser } from "./Actions/actions";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateUser from "./UpdateUser";

function App(props) {
  const [users, setUsers] = useState();
  const [username, setUserName] = useState();
  const [age, setAge] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const usersFromState = useSelector((state) => state.users);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName: username,
      age: age,
    };
    // props.addUser(newUser);

    dispatch(addUser(newUser));
  };

  console.log(props);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <input
          placeholder="age"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>

      {usersFromState.map((user) => {
        return (
          <div>
            <h1>{user.userName}</h1>
            <h2>{user.age}</h2>
            {console.log(user)}
            <button onClick={handleShow}>update</button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <UpdateUser users={user} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  addUser: addUser,
};
export default App;
// export default connect(null, mapDispatchToProps)(App);
