var express = require('express');

let app = express();
app.use(express.static('lib'));

app.get('/api/AnswerData', function (req, res) {
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

  res.set("Content-Type", "application/json");
  res.send(AnswersData);
 
});

app.get('/',(req,res)=>{



    //res.render('index');
    res.sendfile("views/index.htm");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
