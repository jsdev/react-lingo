const request = require('request');
const cheerio = require('cheerio');


let missed = ['alcades', 'aloetic', 'ambaris', 'anlauts', 'areally', 'aristos', 'arkoses', 'armaria', 'curiums'];

missed.forEach((word) => {
  const url = `https://www.dictionary.com/browse/${word}`;

  request(url, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html);
      const complexity = $('span[data-testid="word-complexity-badge"]');
      const h1 = $('h1');
      console.log('{ word:', "'" + word + "'", ',\tisCapatalize: ', word[0].toUpperCase() === h1.text()[0], ',\tisRoot: ', word === h1.text(), ',\tcomplexity:', "'" + complexity.text() + "'}," || "'unknown'},");
    }
  });
});