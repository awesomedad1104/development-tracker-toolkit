// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Airtable from "airtable"

export default async function handler(req, res) {
  const AIRTABLE_PAT = process.env.AIRTABLE_PAT
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID

  const base = new Airtable({ apiKey: AIRTABLE_PAT }).base(AIRTABLE_BASE_ID);

  try {
    const r = await base('Contact Us').create(req.query)
    res.status(200).json({ status: 'success', newRecord: r._rawJson })
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message })
  }
}
