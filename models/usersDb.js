import pool from '../pool.js'

export const postusersDb = async ({name, email, password,address}) => {

    const [result] = await pool.query (
        'INSERT INTO users (name, email, password,address) VALUES (?,?,?,?)',
    [name, email, password,address]
    );
    return result;
};

// export {
//     postusersDb
// }