var EventEmitter = require('events').EventEmitter;
var ForumDispatcher = require('../Dispatcher/ForumDispatcher');
var ForumConstants = require('../constants/ForumConstants');



var ForumStore = new EventEmitter();

ForumStore.emitChange = function (){

    this.emit('change');
}
ForumStore.addChangeListener = function(listener){

    this.on('change',listener);
}


ForumStore.getAnswers = function(){

    return $.getJSON('/api/AnswerData');   
}   



ForumStore.addAnswers = function(newAnswer){

    $.post( "/api/AddAnswer", { newAnswer: newAnswer} ).done( data => {
          ForumStore.emit('change');
    });

}  


ForumStore.markAsCorrect = function(id){

   $.post( "/api/MarkAsCorrect", { id: id} ).then( data => {
          console.log(data);
          ForumStore.emit('change');
    });

}      

function evaluateDispatchedActions(action){

        switch(action.actionType){

            case ForumConstants.FORUM_ANSWER_ADDED:{
                console.log('ANswer added!');
                ForumStore.addAnswers(action.newAnswer);
                break;
            }


            case ForumConstants.FORUM_ANSWER_MARKED_CORRECT:{
               console.log('answer marked correct!');
                ForumStore.markAsCorrect(action.id);
                break;
            }

        } 
}

ForumDispatcher.register(evaluateDispatchedActions);

module.exports = ForumStore;