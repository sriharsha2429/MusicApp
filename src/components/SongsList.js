import React,{useState} from 'react';

const SongsList=()=>{
    const [songs,setSongs]=useState([
        {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
            },
            {
            albumId: 1,
            id: 2,
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://via.placeholder.com/600/771796",
            thumbnailUrl: "https://via.placeholder.com/150/771796"
            },
            {
            albumId: 1,
            id: 3,
            title: "officia porro iure quia iusto qui ipsa ut modi",
            url: "https://via.placeholder.com/600/24f355",
            thumbnailUrl: "https://via.placeholder.com/150/24f355"
            }
    ])
    return (
      <div>
          <div>
              All songs
          </div>
          <div>
              Search for songs
          </div>
          <div>
           {songs.map(song=>{
               return (
                   <div key={song.id}>
               <div>{song.albumId}</div>
               <div>{song.id}</div>
               <div>{song.title}</div>
               <div>{song.url}</div>
               </div>)
           })}
                
          </div>

      </div>
       
    )
}

export default SongsList;