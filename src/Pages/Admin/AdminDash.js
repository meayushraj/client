import React from "react";
import Header from "../../Header/header";
import AdminDrawer from "./AdminDrawer";

class AdminDash extends React.Component {
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
          </div>
          <AdminDrawer />
        </div>
      </div>
    );
  }
}
export default AdminDash;
