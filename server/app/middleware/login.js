'use strict';
module.exports = () => {
  // 判断token是否一致一致的话就给前端数据,不一致这返回token不正确
  return async function Login(ctx, next) {
    const { token, uid } = ctx.header;
    const results = await ctx.service.user.istoken(uid);
    if (results[0].token === token) {
      await next();
    } else {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        massage: 'token不存在或与数据库token不匹配',
      };
    }
  };
};
