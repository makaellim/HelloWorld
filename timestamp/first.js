const express = require('express')
const app = express();

app.get('/:id', function (req, res) {
  res.send('GET rount on things!' + req.params.id);
});
app.post('/', function(req, res){
  res.send('POST route on things!');
});
