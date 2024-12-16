import { Link } from 'react-router-dom'
import Header from '../Header'
import './index.css'

let songsList = [
    {
    imageUrl:"https://cdn.pixabay.com/photo/2018/08/03/04/36/couple-3581038_640.jpg",
    name:"Love Songs",
    },
    {
        imageUrl:"https://cdn.pixabay.com/photo/2022/09/24/16/39/breakup-7476754_640.jpg",
        name:'BreakUp Songs'
    },
    {
        imageUrl:"https://cdn.pixabay.com/photo/2015/05/29/23/10/music-789957_640.jpg",
        name:'Melodical Songs'
    },
    {
        imageUrl:"https://cdn.pixabay.com/photo/2017/08/28/17/39/poster-2690541_640.png",
        name:"Romantic Songs"
    },
    {
        imageUrl:"https://img.freepik.com/premium-vector/90-s-hits-slogan-with-colorful-vintage-cassette-player-illustration_241806-36.jpg",
        name:"Old Songs"

    },
    {
        imageUrl:"https://img.freepik.com/free-photo/young-man-training-gym-bodybuilding_23-2149552275.jpg",
        name:"Gym Songs"
    }
]

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='app-container'>
             <h1 className='heading'>Select Your Mood Songs</h1> 
             <div className='song-names-container'>
                
                <div className='name-and-img-div'>
                    <Link to="lovesongs" className='link'>
                    <div className='name-img-div'>
                       <img src={songsList[0].imageUrl}
                            alt={songsList[0].name} 
                            className='IMG'
                       />
                    </div>
                    <p className='name'>Love Songs</p>
                    </Link>
                </div>

                <div className='name-and-img-div'>
                <Link to="breakupsongs" className='link'>
                    <div className='name-img-div'>
                       <img src={songsList[1].imageUrl}
                            alt={songsList[1].name} 
                            className='IMG'
                       />
                    </div>
                    <p className='name'>BreakUp Songs</p>
                  </Link>  
                </div>

                <div className='name-and-img-div'>
                <Link to="melodicalsongs" className='link'>
                    <div className='name-img-div'>
                       <img src={songsList[2].imageUrl}
                            alt={songsList[2].name} 
                            className='IMG'
                       />
                    </div>
                    <p className='name'>Melodical Songs</p>
                </Link>
                </div>

                <div className='name-and-img-div'>
                <Link to="romanticsongs" className='link'>
                    <div className='name-img-div'>
                       <img src={songsList[3].imageUrl}
                            alt={songsList[3].name} 
                            className='IMG'
                       />
                    </div>
                    <p className='name'>Romantic Songs</p>
                    </Link>
                </div>
                
                <div className='name-and-img-div'>
                <Link to="oldsongs" className='link'>
                    <div className='name-img-div'>
                       <img src={songsList[4].imageUrl}
                            alt={songsList[4].name} 
                            className='IMG'
                       />
                    </div>
                    <p className='name'>Old Songs</p>
                    </Link>
                </div>

                <div className='name-and-img-div'>
                <Link to="gymsongs" className='link'>
                    <div className='name-img-div'>
                       <img src={songsList[5].imageUrl}
                            alt={songsList[5].name} 
                            className='IMG'
                       />
                    </div>
                    <p className='name'>Gym Songs</p>
                    </Link>
                </div>
             
             </div>
        </div>
    </div>
  )
}

export default Home