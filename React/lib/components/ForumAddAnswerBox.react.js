var ForumAddAnswerBox = React.createClass({
  displayName: "ForumAddAnswerBox",


  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement("textarea", { className: "col-md-6 col-xs-8" }),
      " ",
      React.createElement("input", { type: "button", className: "btn btn-primary", value: "Add" })
    );
  }
});