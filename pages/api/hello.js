export default (req, res) => {
  res.status(200).json({
    text: "Hello another change" + req.body,
  });
};
