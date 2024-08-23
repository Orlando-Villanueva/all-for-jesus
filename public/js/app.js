function scrollTo(target) {
    this.openMenu = false;
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: 'smooth' });
}