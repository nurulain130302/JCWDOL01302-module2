import style from "./HeroSection.module.css";

export default function HeroSection(){
    return(
        <section className={style.hero}>
            <div className="container">
                <div style={{height: 400}}>
                    <h1>Nurul Ain</h1>
                    <h3>My First Porto</h3>
                </div>
            </div>
        </section>
    )
}