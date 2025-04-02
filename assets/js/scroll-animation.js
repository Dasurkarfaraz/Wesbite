document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll("[data-scroll]");

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) *
                (percentageScroll / 100)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("opacity-100", "translate-y-0");
        element.classList.remove("opacity-0", "translate-y-10");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 75)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
});