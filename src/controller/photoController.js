import multer from 'multer';

import multerConfig from '../config/multerConfig';
import Foto from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { thief_id } = req.body;
        const foto = await Foto.create({ originalname, filename, thief_id });
        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Meliante não exite na base de dados'],
        });
      }
    });
  }
}

export default new PhotoController();
