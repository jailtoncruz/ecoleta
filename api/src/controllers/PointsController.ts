import { NextFunction, Request, Response } from 'express'
import knex from '../database/connection';
import { API_URL } from '../core/constants/environments';

class PointsController {
    async create(req: Request, res: Response) {
        const {
            name, email, whatsapp, latitude, longitude, city, uf, items
        } = req.body;

        const trx = await knex.transaction();
        const point = {
            image: req.file?.filename,
            name, email, whatsapp, latitude, longitude, city, uf
        }

        const insertedIds = await trx('points').insert(point).returning('id');

        const point_id = insertedIds[0];

        const pointItems = items
            .split(',')
            .map((item: string) => Number(item.trim()))
            .map((item_id: number) => {
                return { item_id, point_id }
            })

        await trx('point_items').insert(pointItems);

        await trx.commit();

        return res.json({
            id: point_id,
            ...point
        });
    }

    async show(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        if (isNaN(Number(id))) next()
        const point = await knex('points').where('id', id).first();

        if (!point) {
            return res.status(400).json({ message: 'Point not found.' });
        }

        const serializedPoints = {
            ...point,
            image_url: `${API_URL}/uploads/${point.image}`
        };

        // return res.json(serializedPoints);

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return res.json({ point: serializedPoints, items });
    }

    async index(req: Request, res: Response) {
        const { city, uf, items } = req.query;

        const parsedItems = String(items).split(',').map(item => Number(item.trim()))
            .filter(e => !isNaN(e))

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');


        const serializedPoints = points.map(point => {
            return {
                ...point,
                image_url: `${API_URL}/uploads/${point.image}`,
            };
        });

        return res.json(serializedPoints);
    }
}

export default PointsController;