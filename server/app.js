const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


//allow cross origin requests
app.use(cors());

// connection to mongodb
mongoose.connect('mongodb://localhost:27017/test');


mongoose.connection.once('open',()=>{
    console.log("connection using mongoose for mongoose");
})


app.use('/test', (req,res)=>{
    res.send('success');
})

app.use('/graphql', graphqlHTTP({
    schema : schema,
    graphiql : true
}))

app.listen(4000, () => {
    console.log('server running on port 4000');

});