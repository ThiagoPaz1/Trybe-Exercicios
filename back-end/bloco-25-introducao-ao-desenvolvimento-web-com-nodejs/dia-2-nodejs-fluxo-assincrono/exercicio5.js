const fs = require('fs').promises;
const severalFiles = () => {
  const words = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const newFiles = words.map((file, index) => {
    fs.writeFile(`file${index + 1}.txt`, file);
  });
  
  const readNewFiles = newFiles.map( async (file, index) => {
    const result = await fs.readFile(`file${index + 1}.txt`, 'utf8')
    const readFiles = await result;
    return readFiles;
  });

  return readNewFiles;
}

Promise.all(severalFiles())
.then((result1) => {
  const reduceResult = result1.reduce((acc, elemAt) => acc + ' ' + elemAt);
  return reduceResult;
})
.then((result2) => {
  fs.writeFile('fileAll.txt', result2)
  .then(() => console.log('Arquivo criado com sucesso.'))
  .catch((err) => console.log(`Ocorreu um erro durante a criação do arquivo ${err.message}`))
})
.catch((err) => console.log(`Ocorreu um erro durante a leitura dos arquivos ${err.message}`))
