import React from "react";
import Header from "../../Header/header";
import AdminDrawer from "./AdminDrawer";
import { connect } from "react-redux";

class AdminDash extends React.Component {
  componentDidMount() {
    if (this.props.Credentials.isAuthenticated === false) {
      this.props.history.push("/admin/login");
    }
  }
  render() {
    return (
      <div className="layout-boxed">
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <Header />
            <h1>ADMIN DASHBOARD IS UNDER CONSTRUCTION!!</h1>
          </div>

          <AdminDrawer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Credentials: state.Credentials,
});
export default connect(mapStateToProps)(AdminDash);
