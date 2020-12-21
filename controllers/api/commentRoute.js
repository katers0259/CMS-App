



router.post('/', (req, res) => {
    Comment.create(req.body)
      .then((newBook) => {
        res.json(newBook);
      })
      .catch((err) => {
        res.json(err);
      });
  });