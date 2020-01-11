'use strict';
const fs = require('fs');
const path = require('path');
const { writeRoute } = require('../config/index');

module.exports = () => {
    return async function router(ctx, next) {
        const { url } = ctx.request;
        const isRoute = writeRoute.some(router => {
            const reg = new RegExp(`^${router}`);
            return reg.test(url);
        });
        if (isRoute) {
            const filename = path.join(
                process.cwd(),
                '/app/public/dist/index.html'
            );
            const data = fs.readFileSync(filename, 'utf-8');
            ctx.body = data;
            await next();
        } else {
            await next();
        }
    };
};