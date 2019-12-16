import React from "react";
const uuidv4 = require('uuid/v4')
class FeedBack extends React.Component {
  state = {
    feedBack: ""
  }
  addFeedBack = () => {
    const task = {
      id: uuidv4(),
      feedBack: this.state.feedBack,
      completed: false
    }
    this.props.newTask(task);
    this.setState({ feedBack: "" });
  }
  feedBackChanged = (event) => {
    let feedBack = this.state.feedBack;
    feedBack = event.target.value;
    this.setState({ feedBack });

  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-8">
          <input
            className="form-control"
            type="text"
            id="addFeedBack"
            placeholder="Please leave the feedback..."
            value={this.state.feedBack}
            onChange={this.feedBackChanged}
          />
        </div>
        <div className="col-12 col-md-4">
          <button type="button" className="btn btn-success" onClick={this.addFeedBack}>
            Feedback
         </button>
        </div>
      </div>
    );
  }
}
export default FeedBack;

