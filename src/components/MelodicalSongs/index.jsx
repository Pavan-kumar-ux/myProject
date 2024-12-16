import './index.css'

let melodicalSongsList =[ 
    {
    name:'Priya_Mithunam',
    item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734096306/iSongs.info_04_-_Priya_Mithunam_bdesun.mp3'
    },
    {
    name:'Sirivennala',
    item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734096363/3-Sirivennala_jdvlwf.mp3'
    },
    {
    name:'Ninnele',
    item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734096394/iSongs.info_04_-_Ninnele_ilp4fh.mp3'
    },
    {
    name:'Inthalo_Ennenni_Vinthalo',
    item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734096724/iSongs.info_03_-_Inthalo_Ennenni_Vinthalo_Male_i1b2gb.mp3'
    },
    {
    name:'Mehabooba',
    item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734096822/iSongs.info_04_-_Mehabooba_g2acru.mp3'
    },{
    name:'Hamsa_Naava',
    item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734096896/iSongs.info_02_-_Hamsa_Naava_afzkap.mp3'
    },{
    name:'Yenno_Yenno',
    item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734096888/iSongs.info_02_-_Yenno_Yenno_mofccd.mp3'
    },{
    name:'Nee_Kallathoti',
    item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734097109/iSongs.info_05_-_Nee_Kallathoti_h0konu.mp3'
    },{
    name:'E_Velalona',
    item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734097186/iSongs.info_03_-_E_Velalona_r2j5ql.mp3'
    },{
        name:'Naana_Hyraana',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734097283/Naanaa_Hyraanaa_lsyuw0.mp3'
        },
        {
            name:'Bale_Bale_Magadivoy',
            item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734097450/Bale_Bale_Mogadivoy_-_SenSongsmp3.Co_b06qvu.mp3'
            },{
                name:'Nene_Nanine',
                item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734097700/Nene_-_Nanine_-_SenSongsmp3.Co_dex3dz.mp3'
                },

]

const MelodicalSongs = () => {
    return(
        <div className='songs-container'>
            <h1 className='head'>Melodical Songs</h1>
            <hr/>
            <ul className='songs-list'>
               {melodicalSongsList.map(eachSong => (
                <li className='song-item'>
                <p className='song-name'>{eachSong.name}</p>
                <audio controls loop className='song-cont'>
                    <source src={eachSong.item} className='song'/>
                </audio>
                </li>
               ))} 
                
            </ul>
            
        </div>
    )
}

export default MelodicalSongs