import express from 'express';
import falcorExpress from 'falcor-express';
import home from './home';
import authentication from './authentication';
import profile from './profile';

const app = express();

app.use('/', home);
app.use('/auth', authentication);
app.use('/', profile);

export default app;
