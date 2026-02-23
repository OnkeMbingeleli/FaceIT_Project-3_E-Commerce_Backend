import pool from '../pool.js'

const getpackagesDb =async () => {
    const [data] = await pool.query ('SELECT * FROM weekly_packages')
    return data
}

export {
    getpackagesDb
}