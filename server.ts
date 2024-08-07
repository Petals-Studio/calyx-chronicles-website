import express, { Express, Request, Response } from 'express';

const app: Express = express();

const path = __dirname + '/out';
const port = 8080;

const pages = ['privacy-policy', 'terms-of-service', 'about-us'];

app.use(function(req, res, next) {
    const isHtmlPage = !pages.every(page => !req.url.includes(page));
    if (req.url.includes('assetlinks.json')) {
        res.setHeader('Cache-Control', 'public, must-revalidate, max-age=30');
    } else if (isHtmlPage || req.url === '/') {
        res.setHeader('Cache-Control', 'public, must-revalidate, max-age=30');
    } else {
        res.setHeader('Cache-Control', 'public, max-age-86400');
    }
    next();
});
app.use(express.static(path));

app.get('/privacy-policy', (req: Request, res: Response) => {
    res.sendFile(path + '/privacy-policy.html');
});
app.get('/terms-of-service', (req: Request, res: Response) => {
    res.sendFile(path + '/terms-of-service.html');
});
app.get('/about-us', (req: Request, res: Response) => {
    res.sendFile(path + '/about-us.html');
});
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path + '/index.html');
});
app.listen(port);
