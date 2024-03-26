import AboutMe from "./AboutMe"
import Infos from "./Infos"
import Name from "./Name"
import Image from "./image"
import Links from "./Links"

function Background(){
    return(
        <div className="background">  
            <div className="left">
                <Image />
                <AboutMe />
            </div> 
            <div className="right">
                 <Name />
                 <Infos />
                 <Links />
            </div>
        </div>
        

    )
}

export default Background
