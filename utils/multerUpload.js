const multer = require("multer");

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, './images'),
  filename: (_, file, cb) => {
    const { originalname } = file;

    const auxArray = originalname.split(".");
    const extension = auxArray[1];
    const oldFileName = auxArray[0];
    
    // Responsável por alterar o filename, com base na string passada como segundo parâmetro
    cb(null, `${oldFileName}_${Date.now()}.${extension}`);
  }
});
const upload = multer({ storage });

module.exports = upload;