import {getpackagesDb} from '../models/packagesDb.js'

const getpackagesCon = async (req,res) => {
    try {
        const data = await getpackagesDb();
        res.json(data);
    }catch (err) {
        res.status (500). json({ error: err.message});
    }
};

export {
    getpackagesCon
}