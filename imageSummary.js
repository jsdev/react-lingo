const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function writeHtmlFile (directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    throw new Error(`Directory ${directoryPath} does not exist.`);
  }
  if (!fs.lstatSync(directoryPath).isDirectory()) {
    throw new Error(`${directoryPath} is not a directory.`);
  }
  fs.readdir(directoryPath, (err, files) => {
    if (err) throw err;
    const jsxFiles = files.filter(file => path.extname(file) === '.jsx');
    const htmlList = jsxFiles.map(file => {
      const fileContents = fs.readFileSync(path.join(directoryPath, file), 'utf8');
      const $ = cheerio.load(fileContents);
      const imgElements = $('img');
      if (imgElements.length > 0) {
        const imgList = imgElements.map((i, el) => `<li>${$(el).attr('src')}</li>`).get().join('');
        return `<li>${file}<ul>${imgList}</ul></li>`;
      } else {
        return '';
      }
    }).join('');
    const html = `<ul>${htmlList}</ul>`;
    fs.writeFile(path.join(directoryPath, 'image-summary.html'), html, err => {
      if (err) throw err;
      console.log('HTML file has been created successfully!');
    });
  });
}
