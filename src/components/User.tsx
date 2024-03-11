import { UserProps } from "../types/user"

import { MdLocationPin } from "react-icons/md"

import { Link } from "react-router-dom";

import classes from "./Search.module.css";



const User = ({login, avatar_url, location, followers, following, public_repos}:UserProps) => {
  return (
    
    <div className={classes.container_res}>



        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>


        {location && (
            
            <p className={classes.location}><MdLocationPin />
            <span>{location}</span>
            </p>
        
        )}

      <div className={classes.container_seg}>
        <div>
            <p>Seguidores</p>
            <p className={classes.follow}>{followers}</p>
        </div>

        <div>
            <p>Seguindo</p>
            <p className={classes.follow}>{following}</p>
        </div>

          

        </div>
        <div>
          <p><b>Repositórios:</b> <span className={classes.public_repos}>{public_repos}</span></p>
          </div>
        <a target="_blank" className={classes.projetos} href={`https://github.com/${login}?tab=repositories`}>Ver melhores projetos</a>
        
        </div>
    
  )
}

export default User