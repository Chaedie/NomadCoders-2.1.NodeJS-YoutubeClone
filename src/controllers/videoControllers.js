export const trending = (req, res) => res.send('Home page Videos');
export const see = (req, res) => {
  return res.send(`see #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send(`Edit #${req.params.id}`);
};

export const search = (req, res) => res.send('search');
export const upload = (req, res) => res.send('upload');
export const deleteVideo = (req, res) => res.send(`deleteVideo #${req.params.id}`);

export default trending;
