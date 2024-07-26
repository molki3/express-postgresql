import { Router } from "express";

const router = Router();

router.get('/users', (req, res) => {
    res.send('lazaro citizen');
});

router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send(`User ${id}`);
});

router.post('/users', (req, res) => {
    res.send('Post Users');
});

router.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send(`Delete User ${id}`);
});

router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send(`Update User ${id}`);
});

export default router;