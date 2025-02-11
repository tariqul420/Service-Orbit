
const AboutUs = () => {

    return (
        <section className={`max-w-6xl mx-auto p-8`}>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-5xl font-bold text-color-accent dark:text-color-accent-d">About ServiceOrbit</h1>
            </div>
            <p className="mt-4 text-xl">Connecting skilled professionals with those who need them.</p>

            <div className="space-y-8 mt-6">
                <p className="text-lg text-justify">
                    At <span className="font-semibold">ServiceOrbit</span>, we believe in empowering individuals and businesses by providing
                    a seamless platform to connect service providers with those in need. Whether you’re a freelancer, a technician,
                    or a professional offering specialized services, we make it easy to showcase your skills and reach potential clients.
                    Our platform is designed to facilitate smooth communication, secure transactions, and long-term professional relationships.
                </p>

                <h2 className="text-3xl font-semibold text-color-accent dark:text-color-accent-d">Our Mission</h2>
                <p className="text-lg text-justify">
                    Our mission is to create a dynamic and inclusive ecosystem where quality services are accessible, reliable, and affordable.
                    We strive to bridge the gap between talent and demand, ensuring a smooth experience for both service providers and customers.
                    By fostering an environment of trust and efficiency, we aim to revolutionize the way people find and offer services online.
                </p>

                <h2 className="text-3xl font-semibold text-color-accent dark:text-color-accent-d">Our Vision</h2>
                <p className="text-lg text-justify">
                    We envision a world where professional skills are valued and easily accessible to those who need them.
                    ServiceOrbit aims to become the go-to platform for individuals and businesses seeking reliable services while
                    also helping professionals grow and succeed in their respective fields.
                </p>

                <h2 className="text-3xl font-semibold text-color-accent dark:text-color-accent-d">Why Choose Us?</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                    <li><span className="font-semibold">User-Friendly:</span> Easy-to-use platform for both service providers and seekers.</li>
                    <li><span className="font-semibold">Secure Transactions:</span> Ensuring safe and reliable payments with robust security measures.</li>
                    <li><span className="font-semibold">Wide Range of Services:</span> From home repairs to digital solutions and beyond.</li>
                    <li><span className="font-semibold">Verified Professionals:</span> We ensure quality and trustworthiness with a verification process.</li>
                    <li><span className="font-semibold">Customer Support:</span> Dedicated support team available to assist with any inquiries or concerns.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-color-accent dark:text-color-accent-d">Join Our Community</h2>
                <p className="text-lg">
                    Whether you are looking to offer your expertise or find reliable professionals, ServiceOrbit is here to help.
                    Join our growing community today and take advantage of a trusted platform built for efficiency, reliability, and success.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
