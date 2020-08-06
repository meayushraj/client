import React from "react";
import AdminDrawer from "./AdminDrawer";
import Header from "../../Header/header";

class UserDetails extends React.Component {
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
            <br />
            <h1>Details of User</h1>
            <br />
          </div>

          <AdminDrawer />
        </div>
      </div>
    );
  }
}
export default UserDetails;
