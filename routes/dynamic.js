import router from '@curveball/router';

export default router('/dynamic/:id', ctx => {
  ctx.status = 200;
  ctx.response.body = JSON.stringify({
    message: `Dynamic path with the id ${ctx.params.id}`,
  });
});
