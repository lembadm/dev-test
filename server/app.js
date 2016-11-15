const Koa = require('koa');

const app = module.exports = Koa();



// response
app.use( (ctx) => {
  ctx.body = 'Hello World'
});

app.listen(3003, () => console.log('server started 3000'));

module.exports = app;