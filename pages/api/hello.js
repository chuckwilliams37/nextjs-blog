export default (req, res) => {
  res
    .status(200)
    .json({
      text: "Hello",
      headers: JSON.stringify(req.headers),
      method: req.method,
    });
};
