import PropTypes from 'prop-types';
import styles from '../FriendsList/FriendList.module.css';
import defaultImg from '../Profile/default.png';

const Friends = ({ avatar, name, status }) => {
  return (
    <li className={styles.item}>
      {status ? (
        <span className={styles.statusOnline}></span>
      ) : (
        <span className={styles.statusOffline}></span>
      )}
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <span className={styles.name}>{name}</span>
    </li>
  );
};

Friends.defaultProps = {
  avatar: defaultImg,
};

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Friends;
