import Project from '../Project';
import OurSpace from '../../assets/images/work/OurSpace SC.png';
import DayScheduler from '../../assets/images/work/day-scheduler.jpg';
import MVCBlog from '../../assets/images/work/MVC-blog.jpg';
import SerialKiller from '../../assets/images/work/serial-killer-quiz.jpg';
import WeatherDashboard from '../../assets/images/work/weather-dashboard.jpg';
import '../../styles/Portfolio.css';

export default function Portfolio(props) {
  return (
    <div className='container-portfolio'>
      <h2>My Previous Projects</h2>
      <div className='project-row'>

          <div className='project-item'>
            <Project
              title='OurSpace'
              image={OurSpace}
              link='https://ourspace.herokuapp.com/'
              github='https://github.com/Ashlhc/OurSpace-Social-Media.git'
            />
          </div>
          <div className='project-item'>
            <Project
              title='Day Scheduler'
              image={DayScheduler}
              link='https://ashlhc.github.io/Ash-Day-Planner/'
              github='https://github.com/Ashlhc/Ash-Day-Planner.git'
            />
          </div>

          <div className='project-item'>
            <Project
              title='MVC Blog'
              image={MVCBlog}
              link='https://nerd-talk-blog.herokuapp.com/home'
              github='https://github.com/Ashlhc/Nerd-Talk-Blog.git'
            />
            </div>
          </div>
          <div className='project-row'>
          <div className='project-item serial-killer'>
            <Project
              title='Serial Killer Quiz'
              image={SerialKiller}
              link='https://ashlhc.github.io/MySerialKillerQuiz/'
              github='https://github.com/Ashlhc/MySerialKillerQuiz.git'
            />
          </div>

          <div className='project-item weather-dashboard'>
            <Project
              title='Weather Dashboard'
              image={WeatherDashboard}
              link='https://ashlhc.github.io/Weather-App-Ash/'
              github='https://github.com/Ashlhc/Weather-App-Ash.git'
            />

        </div>
      </div>
    </div>

  );
}