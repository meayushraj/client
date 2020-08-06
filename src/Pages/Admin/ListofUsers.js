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
  renderUsers() {
    if (this.props.users) {
      return this.props.users.map((user, id) => {
        return (
          <tr>
            <td>{id}</td>
            <td>{user.username}</td>
            <td>
              {user.email}&nbsp;&nbsp;
              <i class="check circle icon" style={{ color: "green" }}></i>
            </td>
            <td>{user.date}</td>
          </tr>
        );
      });
    } else {
      return <div></div>;
    }
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
            <h1 style={{ marginLeft: "20px" }}>List of Users</h1>
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

              <tbody>{this.renderUsers()}</tbody>
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
