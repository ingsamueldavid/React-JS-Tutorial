var ForumAnswer = React.createClass({
	displayName: "ForumAnswer",


	propTypes: {

		answer: React.PropTypes.object.isRequired,
		onMarkCorrect: React.PropTypes.func.isRequired

	},
	_MarkCorrect: function () {
		this.props.onMarkCorrect(this.props.id);
	},
	render: function () {
		var answer = this.props.answer;

		return React.createElement(
			"div",
			{ className: "panel panel-default" },
			React.createElement(
				"div",
				{ className: "panel-body" },
				answer.body,
				React.createElement(
					"div",
					{ className: "pull-right" },
					React.createElement(
						"small",
						null,
						React.createElement(
							"a",
							{ href: "#", onClick: this._MarkCorrect },
							"Mark as correct "
						)
					)
				)
			)
		);
	}

});