import React, { Component } from "react";
import AdminDrawer from "./AdminDrawer";
import Header from "../../Header/header";
import { connect } from "react-redux";
import { FetchUserDetailsAction } from "../../Actions/AdminActions";

class UserDetails extends React.Component {
  componentDidMount() {
    this.props.FetchUserDetailsAction(this.props.match.params.id);
  }
  renderDetails() {
    if (this.props.user) {
      return (
        <div
          className="ui card"
          style={{ boxShadow: "5px 5px 5px", width: "1000px" }}
        >
          <div className="content" style={{ margin: "20px", padding: "20px" }}>
            <div className="page-separator">
              <div className="page-separator__text">User Details</div>
            </div>
            <h3 style={{ margin: "40px" }}>
              User Name: {this.props.user.username}
            </h3>
            <h3 style={{ margin: "40px" }}>
              User Email-Id: {this.props.user.email}{" "}
              <i class="check circle icon" style={{ color: "green" }}></i>
            </h3>
            <h3 style={{ margin: "40px" }}>
              Date Of Joining: {this.props.user.date}
            </h3>
            <h3 style={{ margin: "40px" }}>Age: {this.props.user.age}</h3>
            <h3 style={{ margin: "40px" }}>Gender: {this.props.user.sex}</h3>
            <h3 style={{ margin: "40px" }}>
              Location: {this.props.user.location}
            </h3>
            <h3 style={{ margin: "40px" }}>
              Language : {this.props.user.language}
            </h3>
            <h3 style={{ margin: "40px" }}>
              Field Of Interests :
              <ul>
                <li>{this.props.user.fieldOfIntrest}</li>
              </ul>
            </h3>
            <div className="page-separator">
              <div className="page-separator__text">Courses Purchased</div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    console.log(this.props.user);
    return (
      <div className="layout-boxed">
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <Header />
            <div className="page-section">
              <div className="container-fluid page__container">
                <br />
                <h1>Details of User</h1>
                <br />

                {this.renderDetails()}
              </div>
            </div>
          </div>

          <AdminDrawer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user.user };
};
export default connect(mapStateToProps, { FetchUserDetailsAction })(
  UserDetails
);
