import Project from '../Project';
import OurSpace from '../../assets/images/OurSpace SC.png';




export default function Portfolio(props) {
    return (
        <div className='container portfolio'>
            <div className='row'>
                <h2>My Previous Projects</h2>
                <Project title='OurSpace' image={OurSpace} link='https://ourspace.herokuapp.com/' github='https://github.com/Ashlhc/OurSpace-Social-Media.git'/>
                <Project/>
                <Project/>

            </div>
        </div>
    )
}