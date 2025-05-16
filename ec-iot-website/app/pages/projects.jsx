import Image from 'next/image';

const projects = [
    {
        title: 'EMI/EMC meter',
        description: 'A 2nd year club member + a first year group is doing a project of portable EMI/EMC meter that will send alert signal if the EM interference due to nearby transmission systems is greater than the limit.',
        imageUrl: '/images/smart-home.jpg',
    },
    {
        title: 'RFID Security system',
        description: 'This project involves designing and building an RFID-based security system  to secure areas. The system uses RFID (Radio Frequency Identification) technology, where each authorized user is given a unique RFID tag or card',
        imageUrl: '/images/rfid.jpg',
    },
];

export default function Projects() {
    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold my-20 text-center">OUR PROJECTS</h1>
            <div className="w-full flex flex-col gap-8 items-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-6 rounded-lg w-full md:w-3/4 shadow"
                    >
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={250}
                            height={180}
                            className="rounded-lg mb-4 md:mb-0 md:mr-6"
                        />
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-700">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
