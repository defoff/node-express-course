import * as express from 'express';

class App {
    public app: express.Application;
    public port = 3000;
    constructor(){
        this.app = express();
        this.app.get('/', (req: express.Request, res: express.Response) => {
            res.send('Hello World');
        });
        this.app.listen(this.port, () => {
            console.log(`Server is ready on port ${this.port}`);
        });
    }
}

export default App;