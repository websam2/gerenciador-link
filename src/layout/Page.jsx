// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Page = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch('/links.json')
      .then((response) => response.json())
      .then((data) => setLinks(data))    
      .catch((error) => console.error('Error fetching the links:', error));      
  }, 
  []);

  return (
    <div className="flex flex-col xl:flex-row xl:h-screen">
      {links.map((section) => (
        <section
          key={section.id}
          className="group relative flex flex-row items-center hover:w-full xl:flex-col xl:w-1/2 xl:bg-gradient-to-r xl:from-text xl:to-bg xl:hover:from-gray-light xl:hover:to-gray xl:cursor-pointer xl:hover:brightness-120 xl:hover:shadow-lg xl:transition-all"
        >
          <ul className="sm:w-full md:w-1/2 xl:w-full">
            {section.links.map((item) => (
              <li
                key={item.nameUrl}
                className="xl:flex xl:flex-col xl:items-center xl:ease-in-out xl:duration-0"
              >
                <a
                  className="absolute xl:relative m-2 p-4 text-nowrap bg-button text-bg border-none xl:cursor-pointer rounded-md invisible xl:group-hover:visible xl:group-hover:transition-none"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.nameUrl}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute inset-y-0 right-0 text-nowrap text-center font-semibold p-4 bg-red text-bg uppercase xl:inset-y-auto xl:right-auto xl:bottom-40 xl:rotate-90 xl:text-2xl">
            {section.name}
          </div>
        </section>
      ))}
    </div>
  );
};

Page.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          nameUrl: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
};

export default Page;

  