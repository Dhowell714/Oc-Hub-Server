const Express = require("express");
const app = Express();

app.listen(4000, () => {
    console.log(`[Server]: App is listening on 4000.`);
});