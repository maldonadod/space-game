const express = require('express'),
      app     = express();

const PORT = process.env.PORT || 8080;

app.use('/assets', express.static(`${__dirname}/dist/assets`))
app.use('/dist', express.static(`${__dirname}/dist`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => console.log(`listen to ${PORT}`));
