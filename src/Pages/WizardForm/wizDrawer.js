import React from "react";
import { Link } from "react-router-dom";

class WizDrawer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="mdk-drawer js-mdk-drawer" id="default-drawer">
        <div className="mdk-drawer__content">
          <div
            className="sidebar sidebar-light sidebar-light-dodger-blue sidebar-left"
            data-perfect-scrollbar
          >
            <Link
              to="/"
              className="sidebar-brand sidebar-brand-dark bg-primary-pickled-bluewood"
            >
              <span className="avatar avatar-xl sidebar-brand-icon h-auto">
                <span className="avatar-title rounded bg-primary">
                  <img
                    src="assets/images/illustration/student/128/white.svg"
                    className="img-fluid"
                    alt="logo"
                  />
                </span>
              </span>

              <span>Luma</span>
            </Link>
            <div className="sidebar-heading"></div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <button
                  style={{
                    alignContent: "center",
                    marginLeft: "10px",
                  }}
                  className=" btn-lg btn-rounded"
                  onClick={() => this.props.ChangePage(1)}
                >
                  <span
                    className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                    style={{ color: "black" }}
                  >
                    school
                  </span>
                  <span className="sidebar-menu-text">Basic Information</span>
                </button>
                <br />
                <hr />
                <button
                  className=" btn-lg btn-rounded"
                  onClick={() => this.props.ChangePage(2)}
                  style={{
                    alignContent: "center",
                    marginLeft: "10px",
                  }}
                >
                  <span
                    className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                    style={{ color: "black" }}
                  >
                    receipt
                  </span>
                  <span className="sidebar-menu-text">
                    Target Your Students
                  </span>
                </button>
                <br />
                <hr />
              </li>

              <button
                className=" btn-lg btn-rounded"
                onClick={() => this.props.ChangePage(3)}
                style={{
                  alignContent: "center",
                  marginLeft: "10px",
                }}
              >
                <span
                  className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                  style={{ color: "black" }}
                >
                  money
                </span>
                <span className="sidebar-menu-text">
                  Add cost and cover image
                </span>
              </button>
              <br />
              <hr />
              <li className="sidebar-menu-item">
                <button
                  className=" btn-lg btn-rounded"
                  onClick={() => this.props.ChangePage(4)}
                  style={{
                    alignContent: "center",
                    marginLeft: "10px",
                  }}
                >
                  <span
                    className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                    style={{ color: "black" }}
                  >
                    import_contacts
                  </span>
                  <span className="sidebar-menu-text">Add Your Cirriculum</span>
                </button>
                <br />
                <hr />
              </li>
              {/* <li className="sidebar-menu-item">
                <button
                  className=" btn-lg btn-rounded"
                  onClick={() => this.props.ChangePage(4)}
                  style={{
                    alignContent: "center",
                    marginLeft: "10px",
                    backgroundColor: "#327AC0",
                  }}
                >
                  <span
                    className="material-icons sidebar-menu-icon sidebar-menu-icon--left"
                    style={{ color: "black" }}
                  >
                    import_contacts
                  </span>
                  <span className="sidebar-menu-text">Add Your Cirriculum</span>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default WizDrawer;
