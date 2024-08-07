import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ButtonPage from "../components/ButtonPage";

const Page = () => {
  const [links, setLinks] = useState([]);
  const [collapsedSections, setCollapsedSections] = useState({});

  useEffect(() => {
    fetch("/links.json")
      .then((response) => response.json())
      .then((data) => {
        // Ordena os links de cada seção alfabeticamente pelo nameUrl
        const sortedData = data.map((section) => ({
          ...section,
          links: [...section.links].sort((a, b) =>
            a.nameUrl.localeCompare(b.nameUrl)
          ),
        }));
        setLinks(sortedData);
      })
      .catch((error) => console.error("Error fetching the links:", error));
  }, []);

  const handleToggle = (sectionId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <>
      <section className="hidden xl:flex flex-col xl:flex-row xl:h-screen xl:w-full">
        {links.map((section) => (
          <div
            key={section.id}
            className="group xl:flex xl:relative items-center xl:justify-center hover:w-full xl:flex-col xl:w-1/2 xl:bg-gradient-to-r xl:from-text xl:to-bg xl:hover:from-gray-light xl:hover:to-gray xl:hover:brightness-120 xl:hover:shadow-lg xl:transition-all"
          >
            <ul className="w-full">
              {section.links.map((item) => (
                <li
                  key={item.nameUrl}
                  className="flex xl:flex-col xl:items-center xl:ease-in-out xl:duration-0"
                >
                  <ButtonPage href={item.url}>{item.nameUrl}</ButtonPage>
                </li>
              ))}
            </ul>

            <div className="hidden xl:block xl:absolute xl:w-52 xl:text-xl xl:text-nowrap text-center font-semibold p-4 bg-red-dark text-bg uppercase xl:inset-y-auto xl:right-auto xl:bottom-28 xl:rotate-90">
              {section.name}
            </div>
          </div>
        ))}
      </section>
      <section className="block xl:hidden relative">
        {links.map((section) => {
          const isCollapsed = collapsedSections[section.id];
          return (
            <div key={section.id}>
              <button
                type="button"
                className="relative flex bg-button text-text items-center w-full p-4 mb-2 transition-all ease-in group"
                onClick={() => handleToggle(section.id)}
              >
                <h1 className="font-bold text-sm mr-4">{section.name}</h1>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`absolute text-text right-0 transition-transform ${
                    isCollapsed ? "" : "rotate-180"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isCollapsed ? "max-h-0" : "max-h-500px"
                }`}
              >
                <ul>
                  {section.links.map((item) => (
                    <li
                      key={item.nameUrl}
                      className="flex flex-col items-center ease-in-out duration-0"
                    >
                      <ButtonPage href={item.url}>{item.nameUrl}</ButtonPage>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Page;
