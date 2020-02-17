import * as Yup from 'yup';
import Workers from '../models/Workers';

class WorkersController {
  async index(req, res) {
    const workers = await Workers.findAll();

    const docs = workers;

    return res.json({ docs });
  }

  async show(req, res) {
    const { office } = req.params;

    const workers = await Workers.findAll({ where: { office } });

    const docs = workers;

    return res.json({ docs });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      age: Yup.number().required(),
      office: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'A validação falhou...' });
    }

    const { name, age, office } = await Workers.create(req.body);

    return res.json({ message: 'Funcionário registrado com sucesso!' });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      age: Yup.number(),
      office: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'A validação falhou... ' });
    }

    const { id } = req.body;

    const user = await Workers.findByPk(id);

    const { name, age, office } = await user.update(req.body);

    return res.json({ message: 'Funcionário atualizado com sucesso!' });
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'ID for delete is invalid...' });
    }

    const { id } = req.params;

    await Workers.destroy({ where: { id } });

    return res.json({ message: 'Funcionário removido com sucesso!' });
  }
}

export default new WorkersController();
