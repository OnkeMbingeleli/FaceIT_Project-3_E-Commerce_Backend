import pool from '../pool.js'

export const postorderDb = async ({sub_id,amount,order_status}) => {

    const [result] = await pool.query (
    "INSERT INTO orders (sub_id,amount,order_status) VALUES (?,?,?)",
    [sub_id,amount,order_status]
    );

    return result;
};




// export {
//     postorderDb
// }