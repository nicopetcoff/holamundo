import './TwitterCard.css'

import { useState } from 'react'


export function TwitterCard({children, userName = 'unknown', initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    const imageSrc = `https://unavatar.io/${userName}`

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">               
                <img 
                src={imageSrc} 
                alt="El avatar de midudev"  
                className="tw-followCard-avatar"/>
                <div className="tw-followCard-info"> 
                    <strong >{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside> 
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow"> Dejar de Seguir </span>
                    
                </button>
            </aside>
        </article>
    )
}