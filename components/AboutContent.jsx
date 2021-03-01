export default function AboutContent() {
    return (
        <div id="ctn" className="container">
            <h3 className="">About</h3>
            <section id="aboutCont" className="py-6 border-top border-bottom rounded">
                <div className="row">
                    <div className="col-md-6 my-auto">
                        <img className="about-img rounded" src="/hacker-okan.jpg" alt="movie-img" />
                    </div>
                    <div className="col my-auto">
                        <h4>TMDB Front-end Project From Ata Bayraktar</h4>
                        <p className="pr-20">This is a front-end project for job application to Appcent which developped by Ata Bayraktar. HTML5, CSS Bootstrap and React/Next.js are the used front-end technologies. </p>
                        <p>To contact me: atabayraktar17@gmail.com </p>
                    </div>
                </div>
            </section>
        </div>
    )
}