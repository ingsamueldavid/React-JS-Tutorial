var ForumAnswers = React.createClass({
	_onMarkCorrect:function(id){

	  ForumActions.markAnswerCorrect(id);
	  
	},


	render:function(){
		let allAnswers = this.props.allAnswers;
		let answers = [];

				for(let key in allAnswers){

					let individualAnswer = <ForumAnswer key={key} id={key} answer={allAnswers[key]} onMarkCorrect={ () => {this._onMarkCorrect(key) }} />
					answers.push(individualAnswer);


				}

				return (
					<div>
					{answers}
					</div>

				);

	}





});