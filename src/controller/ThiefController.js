import Thief from '../models/Thief';
import Photo from '../models/Photo';

class ThiefController {
  async store(req, res) {
    try {
      const newThief = await Thief.create(req.body);
      const {
        name, nickname, actingarea, obs,
      } = newThief;
      return res.json({
        name, nickname, actingarea, obs,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const allThief = await Thief.findAll({
        attributes: ['id', 'name', 'nickname', 'actingarea', 'obs'],
        order: [['name', 'ASC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['url', 'filename'],
        },
      });
      return res.json(allThief);
    } catch (e) {
      return res.status(200).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const thief = await Thief.findByPk(req.params.id);
      return res.json(thief);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Parametro id não enviado'],
        });
      }

      const thief = await Thief.findByPk(req.params.id);

      if (!thief) {
        return res.status(400).json({
          errors: ['Meliante não encontrado'],
        });
      }
      const newData = await thief.update(req.body);
      return res.status(200).json(newData);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new ThiefController();
