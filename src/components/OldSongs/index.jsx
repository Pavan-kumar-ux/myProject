import './index.css'

let oldSongsList = [
    {
        name:'Kitukulu_Thelisina',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734321454/iSongs.info_06_-_Kitukulu_Thelisina_nuokst.mp3'
    },
    {
        name:'Nadaka_kalisina',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734321506/iSongs.info_01_-_Nadaka_Kalisina_ucbydu.mp3'
    },
    {
        name:'Aresukoboi_Paresukunnanu',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322363/iSongs.info_06_-_Aaresukoboi_c4sprb.mp3'
    },
    {
        name:'Prema_Gima_Thassa',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322330/iSongs.info_Prema_Gima_Tassa_iro6rq.mp3'
    },
    {
        name:'Chiluka_Kshemama',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322304/iSongs.info_Chiluka_Kshemama_f5roy6.mp3'
    },
    {
        name:'Amalapuram_Bulloda',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322284/iSongs.info_Amalapuram_Bulloda_kwt6lc.mp3'
    },
    {
        name:'Nee_Koppulo',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322725/iSongs.info_04_-_Nee_Kopulo_vyc0bq.mp3'
    },
    {
        name:'Priyaraagale',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322682/iSongs.info_01_-_Priyaraagale_xuc5jh.mp3'
    },
    {
        name:'Jabilli_kosam',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322643/iSongs.info_Jabilli_Kosam_Male_tkjttl.mp3'
    },
    {
        name:'Balapam_patti',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322621/02_-_Balapam_Patti_-_SenSongsMp3.co_hbisfe.mp3'
    },
    {
        name:'Naa_cheli_Rojave',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322600/03_-_Naa_Cheli_Rojave_-_SenSongsMp3.Co_dugzbu.mp3'
    },
    {
        name:'Thaluku_Mannadhi',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734322569/Thaliku-Mannadi-Mano_czzzrq.mp3'
    },
    {
        name:'Abbo_Nee_Amma_Goppadhe',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323044/iSongs.info_03_-_Abbo_Nee_Amma_Goppadhe_bo70n4.mp3'
    },
    {
        name:'Kontegadni_Kattuko',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323060/iSongs.info_01_-_Kontegadni_Kattukko_u3e4xv.mp3'
    },
    {
        name:'Love_Me_My_Hero',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323092/Love_Me_My_Hero_-_SenSongsMp3.Co_zmauwu.mp3'
    },
]

const OldSongs = () => {
    return(
        <div className='songs-container'>
            <h1 className='head'>Old Songs</h1>
            <hr/>
            <ul className='songs-list'>
               {oldSongsList.map(eachSong => (
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

export default OldSongs