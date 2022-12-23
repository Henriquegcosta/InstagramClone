import './Post.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons/faHeart'
import React , {useState} from 'react'



export function Post(prop) {

    let heartstyle = { color: "black", fill: "red"}
    const [heart, setHeart] = useState(null); 
    const [numero, setNumero] = useState(61);
    
    function setHeartRed(){
        if(heart === null){
            setHeart(!heart)
            setNumero(numero + 1)
        } else {
            setHeart(null);
            setNumero(numero - 1)
        }

    }

    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src={prop.person} />

                    <p>{prop.name}</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src={prop.post}/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon heart" onClick={() => setHeartRed()}>{heart ? <FontAwesomeIcon style={{color: "red", transition: 'all .2s ease'}} icon={faHeartSolid}/> : <FontAwesomeIcon icon={faHeart}/>} </div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>{numero} Curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>{prop.name}</span> {prop.desc}
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
        </>

    )

}
