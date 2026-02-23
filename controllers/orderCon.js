import {postorderDb} from '../models/orderDb.js'

export const postorderCon = async (req,res) => {

    try {
        const {sub_id,amount,order_status} = req.body;
        
        const data = await postorderDb({
            sub_id,
            amount,
            order_status
        });

        res.json({ message: "Order created!!", data});

    } catch (err) {
        res.status (500).json({ error: err.message});
    }
};
//     export const postorderCon = async (req, res) => {
//     console.log("REQ BODY:", req.body);
//     res.json({ received: req.body });
// };


// export {
//     postorderCon
// }