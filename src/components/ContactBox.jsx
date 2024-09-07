import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { useState } from 'react';

export default function ContactBox() {
    const [contactView, setContactView] = useState('contactInfo');

    return (
        <div>
        {/* Conditionally render form or contact info card based on contactView state  */}
        {contactView === 'contactInfo' ? (
            <ContactInfo contactView={contactView} setContactView={setContactView}/>
        ) : ( 
            <ContactForm contactView={contactView} setContactView={setContactView}/> 
        )}
        </div>
    
    );
}
