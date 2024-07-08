import router from '@curveball/router';

export default router('/', ctx => {
  ctx.status = 200;
  ctx.response.body = JSON.stringify({
    message: 'Hello world! This is home page.',
  });
});
