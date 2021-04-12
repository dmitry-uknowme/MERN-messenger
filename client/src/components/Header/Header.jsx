import React, { useState } from 'react';
import Modal from './Modal/Modal';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import './Header.sass';
import { ReactComponent as Logo } from '../../img/vk.svg';
import { useSelector } from 'react-redux';

export const Header = () => {
  const userData = useSelector((state) => state.user.data);
  const [audioPlaying, setAudioPlaying] = useState({
    playing: true,
    artist: 'Автор',
    title: 'Аудио',
  });
  const [notifications, setNotifications] = useState(
    (Math.random() * (20 - 1 - 0)).toFixed(0)
  );
  // console.log(audioPlaying);
  return (
    <div className="col-md-12">
      <div className="header__container">
        <div className="header">
          <Logo className="header__logo" />
          <div className="header__search">
            <SearchIcon className="header__searchIcon" />
            <input
              className="header__searchInput"
              type="text"
              placeholder="Поиск друзей"
            />
          </div>
          <div
            className="header__notifications"
            onClick={() =>
              setNotifications((0 + Math.random() * (20 - 1 - 0)).toFixed(0))
            }
          >
            <NotificationsIcon className="header__noficationsIcon" />
            <span className="header__noficationsCounter">{notifications}</span>
          </div>
          <div className="header__audio">
            <SkipPreviousIcon className="header__audioPrev" />
            {audioPlaying['playing'] ? (
              <PauseIcon
                className="header__audioPause"
                onClick={() => setAudioPlaying({ playing: false })}
              />
            ) : (
              <StopIcon
                className="header__audioStop"
                onClick={() =>
                  setAudioPlaying({
                    playing: true,
                    artist: 'Audio1',
                    title: 'Audio1',
                  })
                }
              />
            )}
            <SkipNextIcon className="header__audioNext" />
            <div className="header__audioPlaying">
              {audioPlaying ? (
                <>
                  {audioPlaying['artist']} - {audioPlaying['title']}
                </>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="header__profile">
            {userData.name} {userData.surname}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
