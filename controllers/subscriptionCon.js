import { postsubscriptionDb } from "../models/subscriptionDb.js";

export const postsubscriptionCon = async (req,res) => {
    try{
        const {user_id,package_id,start_date,status} = req.body;

        const data = await postsubscriptionDb ({
            user_id,
            package_id,
            start_date,
            status
        });
        res.json ({message: "Subscription Created!!", data});
    } catch (err) {
        res.status (500).json({error: err.message});
    }
};