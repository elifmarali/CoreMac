import React, { useState } from 'react'
import "./FAQ.css";
import Header from './Header';
import Footer from './Footer';

import {Accordion, AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion,} from 'reactstrap';

function FAQ(){

     const [open, setOpen] = useState('');
     const toggle = (id) => {
       if (open === id) {
         setOpen();
       } else {
         setOpen(id);
       }
     }

  return (
    <div >
        <Header/>
        <div className='titleContainer'>
            <h1>Sıkça Sorulan Sorular</h1>
        </div>



        <div className='accordionField'>
          <Accordion flush open={open} toggle={toggle}> 
            {/* <UncontrolledAccordion stayOpen className='UncontrolledAccordion'> */}

                <AccordionItem className='AccordionField'>
                    <AccordionHeader targetId="1"><strong>CoreCampus Nedir?</strong></AccordionHeader>
                    <AccordionBody accordionId="1">
                        <strong>CoreCampus</strong>, Özkan buraya chatgpt şovu yapacak.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="2"><strong>Soru 2</strong></AccordionHeader>
                    <AccordionBody accordionId="2">
                        <strong>Cevap</strong> 2
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="3"><strong>Soru 3</strong></AccordionHeader>
                    <AccordionBody accordionId="3">
                        <strong>Cevap</strong> 3
                    </AccordionBody>
                </AccordionItem>
            
                <AccordionItem>
                    <AccordionHeader targetId="4"><strong>Soru 4</strong></AccordionHeader>
                    <AccordionBody accordionId="4">
                        <strong>Cevap</strong> 4
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="5"><strong>Soru 5</strong></AccordionHeader>
                    <AccordionBody accordionId="5">
                        <strong>Cevap</strong> 5
                    </AccordionBody>
                </AccordionItem>
                
                <AccordionItem>
                    <AccordionHeader targetId="6"><strong>Soru 6</strong></AccordionHeader>
                    <AccordionBody accordionId="6">
                        <strong>Cevap</strong> 6
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="7"><strong>Soru 7</strong></AccordionHeader>
                    <AccordionBody accordionId="7">
                        <strong>Cevap</strong> 7
                    </AccordionBody>
                </AccordionItem>

                {/* </UncontrolledAccordion> */}
                 </Accordion>
        </div>     

   
    <Footer/>

    </div>      
  );
}

export default FAQ;