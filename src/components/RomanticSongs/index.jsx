import './index.css'

let romanticSongsList = [
    {
        name:'Oo_Antava..._Oo_Oo_Antavaa',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734099059/iSongs.info_05_-_Oo_Antava..Oo_Oo_Antava_w657dp.mp3'
    },
    {
        name:'Peelings',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734098797/Peelings_y2auit.mp3'
    },
    {
        name:'Tholakari_Chinukai',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734097977/iSongs.info_03_-_Tholakari_Chinukai_cwzziv.mp3'
    },
    {
        name:'Sammohanuda',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734098100/iSongs.info_02_-_Sammohanuda_ueiolv.mp3'
    },
    {
        name:'Gichhi_Gichhi',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734098024/Gichchi_Gichchi-SenSongsMp3.Co_smwek7.mp3'
    },
    {
        name:'Emito_Idhi',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734098218/iSongs.info_01_-_Emito_Idhi_kptvnd.mp3'
    },
    {
        name:'Veyyira_Cheyyi_veyra',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734098257/Veyira_Cheyyi-SenSongsMp3.Co_za3u1n.mp3'
    },
    {
        name:'Sir_Osthara',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734098377/iSongs.info_02_-_Sir_Osthara_oahdil.mp3'
    },
    {
        name:'Kotthaga_ledhenti',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734098427/Kothaga_Ledhenti_t413z8.mp3'
    },
    {
        name:'Kotthagunna_Haaye_nuvva',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734098439/iSongs.info_04_-_Kothagunna_Haye_Nuvva_ksr3os.mp3'
    },
    {
        name:'Yeluko_Nayaka',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734098769/Yeluko_Nayaka-SenSongsMp3.Co_y3ytn0.mp3'
    },
    {
        name:'Muddulaata',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734099315/iSongs.info_05_-_Muddulaata_sef1ol.mp3'
    },
    {
        name:'Aafat (Liger)',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734099339/iSongs.info_05_-_Aafat_Telugu_xetj1p.mp3'
    },
    {
        name:'Jala_Jala_JalaPaatham',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734099684/iSongs.info_04_-_Jala_Jala_Jalapaatham_Nuvvu_ol5ypf.mp3'
    },
    {
        name:'Enno_Ratrulosthayi',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734099622/2-Enno_Ratrulosthayi_Remix_hzwadb.mp3'
    },
    
]

const RomanticSongs = () => {
    return(
        <div className='songs-container'>
            <h1 className='head'>Romantic Songs</h1>
            <hr/>
            <ul className='songs-list'>
               {romanticSongsList.map(eachSong => (
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

export default RomanticSongs