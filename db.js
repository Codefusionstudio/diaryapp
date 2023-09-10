const mongoose = require ("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser : true,
        UseUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connection Established");
    } catch (error) {
        console.log(error);
        console.log("Connection Failed");
    }
}