import React, { useEffect, useState } from "react";
import TypeAnimation from "react-type-animation";

const Skills = () => {
    const [skillsData, setSkillsData] = useState([]);
    useEffect(() => {
        fetch("skills.json")
            .then((res) => res.json())
            .then((data) => setSkillsData(data));
    }, []);
    return (
        <div
            name="skills"
            className="w-full min-h-screen h-full flex items-center bg-dark pt-[80px] text-gray-300"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-white border-black bg-accent px-3">
                        My Skills
                        <TypeAnimation className="block-inline"
                            cursor={true}
                            sequence={[
                                '.',
                                2000,
                                '. .',
                                2000,
                                ' . . .',
                            ]}
                            wrapper="a"
                            repeat={3}
                        />
                    </p>
                    <p className="py-6 text-white font-bold">These are the technologies I've worked with</p>
                </div>


                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.id}
                            className="shadow-md shadow-dark rounded-md hover:scale-110 duration-500"
                        >
                            <img
                                className="w-16 pt-4 mx-auto"
                                src={skill.img}
                                alt="HTML icon"
                            />
                            <p className="my-4">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
