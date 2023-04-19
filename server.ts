import express, { Express, Request, Response } from 'express';

const app: Express = express();

const path = __dirname + '/out';
const port = 8080;
app.use(express.static(path));
app.get('/privacy-policy', (req: Request, res: Response) => {
    res.sendFile(path + '/privacy-policy.html');
});
app.get('/terms-of-service', (req: Request, res: Response) => {
    res.sendFile(path + '/terms-of-service.html');
});
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path + '/index.html');
});
app.listen(port);
