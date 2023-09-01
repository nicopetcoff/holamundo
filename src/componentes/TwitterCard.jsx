import './TwitterCard.css'

export function TwitterCard({userName, name, isFollowing}) {

    const imageSrc = `https://unavatar.io/${userName}`

    console.log(isFollowing)

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">               
                <img 
                src={imageSrc} 
                alt="El avatar de midudev"  
                className="tw-followCard-avatar"/>
                <div className="tw-followCard-info"> 
                    <strong >{name }</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside> 
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}