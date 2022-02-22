import {NextApiRequest, NextApiResponse} from "next";

const db: any = require("../../../app/db/mineral_data_german_211119.json");

export default function (req: NextApiRequest, res: NextApiResponse) {
    res.json(db)
}