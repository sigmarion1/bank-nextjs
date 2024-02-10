"use client";

import useAccount from "../component/useAccount";

export default function Cart() {
    const accounts = useAccount();

    return (
        <div>
            {accounts.map((account) => (
                <div key={account.id}>
                    {account.id} - {account.balance}
                </div>
            ))}
        </div>
    );
}


// export default async function Cart({
//     params
// }: {
//     params: { user: string }
// }): Promise<JSX.Element> {
//     const { rows } = await sql`SELECT * from bank.account`;

//     console.log(rows)

//     return (
//         <div>
//             {rows.map((row) => (
//                 <div key={row.id}>
//                     {row.id} - {row.balance}
//                 </div>
//             ))}
//         </div>
//     );
// }