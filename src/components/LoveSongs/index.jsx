import './index.css'

let loveSongsList = [
    {
        name:"Ammayi",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1732522662/iSongs.info_01_-_Ammayi_xvidca.mp3"
    },
    {
        name:"Nijame_Ne_Chebuthunna",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1716717213/Nijame_Ne_Chebuthunna_1_ih3xfq.mp3"
    },
    {
        name:"Chalona",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1732522954/iSongs.info_03_-_Chalona_vmfjkn.mp3"
    },
    {
        name:"Pilla_Padesaave",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1716717205/Pilla_Padesaave_kfwqsw.mp3"
    },
    {
        name:"Suttamla_Soosi",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1732523135/iSongs.info_01_-_Suttamla_Soosi_todxmp.mp3"
    },
    {
        name:"Okamaaru_kalisina",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1732523215/iSongs.info_Okamaru_Kalasina_zymzrg.mp3"
    },
    {
        name:"O_rendu_Prema_Meghaalila",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1732523328/iSongs.info_01_-_O_Rendu_Prema_Meghaalila_giadzm.mp3"
    },
    {
        name:"My_Heart_is_Beating",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1716718637/iSongs.info_02_-_My_Heart_Is_Beating_liaqjy.mp3"
    },
    {
        name:"Nammavemo_Gaani_Andhaala",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1716717413/iSongs.info_02_-_Nammavemo_xjjdyi.mp3"
    },
    {
        name:"Katha_Vintaava",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1716716843/iSongs.info_Katha_Vintava_vtopw8.mp3"
    },
    {
        name:"Nee_Yadalo_Naaku",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1732524253/iSongs.info_05_-_Nee_Yadalo_Naaku_dt1lu8.mp3"
    },
    {
        name:"Naa_Manasuki",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1732524359/iSongs.info_04_-_Naa_Manasuki_cfljn0.mp3"
    }
]

const LoveSongs = () => {
    return(
        <div className='songs-container'>
            <h1 className='head'>Love Songs</h1>
            <hr/>
            <ul className='songs-list'>
               {loveSongsList.map(eachSong => (
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

export default LoveSongs