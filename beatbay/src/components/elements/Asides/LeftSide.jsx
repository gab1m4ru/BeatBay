import React from "react";
import "./_aside.scss";

// LOGO ICON
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";

// MENU ICONS
import { ReactComponent as HomeIcon } from "../../../assets/icons/menu/home.svg";
import { ReactComponent as DiscoverIcon } from "../../../assets/icons/menu/discover.svg";
import { ReactComponent as RadioIcon } from "../../../assets/icons/menu/radio.svg";
import { ReactComponent as AlbumsIcon } from "../../../assets/icons/menu/albums.svg";
import { ReactComponent as PodcastIcon } from "../../../assets/icons/menu/podcast.svg";

// LIBRARY ICONS
import { ReactComponent as RecentlyAddedIcon } from "../../../assets/icons/library/recently-added.svg";
import { ReactComponent as FavoriteSongsIcon } from "../../../assets/icons/library/favorite-songs.svg";
import { ReactComponent as FoldersIcon } from "../../../assets/icons/library/folder.svg";

// PLAYLIST ICONS
import { ReactComponent as PlaylistIcon } from "../../../assets/icons/playlist/playlist.svg";

const menu = ["Home", "Discover", "Radio", "Albums", "Podcast"];
const library = ["Recently Added", "Favorite Songs", "Local Files"];
const playlist = ["Lo-fi Music", "Best of Bon Jovi", "Best of John Mayer"];

const menuIconMap = {
  home: HomeIcon,
  discover: DiscoverIcon,
  radio: RadioIcon,
  albums: AlbumsIcon,
  podcast: PodcastIcon,
};

const libraryIconMap = {
  "recently added": RecentlyAddedIcon,
  "favorite songs": FavoriteSongsIcon,
  "local files": FoldersIcon,
};

document.body.addEventListener('click', (event) => {
  const activeMenuItem = event.target.closest('.menu-item')

  if (activeMenuItem) {
    document.querySelectorAll('.menu-item').forEach(li => li.classList.remove('active'))
    activeMenuItem.classList.add('active')
  }
})


const LeftSide = () => {
  return (
    <aside
      className="aside-body"
      style={{ color: "#949494", fontWeight: "600" }}
    >
      <LogoIcon/>

      <ul className="menu aside__block">
        {menu.map((menuItem) => {
          const Icon = menuIconMap[menuItem.toLowerCase()];
          return (
            <li key={menuItem} className="menu-item">
              {Icon && <Icon width={24} height={24} />}
              <span>{menuItem}</span>
            </li>
          );
        })}
      </ul>

      <ul className="library aside__block">
        <h1 className="aside__block-title">LIBRARY</h1>
        {library.map((libraryItem) => {
          const Icon = libraryIconMap[libraryItem.toLowerCase()];
          return (
            <li key={libraryItem} className="menu-item">
              {Icon && <Icon width={24} height={24} />}
              <span>{libraryItem}</span>
            </li>
          );
        })}
      </ul>

      <ul className="playlist aside__block">
        <div className="aside__block-title">
          <h1>PLAYLIST</h1>
          <button id="new-playlist" className="new__playlist-btn">
            +
          </button>
        </div>
        {playlist.map((playlistItem) => {
          const Icon = PlaylistIcon;
          return (
            <li key={playlistItem} className="menu-item">
              {Icon && <Icon width={24} height={24} />}
              <span>{playlistItem}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default LeftSide;