const Koa = require('koa');
const Send = require('koa-send');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router
.get('/', async (ctx) => {
	await Send(ctx, './static/html/index.html', {root: 'dist'});
})
.get('/(.*).js', async (ctx) => {
	await Send(ctx, ctx.params[0] + '.js', {root: 'dist'});
});

app.use(router.routes());

app.listen(3001);
