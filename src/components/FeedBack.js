import React from "react";
const uuidv4 = require('uuid/v4')
class FeedBack extends React.Component {
  state = {
    feedBackDescription: ""
  }
  addFeedBack = () => {
    const feedBack = {
      id: uuidv4(),
      feedBack: this.state.feedBackDescription,
      completed: false
    }
    this.props.newTask(feedBack);
    this.setState({ feedBackDescription: "" });
  }
  feedBackDescriptionChanged = (event) => {
    let feedBackDescription = this.state.feedBackDescription;
    feedBackDescription = event.target.value;
    this.setState({ feedBackDescription });

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
            value={this.state.feedBackDescription}
            onChange={this.feedBackDescriptionChanged}
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
