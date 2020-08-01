import React from "react";
import { Link } from "react-router-dom";

class StudentDrawer extends React.Component {
  render() {
    return (
      <div className="mdk-drawer js-mdk-drawer" id="default-drawer">
        <div className="mdk-drawer__content">
          <div className="sidebar sidebar-light sidebar-light-dodger-blue sidebar-left">
            <Link
              to="/"
              className="sidebar-brand sidebar-brand-dark bg-primary-pickled-bluewood"
            >
              <span className="avatar avatar-xl sidebar-brand-icon h-auto">
                <span className="avatar-title rounded bg-primary">
                  <img
                    src="assets/white.svg"
                    className="img-fluid"
                    alt="logo"
                  />
                </span>
              </span>

              <span>Luma</span>
            </Link>
            <div className="sidebar-heading">Student</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <Link className="sidebar-menu-button" to="/">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    home
                  </span>
                  <span className="sidebar-menu-text">Home</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link className="sidebar-menu-button" to="/courses">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    local_library
                  </span>
                  <span className="sidebar-menu-text active">
                    Browse Courses
                  </span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link className="sidebar-menu-button" to="boxed-paths.html">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    style
                  </span>
                  <span className="sidebar-menu-text">Browse Paths</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link className="sidebar-menu-button" to="/student-dashboard">
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    account_box
                  </span>
                  <span className="sidebar-menu-text">Student Dashboard</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="boxed-student-my-courses.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    search
                  </span>
                  <span className="sidebar-menu-text">My Courses</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="boxed-student-paths.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    timeline
                  </span>
                  <span className="sidebar-menu-text">My Paths</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="boxed-student-path.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    change_history
                  </span>
                  <span className="sidebar-menu-text">Path Details</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      //   <div className="mdk-drawer js-mdk-drawer" id="default-drawer">
      //     <div className="mdk-drawer__content">
      //       <div className="sidebar sidebar-light sidebar-light-dodger-blue sidebar-left">
      //         <Link
      //           to="/"
      //           className="sidebar-brand sidebar-brand-dark bg-primary-pickled-bluewood"
      //         >
      //           <span className="avatar avatar-xl sidebar-brand-icon h-auto">
      //             <span className="avatar-title rounded bg-primary">
      //               <img
      //                 src="assets/images/illustration/student/128/white.svg"
      //                 className="img-fluid"
      //                 alt="logo"
      //               />
      //             </span>
      //           </span>

      //           <span>Luma</span>
      //         </Link>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default StudentDrawer;
