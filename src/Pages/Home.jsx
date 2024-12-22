import { useEffect } from "react";
import Banner from "../Components/Home/Banner";

const Home = () => {
    useEffect(() => {
        document.title = 'Service Orbit'
    }, []);

    return (
        <section>
            <Banner />
        </section>
    );
};

export default Home;