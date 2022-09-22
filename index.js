const express = require('express');
const routerApi = require('./routes');


const app = express();

app.use(express.json());

routerApi(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('app port ' +  port);
  return {app_port: port};
});

app.get('/', (req, res) => {
  res.send('Hello from my server');
});
