import * as mongoose from 'mongoose';

const DB_URL = "";

export class DBHelper {
    static init(): void {
        mongoose.connect(DB_URL,)
            .then(() => console.log('Connection to mongoDB successful'))
            .catch((e: Error) => console.log(`Could not connect to mongo.\n\n${e}`));
    }
}
