import express from 'express';

const router = express.Router();

router.get('/sighup', (req, res) => {
  res.send('Sighup endpoint');
});

router.get('/login', (req, res) => {
  res.send('Login endpoint');
});

router.get('/logout', (req, res) => {
  res.send('Logout endpoint');
});

export default router;
