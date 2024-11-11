import AutoIncrementFactory from 'mongoose-sequence';
import connection from './connection.js';

const AutoIncrement = AutoIncrementFactory(connection);

export default AutoIncrement;