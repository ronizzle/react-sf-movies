const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('/', function (req, res) {

})

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
