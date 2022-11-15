import styles from './Search.module.scss';
import {ReactComponent as SeachIcon} from "assets/icon-search.svg";
import React, {useRef} from "react";
import {Button} from "../Button";

interface SearchProps {
    hasError: boolean,
    onSubmit: (text: string) => void
}

export const Search = ({hasError, onSubmit}: SearchProps) => {


        const searchRef = useRef<HTMLInputElement>(null)

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()
            const text = searchRef.current?.value

            if(text){
                onSubmit(text)
                searchRef.current.value = ''
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
                           name='userName'
                           ref={searchRef}
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
