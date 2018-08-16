const express = require('express')
const bodyParser = require('body-parser')

const {
  dialogflow,
} = require('actions-on-google');

const app = dialogflow();

app.intent('Default Fallback Intent', (conv) => {
  console.log(conv.query);
  conv.ask(conv.query);
});

express().use(bodyParser.json(), app).listen(3000)
