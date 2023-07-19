function getSemester() {
    const monthsPerSemester = 6;
    const dateStart = new Date("02/08/2022");
    const currentDate = new Date();
    const totalMonths = (currentDate.getFullYear() - dateStart.getFullYear()) * 12 + (currentDate.getMonth() - dateStart.getMonth());
    const semester = Math.floor(totalMonths / monthsPerSemester) + 1;
    return semester;
}
  

const AboutContainer = () => {
    return (
        <section className="aboutcontainer">
            <h2>Sobre mim</h2>
            <p>Sou o Allan Amâncio, estudante do {getSemester()}º período do
            Curso Superior de Tecnologia em Sistemas para Internet - IFPB.
            Atualmente trabalho com projetos fullstack, em diversas linguagens
            de programação e ferramentas utilitárias. Espero que goste de algum
            dos meus projetos. Fique à vontade!</p>
        </section>
    );
}

export default AboutContainer