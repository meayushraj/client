import React from "react";
import AdminDrawer from "./AdminDrawer";
import Header from "../../Header/header";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { FetchAllUsersActions } from "../../Actions/AdminActions";

class ListofUsers extends React.Component {
  componentDidMount() {
    this.props.FetchAllUsersActions();
  }
  render() {
    console.log(this.props.users);
    return (
      <div className="layout-boxed">
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <Header />
            <br />
            <h1>List of Users</h1>
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Serial no.</th>
                  <th>User Name</th>
                  <th>Email id</th>
                  <th>Date of joining</th>
                </tr>
              </thead>

              <tbody>
                <tr onClick={() => console.log("clicked")}>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <AdminDrawer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { users: state.Users.users };
};
export default connect(mapStateToProps, { FetchAllUsersActions })(ListofUsers);
