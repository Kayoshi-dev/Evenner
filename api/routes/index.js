import { Router } from "express";

const routes = Router();

routes.get('/test', (req, res) => {
    res.send('test')
})

export default routes;
