import './Layout.css'

import { Story } from '../Story/Story'
import { Post } from '../Post/Post'
import { Suggestion } from '../Suggestion/index'
import Java from "./Java.png"

export function Layout() {

    return (
        <>

            <div className="MainGrid" >

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box" >
                        <Story />
                    </div>

                    <div className="box" >
                        <Post person="https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/424576dac9b1ec208e510414e1cba983.jpeg" name="mmaethe" post="https://cartoriosdesergipe.com.br/sistema/img_up/pos_2c0f970f12c2942da07be66bb9c3e5535f6c8c65d7fdc2_71497403.jpg" desc="Casamento (Alou alan?)"/>
                    </div>
                    <div className="box" >
                        <Post person="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7af66b2444df926c9e3bc73ee088d886~c5_100x100.jpeg?x-expires=1666101600&x-signature=cSaOaQMD%2F1gKFKxM8nbSVBFPiVw%3D" name="Alex" post="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/136346675/original/e9259e36f312ea579d98e6f038df6cf2ef5ad87e/coach-you-in-league-of-legends-player.png" desc="Finalmente, diamante"/>
                    </div>
                    <div className="box" >
                        <Post person="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXHJBOWb7QHii8uWEIyOsay38aO9gLibhuw&usqp=CAU" name="Yummi" post="https://media.altchar.com/prod/images/gm_article_promo_image/f665c58e6007-norrayuumi.jpeg" desc="Minha mestre :( cade voce"/>
                    </div>
                    <div className="box">
                        <Post person="https://i.pinimg.com/736x/6b/55/b4/6b55b444542367c6863504855355e0c3.jpg" name="Kayn" post="https://64.media.tumblr.com/796de0d49cf65a67c38befb608fc2706/tumblr_pf3txsFPTu1vvgj8wo2_1280.png" desc="Noite do karaoke 🎤"/>
                    </div>
                    <div className="box">
                        <Post person="https://github.com/gabaugusto.png" name="gabaugusto" post={Java} desc="Finalmente 🙌"/>
                    </div>
                </div>
               

                <div className='suggestionx' style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                        <Suggestion />
                    </div>
                </div>

            </div>
            
        </>
    )

}