"use client";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";  // Ensure to import the styles

export function PostGrid() {
  return (
    <>
      <VerticalTimeline>
        {workExperience.map((exp) => (
          <VerticalTimelineElement
            key={exp.title}
            date={exp.date}  // Ensure the date is passed here
            iconStyle={{
              background: "#fff",  // Make the circle white
              border: "2px solid #fff",  // Add a border around the circle
            }}
            icon={<div className="w-8 h-8 rounded-full bg-white" />}  // Create a white circle
          >
            <motion.div
              className="p-6 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-700 rounded-xl cursor-pointer shadow-md transition-all duration-300 ease-in-out"
            >
              <div className="flex gap-6 flex-col md:flex-row">
                <div>
                  {/* Display job title and company name on separate lines */}
                  <motion.h3 className="font-semibold text-gray-200 text-center md:text-left text-lg">
                    {exp.title}
                  </motion.h3>
                  <motion.p className="text-gray-400 text-center md:text-left">
                    {/* Split company name onto a new line */}
                    <span className="block text-sm">{exp.companyName}</span>
                  </motion.p>
                  {/* Display the date */}
                  <motion.p className="text-gray-300 text-center md:text-left mt-2 text-sm">
                    {exp.date}  {/* Render the date here */}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}

const workExperience = [
  {
    title: "Software and Network Engineering Intern",
    companyName: "Springer Capital", 
    date: "Sept. 2024 - Jan. 2025",
  },
  {
    title: "Software Developer",
    companyName: "Ellipse Technologies PVT Ltd.", 
    date: "Dec. 2020 - Jul. 2022",
  },
  // Add more work experience here...
];
