export const useScrollTo = () => {
  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    const headerHeight = document.querySelector("header")?.offsetHeight ?? 92;
    const offsetTop = target
      ? target.getBoundingClientRect().top + window.scrollY - headerHeight - 24
      : 0;

    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  return { scrollTo };
};
