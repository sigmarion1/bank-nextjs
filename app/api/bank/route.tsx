// import { NextApiRequest, NextApiResponse } from "next";
import { db, sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {

    // const client = await db.connect()

    let accounts;

    try {
        accounts = await sql`SELECT * from bank.account;`;
    } catch (err) {
        return NextResponse.json({ err })
    }
    console.log(accounts.rows)

    return NextResponse.json({ data: accounts.rows })

}