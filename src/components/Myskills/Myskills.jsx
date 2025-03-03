
import img1 from '../../assets/myskills/img1.png';
import img2 from '../../assets/myskills/img2.png';
import img3 from '../../assets/myskills/img3.png';
import img4 from '../../assets/myskills/img4.png';
import img5 from '../../assets/myskills/html.jpg';
import img6 from '../../assets/myskills/img6.png';
import img7 from '../../assets/myskills/github.png';
import img8 from '../../assets/myskills/img8.png';
import img9 from '../../assets/myskills/img9.png';
import img10 from '../../assets/myskills/gsap.jpg';
import img11 from '../../assets/myskills/threejs.png';
import img12 from '../../assets/myskills/python.png';
import './Myskills.css';

const Myskills = () => {
    const skillsData = [
        { name: "HTML", imgSrc: img5 },
        { name: "CSS/SCSS", imgSrc: img4 },
        { name: "Javescript/Typescript/Jquery", imgSrc: img2 },
        { name: "React JS/Next JS", imgSrc: img1 },
        { name: "Vue JS", imgSrc: img3 },
        { name: "Express JS/Node JS/Mongodb", imgSrc: img11 },
        { name: "SQL/MY SQL/Postgreqsql", imgSrc: img12 },
        { name: "Graphql", imgSrc: img10 },
        { name: "Prisma", imgSrc: img6 },
        { name: "Docker", imgSrc: img8 },
        { name: "AWS", imgSrc: img9 },
        { name: "Github", imgSrc: img7 },
        { name: "Gsap", imgSrc: img10 },
        { name: "Three.Js", imgSrc: img11 },
        { name: "Python", imgSrc: img12 },
    ];


    return (
        <div className='skills-container' id="skills">
            <div className='skills'>
                <h2 className='heading'>MY SKILLS</h2>
                <div className='skills-categories'>
                    {skillsData.map((skill, index) => (
                        <div
                            className='category'
                            key={index}
                            style={{ backgroundColor: '#c4e8ec' }}
                        >
                            <img src={skill.imgSrc} alt={skill.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Myskills;
