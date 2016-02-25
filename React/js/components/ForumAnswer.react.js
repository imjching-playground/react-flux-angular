var ForumAnswer = React.createClass({

  propTypes: {
    answer: React.PropTypes.object.isRequired
  },

  render: function() {
    var answer = this.props.answer;

    var markAnswer;
    if (!answer.correct) {
      markAnswer = <div className="pull-right">
        <small><a href="#">Mark as correct</a></small>
      </div>
    }

    var classNames = "panel-body";
    if (answer.correct) {
      classNames += " bg-success";
    }

    return (
      <div className="panel panel-default">
        <div className={ classNames }>
          { answer.body }
          { markAnswer }
        </div>
      </div>
    );
  }
});