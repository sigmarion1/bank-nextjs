// import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST() {

    try {
        await sql`update bank.accounts set balance = balance * 1.0003;`;
    } catch (err) {
        return NextResponse.json({ err })
    }

    return NextResponse.json({ data: "success" })

}