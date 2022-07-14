import User from '../models/User';

export const getJoin = (req, res) => res.render('join', { pageTitle: 'Join' });
export const postJoin = async (req, res) => {
  const { name, email, username, password, password2, location } = req.body;
  const pageTitle = 'Join';
  const usernameExists = await User.exists({ username });

  if (password !== password2) {
    return res.status(400).render('join', { pageTitle, errorMessage: 'Password confirmation does not match.' });
  }
  if (usernameExists) {
    return res.status(400).render('join', { pageTitle, errorMessage: 'This username is already Taken.' });
  }
  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.status(400).render('join', { pageTitle, errorMessage: 'This email is already Taken.' });
  }

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });

  return res.redirect('/login');
};

export const edit = (req, res) => res.send('Edit');
export const remove = (req, res) => res.send('Remove');
export const login = (req, res) => res.send('Login');
export const logout = (req, res) => res.send('logout');
export const see = (req, res) => res.send('see');
