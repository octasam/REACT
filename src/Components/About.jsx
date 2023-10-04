import './About.css';
import myImg from '../assets/octasam.jpg';

const About = () => (
    <>
        <div className='about--container'>
            <h1 className='titleAbout'>About me</h1>
            <h2>Octavio Samuel Esteves Fragoso</h2>
            <h3>email: octavio.sef@gmail.com</h3>
            <p>Description: I'm a geophysical engineer and I'm in the process of becoming a web developer. I like to play online video games and jellyfish beer.</p>
            <img src={myImg} id='myPic' alt="octasam" style={{ width: '300px', height: '400px'}}/>
        </div>
    </>
)

export default About;