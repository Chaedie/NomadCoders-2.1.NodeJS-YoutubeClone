import User from '../models/User';
import bcrypt from 'bcrypt';

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

  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect('/login');
  } catch (error) {
    return res.status(400).render('join', { pageTitle, errorMessage: error._message });
  }
};

export const getLogin = (req, res) => res.render('login', { pageTitle: 'Login' });

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = 'Login';
  const user = await User.findOne({ username });
  if (!user) {
    return res
      .status(400)
      .render('login', { pageTitle, errorMessage: 'An account with this username does not exists.' });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render('login', { pageTitle, errorMessage: 'Wrong Password.' });
  }
  console.log('Log user in coming soon');
  return res.redirect('/');
};

export const edit = (req, res) => res.send('Edit');
export const remove = (req, res) => res.send('Remove');
export const logout = (req, res) => res.send('logout');
export const see = (req, res) => res.send('see');
