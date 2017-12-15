import mongoose from 'mongoose';

require('dotenv').config();

/**
 * Set mongoose promise
 */
mongoose.Promise = global.Promise;

/**
 * Connect to DB
 * @type {MongooseThenable}
 */
export default mongoose.connect(process.env.DB_HOST, {
    useMongoClient: true
}).then(() => {
    console.log('Connected to DB!');
}, (err) => {
    console.log(err);
    throw new Error('An error occurred while connecting to DB!')
});