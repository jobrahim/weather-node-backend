const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('app port ' +  port);
  return {app_port: port};
});

app.get('/', (req, res) => {
  res.send('Hello from my server');
});
