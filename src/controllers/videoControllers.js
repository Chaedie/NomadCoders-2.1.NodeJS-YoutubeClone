export const trending = (req, res) => res.render('home', { pageTitle: 'Home' });
export const see = (req, res) => res.render('watch');
export const edit = (req, res) => {
  return res.send(`Edit #${req.params.id}`);
};

export const search = (req, res) => res.send('search');
export const upload = (req, res) => res.send('upload');
export const deleteVideo = (req, res) => res.send(`deleteVideo #${req.params.id}`);

export default trending;
