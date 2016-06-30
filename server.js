let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(express.static('lib'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let AnswersData= {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for   building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }
            }

app.get('/',(req,res)=>{
    res.sendfile("views/index.htm");
})

app.get('/api/AnswerData',  (req, res) => {


  res.set("Content-Type", "application/json");
  res.send(AnswersData);
 
});


app.post('/api/AddAnswer', (req, res) => {
let newAnswer = req.body.newAnswer;

 AnswersData[Object.keys(AnswersData).length+1] = {
        body:newAnswer,
        correct:false
    };

  res.set("Content-Type", "application/json");
  res.send(AnswersData);

});

app.post('/api/MarkAsCorrect', (req, res) => {
  
  let id = req.body.id;
  for(key in AnswersData){
        AnswersData[key].correct = false;

    }
    AnswersData[id].correct=true;

   res.set("Content-Type", "application/json");
   res.send(AnswersData);

});



app.listen(3000,  () =>{
  console.log('Example app listening on port 3000!');
});
