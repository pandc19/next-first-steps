import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contáctame por aquí',
};


export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    );
}