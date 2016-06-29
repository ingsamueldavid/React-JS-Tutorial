var React = require('react');
var ForumHeader = require('./ForumHeader.react');
var ForumQuestion = require('./ForumQuestion.react');
var ForumAnswers = require('./ForumAnswers.react');
var ForumAddAnswerBox = require('./ForumAddAnswerBox.react');
var ForumActions = require('../actions/ForumActions');
var ForumStore = require('../stores/ForumStore');


var Forum = React.createClass({
    
    getInitialState: function() {
        
        return {
            allAnswers: []
        }

        
    },

    _onChange:function(){


        ForumStore.getAnswers().done((data)=>{

            this.setState({allAnswers:data})
    
        });
     

    },
componentDidMount:function(){

  ForumStore.addChangeListener(this._onChange);
  ForumStore.getAnswers().done((data)=>{

    this.setState({allAnswers:data})
    
  });
  

},
   componentWillUnmount:function(){
        ForumStore.removeListener(this._onChange);

},
    render: function() {
        
        return (
                <div>
                        <ForumHeader/>

                        <div className="container">
                        <ForumQuestion />
                        <hr />
                        <ForumAnswers allAnswers={this.state.allAnswers} />
                        <hr />
                        <h4>Add an answer </h4>

                        <ForumAddAnswerBox onAddAnswer={this._onAddAnswer}/>


                        </div>
                </div>

            );
        
    },_onAddAnswer:function(answerText){

        ForumActions.addNewAnswer(answerText);

    }
    
});

module.exports = Forum;
