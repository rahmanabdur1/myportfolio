
import './Myservices.css';
import webdesign1 from '../../assets/myskills/web1.jpg';
import webdesign2 from '../../assets/myskills/seo.jpg';
import webdesign3 from '../../assets/myskills/web2.jpg';
import webdesign4 from '../../assets/myskills/cloud.png';

const Myservices = () => {
   

    const servicesData = [
        {
            category: "Web Design",
            content: "I design services for customers of all sizes, specializing in creating stylish, modern websites, web services, and online stores",
            imgSrc: webdesign1,
            bg: "#77adae",
        },
        {
            category: "Web Development",
            content: "I develop services for customers of all sizes, specializing in creating stylish, modern websites, web services, and online stores",
            imgSrc: webdesign2,
            bg: "#ffb200",
        },
        {
            category: "Basic SEO Marketing",
            content: "Search Engine Optimization (SEO) is a set of practices aimed at improving a website's visibility on search engines like Google, Bing, and Yahoo.",
            imgSrc: webdesign3,
            bg: "#309969",
        },
        {
            category: "Basic Cloud Services",
            content: "Creating and using a cloud service involves several steps, and the specific process can vary depending on the type of cloud service you want to set up.",
            imgSrc: webdesign4,
            bg: "#599963",
        },
    ];

    return (
        <div className='services-container' id="services">
         
            <div className='services-contant'>
                <h2 className='heading'>MY SERVICES</h2>
                <div className='services'>
                    {servicesData.map((service, index) => (
                        <div className='service' style={{ backgroundColor: service.bg }} key={index}>
                            <div>
                                <img src={service.imgSrc} alt={service.category} />
                            </div>
                            <div className='service-content'>
                                <h3>{service.category}</h3>
                                <p>{service.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Myservices;
