import {
    Accordion,
    AccordionAction,
    AccordionContent,
    AccordionIcon,
    AccordionItem,
    AccordionTitle,
} from 'keep-react';

const faqs = [
    {
        question: "What is ServiceOrbit?",
        answer:
            "ServiceOrbit is a platform that connects service providers with customers, making it easy to find and offer services in various categories like home maintenance, IT support, tutoring, and more.",
    },
    {
        question: "How does ServiceOrbit work?",
        answer:
            "Users can browse services, post service requests, or register as service providers. Customers can hire professionals based on reviews, ratings, and pricing.",
    },
    {
        question: "Is ServiceOrbit free to use?",
        answer:
            "Creating an account and browsing services is free. However, some premium features or highlighted listings may require a fee.",
    },
    {
        question: "How do I hire a service provider?",
        answer:
            "Simply search for the service you need, compare providers based on reviews and pricing, and book the one that best fits your needs.",
    },
    {
        question: "What if I am not satisfied with the service?",
        answer:
            "If you are not satisfied with the service, you can report the issue to our support team, leave a review, and request a refund depending on the provider's policy.",
    },
];

const FAQ = () => {
    return (
        <>
            <h2
                data-aos="fade-up"
                className="text-5xl font-bold text-center max-sm:text-4xl mb-12">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible defaultValue="faq-1">
                {
                    faqs?.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index + 1}`} data-aos="fade-up" data-aos-delay={index * 100} >
                            <AccordionAction>
                                <AccordionTitle className="first-letter:text-primary-500">
                                    Q. {faq?.question}
                                </AccordionTitle>
                                <AccordionIcon />
                            </AccordionAction>
                            <AccordionContent>
                                {faq?.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    )
}

export default FAQ
