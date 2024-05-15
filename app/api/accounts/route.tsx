// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import pool from '../../lib/db';


export const dynamic = 'force-dynamic';

export async function GET() {

    let account;

    try {
        account = await pool.query('SELECT * from bank.accounts where account_id=1;');
    } catch (err) {
        return NextResponse.json({ err })
    }

    return NextResponse.json({ data: account.rows[0] })

}