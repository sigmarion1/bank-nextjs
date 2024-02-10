import { useEffect, useState } from "react";

interface Account {
    id: number;
    name: string;
    balance: number;
}

export default function useAccount() {
    const [accounts, setAccounts] = useState<Array<Account>>([]);

    useEffect(() => {
        fetch("/api/bank")
            .then((res) => res.json())
            .then((data) => setAccounts(data.data));
    }, []);

    return accounts;
}