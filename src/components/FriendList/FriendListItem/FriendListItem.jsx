import css from './FriendListItem.module.css';
export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <div className={css.friendListItem}>
            <img className={css.friendImg} src={avatar} alt={name} width="48"/>
            <p className={css.friendName}>{name}</p>
            <p className={isOnline ? css.friendOnline : css.friendOffline}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}