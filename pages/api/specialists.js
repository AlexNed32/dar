// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { specialists } from "./data/specialists"

export default function handler(req, res) {
        res.status(200).json(specialists)
}
