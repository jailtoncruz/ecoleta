import { Request, Response } from 'express'
import knex from '../database/connection';
import { API_URL } from '../core/constants/environments';

class ItemsController {

    async index(req: Request, res: Response) {

        const items = await knex('items').select('*');
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `${API_URL}/uploads/${item.image}`,
            };
        });

        return res.json(serializedItems);
    }

}

export default ItemsController;