// import { NextApiRequest, NextApiResponse } from "next";
import { db, sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {

    let account;

    try {
        account = await sql`SELECT * from bank.accounts where account_id=1;`;
    } catch (err) {
        return NextResponse.json({ err })
    }
    // console.log(account)

    return NextResponse.json({ data: account.rows[0] })

}