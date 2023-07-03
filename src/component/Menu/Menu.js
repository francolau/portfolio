import React from 'react'

const Menu = ({mobile}) => {

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

    return (
      <>
  {
    mobile ? 
    
        <ul
        data-aos="fade-down"
        data-aos-duration="380"
        data-aos-offset="100"
        className={ "list-none space-y-2 flex flex-col items-end"}
      >
        <a
          href="#info"
          className="  hover:text-[#fd0] sm:text-xs md:text-sm opacity-80 hover:opacity-100 hover:scale-[1.15] transform transition w-fit  duration-300 cursor-pointer"
        >
          ABOUT
        </a>
        <a
          href="#skills"
          className="  hover:text-[#fd0] sm:text-xs md:text-sm opacity-80 hover:opacity-100 hover:scale-[1.15] transform transition w-fit  duration-300 cursor-pointer"
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className="  hover:text-[#fd0] sm:text-xs md:text-sm opacity-80 hover:opacity-100 hover:scale-[1.15] transform transition w-fit  duration-300 cursor-pointer"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="  hover:text-[#fd0] sm:text-xs md:text-sm opacity-80 hover:opacity-100 hover:scale-[1.15] transform transition w-fit duration-300  cursor-pointer"
        >
          CONTACT
        </a>
      </ul>
    
    :

    <ul
    data-aos="slide-left"
    data-aos-duration="500"
    data-aos-offset="100"
    className={ "list-none space-y-2 flex flex-col"}
  >
    <a
      href="#info"
      className="  hover:text-[#fd0] opacity-80 hover:opacity-100 hover:scale-[1.15] transform transition w-fit  duration-300 cursor-pointer"
    >
      ABOUT
    </a>
    <a
      href="#skills"
      className="  hover:text-[#fd0] opacity-80 hover:opacity-100 hover:scale-[1.15] transform transition w-fit  duration-300 cursor-pointer"
    >
      SKILLS
    </a>
    <a
      href="#projects"
      className="  hover:text-[#fd0] opacity-80 hover:opacity-100 hover:scale-[1.15] transform transition w-fit  duration-300 cursor-pointer"
    >
      PROJECTS
    </a>
    <a
      href="#contact"
      className="  hover:text-[#fd0] opacity-80 hover:opacity-100 hover:scale-[1.15] transform transition w-fit duration-300  cursor-pointer"
    >
      CONTACT
    </a>
  </ul>
  }
      </>
     );
}
 
export default Menu;

