var React = require('react');

var ForumAddAnswerBox = React.createClass({
	
	_addAnswer:function(){
			
			var textAreaText = this.myTextArea.value
			this.props.onAddAnswer(textAreaText);
		},

	render:function(){

		return (
			<div>
				  <textarea id="addAnswer" className="col-md-6 col-xs-8" ref={ (ref) => this.myTextArea = ref} ></textarea>
                    &nbsp;
                   <input type="button" className="btn btn-primary" value="Add" onClick={this._addAnswer}/>
			</div>
			);



	}

});

module.exports = ForumAddAnswerBox;