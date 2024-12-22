import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = 'Service Orbit'
    }, []);

    return (
        <div>
            This is the Home page
        </div>
    );
};

export default Home;