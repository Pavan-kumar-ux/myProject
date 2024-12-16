import './index.css'

let breakupSongsList = [
    {
        name:"Telisiney_Na_Nuvvey",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733839030/iSongs.info_04_-_Telisiney_Na_Nuvvey_ueijnf.mp3"
    },
    {
        name:"Love_Me_Again",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733839176/iSongs.info_04_-_Love_Me_Again_y7w43i.mp3"
    },
    {
        name:"Kanule_Kanele",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733839209/iSongs.info_03_-_Kanule_Kanele_slxcea.mp3"
    },
    {
        name:"Oh_I_Miss_You",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733839591/Oh_I_Miss_You-SenSongsMp3.Co_yogayl.mp3"
    },
    {
        name:"Po_Ve_Po",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733839612/Po_Ve_Po_-_SenSongsmp3.Co_ikywpx.mp3"
    },
    {
        name:"Cheppave_Baalamani",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733839637/Cheppave_Balamani_-_SenSongsMp3.Co_sfyq16.mp3"
    },
    {
        name:"Premisthunna",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733839833/iSongs.info_04_-_Premisthunna_hxz38n.mp3"
    },
    {
        name:"Thuhi_Hai_Thuhi_Hai",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733839850/iSongs.info_01_-_Thuhi_Hai_Thuhi_Hai_ruwusq.mp3"
    },
    {
        name:"Manasantha",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733840038/Manasantha_-_SenSongsmp3.Co_pl88eg.mp3"
    },
    {
        name:"Em_Cheppanu",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733840333/iSongs.info_05_-_Em_Cheppanu_lmkz0e.mp3"
    },
    {
        name:"Kannula_Baasalu_Theliyavule",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733840605/Kannula_Baasalu_Theliyavule_-_SenSongsMp3.Co_lfnmqe.mp3"
    },
    {
        name:"Vellipove_Vellipove",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733840984/Vellipove_Vellipove_-_SenSongsmp3.Co_lqofg9.mp3"
    },
    {
        name:"Undiporaadhey_Sad_Version",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733841071/Undiporaadhey_Sad_Version_-_SenSongsMp3.Co_h6m3vd.mp3"
    },{
        name:"Emai_Poyave",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733841358/Emai_Poyave_-_SenSongsmp3.Co_qctgvn.mp3"
    },
    {
        name:"Karige_loga",
        item:"https://res.cloudinary.com/dqxmismzp/video/upload/v1733889746/5-Karige_Loga-SenSongsMp3.Co_gyj7uv.mp3"
    },
]

const BreakUpSongs = () => {
    return(
        <div className='songs-container'>
            <h1 className='head'>Breakup Songs</h1>
            <hr/>
            <ul className='songs-list'>
               {breakupSongsList.map(eachSong => (
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

export default BreakUpSongs