const scrollToSection = (sectionId: string, offset: number = 100) => {
  const element = document.getElementById(sectionId);

  if (!element) return;

  const navbar = document.querySelector("header");

  const navbarHeight = navbar ? navbar.getBoundingClientRect().height : offset;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;

  const offsetPosition = elementPosition - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export default scrollToSection;
