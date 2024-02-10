// import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {

    const client = await db.connect()

    let accounts;

    try {
        accounts = await client.query('SELECT * from bank.account');
    } catch (err) {
        return NextResponse.json({ err })
    }

    return NextResponse.json({ data: accounts.rows })

}