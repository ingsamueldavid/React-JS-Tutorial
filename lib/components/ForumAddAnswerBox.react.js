var ForumAddAnswerBox = React.createClass({
	displayName: "ForumAddAnswerBox",


	_addAnswer: function () {

		var textAreaText = this.myTextArea.value;
		this.props.onAddAnswer(textAreaText);
	},

	render: function () {

		return React.createElement(
			"div",
			null,
			React.createElement("textarea", { id: "addAnswer", className: "col-md-6 col-xs-8", ref: ref => this.myTextArea = ref }),
			" ",
			React.createElement("input", { type: "button", className: "btn btn-primary", value: "Add", onClick: this._addAnswer })
		);
	}

});