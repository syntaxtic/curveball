import router from '@curveball/router';

export default router('/parser')
  .get(ctx => {
    ctx.status = 200;
    ctx.response.body = JSON.stringify({
      message: 'Send post request to this path.You can run the command on cli.',
      command: `curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Stewie Griffin", "title": "international assassin"}' http://localhost:4000/parser `,
    });
  })
  .post(ctx => {
    ctx.status = 200;
    ctx.response.body = `Bodyparser: ${JSON.stringify(ctx.request.body)}`;
  });
