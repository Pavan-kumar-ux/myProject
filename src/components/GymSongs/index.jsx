import './index.css'

let gymSongsList = [
    {
        name:'Dhruva_Dhruva',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323359/iSongs.info_01_-_Dhruva_Dhruva_muk5mm.mp3'
    },
    {
        name:'Panja',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323379/iSongs.info_01_-_Panja_swwrvg.mp3'
    },
    {
        name:'Travelling_Soldier',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323399/Travelling_Soldier_-_SenSongsMp3.Co_jh796w.mp3'
    },
    {
        name:'Who_are_you',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323422/iSongs.info_01_-_Who_Are_You_iexpgd.mp3'
    },
    {
        name:'My_Love_is_gone',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323500/iSongs.info_06_-_My_Love_Is_Gone_aulww5.mp3'
    },
    {
        name:'Fear_Song_Devara',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734324091/iSongs.info_02_-_Fear_Song_vux6pa.mp3'
    },
    {
        name:'Aayudha_Pooja',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734324054/iSongs.info_06_-_Ayudha_Pooja_wiutox.mp3'
    },
    {
        name:'Toofan-kgf',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323984/iSongs.info_01_-_Toofan_fjz5qp.mp3'
    },
    {
        name:'Bad_Boy_Saaho',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323958/iSongs.info_03_-_Bad_Boy_ll8sr1.mp3'
    },
    {
        name:'My_name_is_billa',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323697/iSongs.info_06_-_My_Name_is_Billa_rhuuwh.mp3'
    },
    {
        name:'ismart.._Title_Song',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323857/iSongs.info_03_-_ISmart_Title_Song_nxlobt.mp3'
    },
    {
        name:'Salam_Rocky_Bhai',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734324114/Salaam_Rocky_Bhai_-_SenSongsMp3.Co_vdhlz0.mp3'
    },
    {
        name:'Block_Buster',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323644/iSongs.info_04_-_Blockbuster_hvkqh0.mp3'
    },
    {
        name:'Maaro_Maaro',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323834/iSongs.info_05_-_Maaro_Maaro_k6lf8i.mp3'
    },
    {
        name:'Vaasthu_Bagundhey',
        item:'https://res.cloudinary.com/dqxmismzp/video/upload/v1734323877/iSongs.info_04_-_Vasthu_Bagundhe_mycbac.mp3'
    },
    
]

const GymSongs = () => {
    return(
        <div className='songs-container'>
            <h1 className='head'>Gym Songs</h1>
            <hr/>
            <ul className='songs-list'>
               {gymSongsList.map(eachSong => (
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

export default GymSongs