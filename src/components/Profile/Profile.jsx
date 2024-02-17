import css from './Profile.module.css';

export default function Profile({image, name, tag, location, stats}) {
    return (
        <div className={css.profileCard}>
            <div>
                <img className={css.profileAvatar}
                    src={image}
                    alt={name}
                />
                <p className={css.profileName}>{name}</p>
                <p className={css.profileTag}>@{tag}</p>
                <p className={css.profileLocation}>{location}</p>
            </div>
            <ul className={css.profileStats}> 
                <li className={css.profileStatsItem}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.profileStatsItem}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.profileStatsItem}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}