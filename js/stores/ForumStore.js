var AnswersData= {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }
            }
        


var ForumStore = new EventEmitter();

ForumStore.emitChange = function (){

    this.emit('change');
}
ForumStore.addChangeListener = function(listener){

    this.on('change',listener);
}


ForumStore.getAnswers = function(){

    return AnswersData;

}   



ForumStore.addAnswers = function(newAnswer){

    AnswersData[Object.keys(AnswersData).length+1] = {
        body:newAnswer,
        correct:false
    };

    this.emit('change');

}  


ForumStore.markAsCorrect = function(id){

    for(key in AnswersData){
        AnswersData[key].correct = false;

    }

    AnswersData[id].correct=true;

    this.emit('change');

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