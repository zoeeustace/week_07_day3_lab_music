import React from 'react';

const SongItem = ({song}) => {
    return <li>{song.title.label} <img id="album-img" src={song["im:image"][0].label}/>
    {/* <button onClick={handleClickPlay} src={song["link"][1].attributes}/> */}
    </li>;
}
 
export default SongItem;