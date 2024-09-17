import React from "react";

const JobCard = ({
  jobTitle,
  companyName,
  location,
  description,
  tags,
  imageSrc,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white m-4 transition-transform transform hover:scale-105 hover:shadow-lg">
      <img className="w-full object-cover h-40" src={imageSrc} alt={jobTitle} />
      <div className="p-4">
        <div className="font-semibold text-xl mb-2 text-gray-900">
          {jobTitle}
        </div>
        <div className="text-gray-700 text-base mb-1">{companyName}</div>
        <div className="text-gray-500 text-sm mb-3">{location}</div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-4 py-3 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-xs font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
