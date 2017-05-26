const express = require('express'),
      app     = express();

const PORT = process.env.PORT || 8080;

app.use('/assets', express.static(`${__dirname}/src/assets`))
app.use('/src', express.static(`${__dirname}/src`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => console.log(`listen to ${PORT}`));
