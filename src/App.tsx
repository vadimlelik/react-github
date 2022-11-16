import {TheHeader} from "components/TheHeader";
import React, {useState} from "react";
import {Container} from "./components/Container";
import {Search} from "./components/Search";
import {UserCard} from "./components/UserCard";


import {defaultUser} from 'mock/index'
import {GithubError, GithubUser, LocalGithubUser} from "./types";
import {isGithubUser} from "./utils/typesguards";
import {extractLocalUser} from "./utils/extract-local-user";


const BASE_URL = `https://api.github.com/users/`

function App() {
    const [user, setUser] = useState<LocalGithubUser | null>(null)

    const fetchUser = async (username: string) => {
        const url = BASE_URL + username
        const res = await fetch(url)
        console.log(res,'res')
        const user = await res.json() as GithubUser | GithubError

        if(isGithubUser(user)){
            setUser(extractLocalUser(user))
        } else  {
            setUser(null)
        }
    }
    return (
        <Container>
            <TheHeader/>
            <Search hasError={!user} onSubmit={fetchUser}/>

            {user && (<UserCard {...user}/>)}


        </Container>
    );
}

export default App;
