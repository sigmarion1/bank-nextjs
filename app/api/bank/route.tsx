// import { NextApiRequest, NextApiResponse } from "next";
import { db, sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {

    let accounts;

    try {
        accounts = await sql`SELECT * from bank.accounts;`;
    } catch (err) {
        return NextResponse.json({ err })
    }
    console.log(accounts.rows)

    return NextResponse.json({ data: accounts.rows })

}