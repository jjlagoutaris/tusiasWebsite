import React, { useEffect, useState } from "react";
import "./Contact.scss";
import { Container } from "react-bootstrap";
import { client, urlFor } from "../../client";

const Contact = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = '*[_type=="contact"] | order(information)';

    client.fetch(query).then((info) => setData(info));
  }, []);

  return (
    <>
      <Container
        className="app__contact-container app__flexColumn"
        id="app__contact-container"
        fluid
      >
        <h2 className="contact-header app__header-font-variant">Contact Me 👋</h2>
        
        <div className="contact-section app__flexCenter">
          {data.map((contact, index) => (
            <div
              className="contact-section-card app__flexColumn"
              key={index}
            >
              <img src={urlFor(contact.image)} alt={contact.title} />
              <p className="app__contact-card-text" style={{ marginTop: 10 }}>
                {contact.information}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </>
  );
};

export default Contact;
