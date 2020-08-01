import React from "react";
import Header from "../../Header/header";
import axios from "axios";
import { connect } from "react-redux";
import { FetchCourseByIdAction } from "../../Actions/courseActions";

class TakeCourse extends React.Component {
  state = { video: "" };

  componentDidMount() {
    this.props.FetchCourseByIdAction(this.props.match.params.id);
    console.log(this.props);
  }

  renderSections() {
    return this.props.presentcourse.sections.map((section) => {
      return (
        <div className="item" key={section._id}>
          <div className="card mb-0">
            <ul class="accordion accordion--boxed js-accordion mb-0" id="toc-2">
              <li class="accordion__item">
                <a
                  class="accordion__toggle"
                  data-toggle="collapse"
                  data-parent="#toc-2"
                  href={`#toc-content-${section._id}`}
                >
                  <span class="flex">{section.SectionTitle}</span>
                  <span class="accordion__toggle-icon material-icons">
                    keyboard_arrow_down
                  </span>
                </a>
                {this.renderLectures(section)}
              </li>
            </ul>
          </div>
          {/* <div className="content">{section.SectionTitle}</div> */}
        </div>
      );
    });
  }
  renderLectures(section) {
    console.log(section.taskList.length);
    return (
      <div class="accordion__menu">
        <ul class="list-unstyled collapse" id={`toc-content-${section._id}`}>
          {section.taskList.map((lecture) => {
            console.log(lecture.VideoUrl);
            return (
              <li class="accordion__menu-link">
                <span class="material-icons icon-16pt icon--left text-body">
                  play_arrow
                </span>
                <a
                  class="flex"
                  onClick={() => this.setState({ video: lecture.VideoURL })}
                >
                  {lecture.VideoName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  rendervideo = (url) => {
    console.log(111);
    return (
      <video height="500" width="900" src={url} controls>
        {/* <source src={url} type="video/mp4" /> */}
      </video>
    );
  };
  renderfees = () => {
    if (this.props.presentcourse.feeStructure === "free") {
      return <p>{this.props.presentcourse.feeStructure}</p>;
    } else {
      return <p>Only at ${this.props.presentcourse.price}</p>;
    }
  };
  rendercourse = () => {
    if (this.props.presentcourse) {
      return (
        <div>
          <div
            class="ui items"
            style={{ backgroundColor: "#303956", padding: "10px" }}
          >
            <div class="item">
              <div class="image">
                <img
                  src={this.props.presentcourse.imageUrl}
                  style={{
                    borderRadius: "100px",
                    height: "150px",
                    width: "150px",
                  }}
                />
              </div>

              <div class="content" style={{ color: "white" }}>
                <h2 style={{ color: "white" }}>
                  {this.props.presentcourse.title}
                </h2>
                <div className="d-flex">
                  <div className="rating flex">
                    <span className="rating__item">
                      <span className="material-icons">star</span>
                    </span>
                    <span className="rating__item">
                      <span className="material-icons">star</span>
                    </span>
                    <span className="rating__item">
                      <span className="material-icons">star</span>
                    </span>
                    <span className="rating__item">
                      <span className="material-icons">star</span>
                    </span>
                    <span className="rating__item">
                      <span className="material-icons">star_border</span>
                    </span>
                  </div>
                </div>
                {this.renderfees()}
                <p>{this.props.presentcourse.learning}</p>

                <p>by--{this.props.presentcourse.username}</p>

                <div class="description"></div>
              </div>
            </div>
          </div>

          <div class="ui two column very relaxed grid">
            <div class="column" style={{ width: "600px" }}>
              <h1>{this.props.presentcourse.title}</h1>
              <h3>Course Material</h3>
              {this.renderSections()}
              <hr />
            </div>
            <div className="column">{this.rendervideo(this.state.video)}</div>
          </div>
          <hr />
          <hr />
          <div className="container">
            <div class="ui comments">
              <h2 class="ui dividing header">Comments and Reviews</h2>
              <div class="comment">
                <a class="avatar">
                  <img
                    src="\assets\images\256_daniel-gaffey-1060698-unsplash.jpg"
                    style={{ borderRadius: "50px" }}
                  />
                </a>
                <div class="content">
                  <a class="author">Matt</a>
                  <div className="d-flex">
                    <div className="rating flex">
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star_border</span>
                      </span>
                    </div>
                  </div>
                  <div class="metadata">
                    <span class="date">Today at 5:42PM</span>
                  </div>
                  <div class="text">How artistic!</div>
                  <div class="actions">
                    <a class="reply">Reply</a>
                  </div>
                </div>
              </div>
              <div class="comment">
                <a class="avatar">
                  <img
                    src="\assets\images\256_jeremy-banks-798787-unsplash.jpg"
                    style={{ borderRadius: "50px" }}
                  />
                </a>
                <div class="content">
                  <a class="author">Elliot Fu</a>
                  <div className="d-flex">
                    <div className="rating flex">
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star_border</span>
                      </span>
                    </div>
                  </div>
                  <div class="metadata">
                    <span class="date">Yesterday at 12:30AM</span>
                  </div>
                  <div class="text">
                    <p>
                      This has been very useful for my research. Thanks as well!
                    </p>
                  </div>
                  <div class="actions">
                    <a class="reply">Reply</a>
                  </div>
                </div>
                <div class="comments">
                  <div class="comment">
                    <a class="avatar">
                      <img
                        src="\assets\images\256_luke-porter-261779-unsplash.jpg"
                        style={{ borderRadius: "50px" }}
                      />
                    </a>
                    <div class="content">
                      <a class="author">Jenny Hess</a>
                      <div className="d-flex">
                        <div className="rating flex">
                          <span className="rating__item">
                            <span className="material-icons">star</span>
                          </span>
                          <span className="rating__item">
                            <span className="material-icons">star</span>
                          </span>
                          <span className="rating__item">
                            <span className="material-icons">star</span>
                          </span>
                          <span className="rating__item">
                            <span className="material-icons">star</span>
                          </span>
                          <span className="rating__item">
                            <span className="material-icons">star_border</span>
                          </span>
                        </div>
                      </div>
                      <div class="metadata">
                        <span class="date">Just now</span>
                      </div>
                      <div class="text">Elliot you are always so right :)</div>
                      <div class="actions">
                        <a class="reply">Reply</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <a class="avatar">
                  <img
                    src="\assets\images\256_rsz_1andy-lee-642320-unsplash.jpg"
                    style={{ borderRadius: "50px" }}
                  />
                </a>
                <div class="content">
                  <a class="author">Joe Henderson</a>
                  <div className="d-flex">
                    <div className="rating flex">
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star_border</span>
                      </span>
                    </div>
                  </div>
                  <div class="metadata">
                    <span class="date">5 days ago</span>
                  </div>
                  <div class="text">Dude, this is awesome. Thanks so much</div>
                  <div class="actions">
                    <a class="reply">Reply</a>
                  </div>
                </div>
              </div>
              <form class="ui reply form">
                <div class="field">
                  <textarea></textarea>
                </div>
                <div class="ui blue labeled submit icon button">
                  <i class="icon edit"></i> Add Reply
                </div>
              </form>
            </div>
            <div style={{ boxShadow: "3px 2px 3px 2px", padding: "20px" }}>
              <h2>Discription</h2>
              <p>{this.props.presentcourse.description}</p>
            </div>
            <br />
            <br />
            <div style={{ boxShadow: "3px 2px 3px 2px", padding: "20px" }}>
              <h2>Prerequisites of this course</h2>
              <p>{this.props.presentcourse.prerequisites}</p>
            </div>
            <br />
            <br />
            <div style={{ boxShadow: "3px 2px 3px 2px", padding: "20px" }}>
              <h2>Who all can Take this Course?</h2>
              <p>{this.props.presentcourse.targetStudent}</p>
            </div>
            <br />
            <br />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  render() {
    console.log(this.props);
    console.log(this.state);
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
        </div>
        <div className="ui segment">{this.rendercourse()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { presentcourse: state.course.presentcourse };
};
export default connect(mapStateToProps, { FetchCourseByIdAction })(TakeCourse);
