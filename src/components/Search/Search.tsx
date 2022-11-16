import styles from './Search.module.scss';
import {ReactComponent as SeachIcon} from "assets/icon-search.svg";
import {Button} from "../Button";
import React from "react";

interface SearchProps {
    hasError: boolean,
    onSubmit: (text: string) => void
}


type FormFields = {
    username: HTMLInputElement
}

export const Search = ({hasError, onSubmit}: SearchProps) => {


        const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {

            e.preventDefault()
            const text = e.currentTarget.username.value
            if(text){
                onSubmit(text)
                e.currentTarget.reset()
            }
        }

        return (
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className={styles.search}>
                    <label htmlFor='search' className={styles.label}   >
                        <SeachIcon/>
                    </label>
                    <input type='text'
                           id='search'
                           name='username'
                           className={styles.textField}
                           placeholder='Search GitHub UserName'
                    />
                    {hasError && (
                        <div className={styles.error}>
                            No results
                        </div>
                    )}

                    <Button>Search </Button>
                </div>

            </form>
        )
    }

;
