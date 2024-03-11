import React, { useState, KeyboardEvent } from "react";
import Loading from "../components/Loading";
import { BsSearch } from "react-icons/bs";
import classes from './Search.module.css';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyDown = async (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            setIsLoading(true);
            try {
                await loadUser(userName);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleButtonClick = async () => {
        setIsLoading(true);
        try {
            await loadUser(userName);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input
                    type="text"
                    placeholder="Digite o nome do usuário"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleButtonClick}>
                    <BsSearch />
                </button>
            </div>
            {isLoading && <Loading />}
        </div>
    );
};

export default Search;
