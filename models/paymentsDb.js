import pool from '../pool.js'

export const postpaymentsDb = async ({order_id,amount,pay_method,pay_date,pay_status}) => {
    
    const [result] = await pool.query (
        "INSERT INTO payments (order_id,amount,pay_method,pay_date,pay_status) VALUES (?,?,?,?,?)",
        [order_id,amount,pay_method,pay_date,pay_status]
    );
    return result;
};