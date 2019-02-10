function handler(evt, ctx, done) {
    console.log("Test" + evt);
    done(null, {
        statusCode: "200",
        message: "Hello World",
        body: { hello: "World 2s" },
        evt: evt,
        ctx: ctx,
    });
}

module.exports.handler = handler;