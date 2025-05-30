import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FaceCard = ({ image, name, role, githubLink, linkedinLink, email }) => {
    return (
        <div className="p-4 text-center max-w-xs">
            <img
                src={image}
                alt={`${name}'s face`}
                className="w-50 h-50 object-cover mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{role}</p>
            <div className="flex justify-center space-x-4">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                    <FaGithub className="text-2xl" />
                </a>
                <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                    <FaLinkedin className="text-2xl" />
                </a>
                <a
                    href={`mailto:${email}`}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                    <FaEnvelope className="text-2xl" />
                </a>
            </div>
        </div>
    );
};

export default FaceCard;
