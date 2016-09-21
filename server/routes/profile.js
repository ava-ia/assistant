import { Router } from 'express';

const router = new Router();

router.get('/signin', (req, res) => {
  res.send('New here? 💋');
});

router.get('/login', (req, res) => {
  res.send('New here? 💋');
});

router.get('/profile', (req, res) => {
  const bindings = {
    store: {},
    session: res.locals.session,
    markup: '<h2>Hello World</h2>',
  };

  res.render('index.ejs', bindings);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

export default router;
