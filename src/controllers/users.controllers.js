import { pool } from "../db.js";


// GET
export const getUsers = async (req, res) => {

    const {rows} = await pool.query('SELECT * FROM Users');
    
    return res.json(rows);
}

// GET
export const getUser = async (req, res) => {
    const {id} = req.params;

    const {rows} = await pool.query(`SELECT * FROM Users where id=${id}`);

    if(rows.length === 0) return res.status(404).json({message: 'User not found'});

    res.json(rows[0]);
}

// POST
export const createUser = async (req, res) => {
    try {
        const name = req.body['name'];
        const email = req.body['email'];
    
        const {rows, rowCount} = await pool.query(`INSERT INTO Users (name, email) VALUES ('${name}','${email}') RETURNING *;`);
    
        console.log(rows[0]);
    
        res.json(rows[0]);
    } catch (error) {

        // If error has a propiety called error and it has the value 23505, send this response
        if(error?.code === '23505') return res.status(409).json({message: 'Email already exists'});

        return res.status(500).json({message: 'Internal Server Error'});
    }
}

// DELETE
export const deleteUser = async (req, res) => {
    const {id} = req.params;

    // rows: deleted data, rowCounts: amount of deleted data
    const {rowCount} = await pool.query(`DELETE FROM Users where id=${id} RETURNING *`);

    if(rowCount === 0) return res.status(404).json({message: "User not found"});

    res.sendStatus(204);
}

// PUT
export const updateUser = async (req, res) => {
    const {id} = req.params;

    const {rows,rowCount} = await pool.query(`UPDATE Users SET name='${req.body.name}', email='${req.body.email}' WHERE id=${id} RETURNING *;`);

    if(rowCount === 0) return res.status(404).send('Not found');

    res.json(rows[0]);
}