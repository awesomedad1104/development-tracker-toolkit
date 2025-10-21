// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const AIRTABLE_PAT = process.env.AIRTABLE_PAT
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID

import Airtable from "airtable"
export default function handler(req, res) {

  const base = new Airtable({apiKey: AIRTABLE_PAT}).base(AIRTABLE_BASE_ID);

  base('Contact Us').create(req.query)
    .then(r => {
      res.status(200).json({ status: 'success', newRecord: r._rawJson })
    }
  )
}
