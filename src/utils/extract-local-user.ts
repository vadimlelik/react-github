import {GithubUser, LocalGithubUser} from "../types";


export  const extractLocalUser = (user:GithubUser):LocalGithubUser => ({
    login:user.login,
    avatar:user.avatar_url,
    name:user.name,
    bio:user.bio,
    company:user.company,
    id:user.id,
    blog:user.blog,
    location:user.location,
    twitter:user.twitter_username,
    repos:user.public_repos,
    followers:user.followers,
    following:user.following,
    created:user.created_at
})