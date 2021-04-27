import React from 'react';
import PropTypes from 'prop-types';
import Friends from './Friends';

const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friends avatar={avatar} name={name} status={isOnline} key={id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
