import { useEffect, useState } from "react";

interface Account {
    id: number;
    balance: number;
}

export default function useAccount() {
    const [accounts, setAccounts] = useState<Account>();

    useEffect(() => {
        fetch("/api/accounts")
            .then((res) => res.json())
            .then((data) => setAccounts(data.data));
    }, []);

    return accounts;
}