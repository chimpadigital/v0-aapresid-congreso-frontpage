import React from "react";
import { ContactoCard } from "./ContactoCard";
import { ContactCategory } from "@/lib/types";

const TenesDuddas = () => {
  const supportCategories: ContactCategory[] = [
    {
      title: "Socio Aapresid",
      contacts: [
        {
          name: "Lucia Bejariel",
          email: "inscripciones@aapresid.org.ar",
          whatsapp: "+34 16017776",
        },
        {
          name: "Mariana Lopez",
          email: "lopez@aapresid.org.ar",
          whatsapp: "+54 9 341 6046233",
        },
      ],
    },
    {
      title: "Mesa de ayuda al expositor",
      contacts: [
        {
          name: "Analia Franco",
          email: "mesadeayuda@exponenciar.com.ar",
          whatsapp: "+11-2651-2801",
        },
        {
          name: "Maite Hernandez Iraola",
          email: "mesadeayuda2@exponenciar.com.ar",
          whatsapp: "+11-3413-6373",
        },
      ],
    },
    {
      title: "Compra de entradas",
      contacts: [
        {
          name: "Malena Pulzoni",
          email: "mesadeayuda3@exponenciar.com.ar",
          whatsapp: "+11-3404-0510",
        },
      ],
    },
    {
      title: "Disertantes",
      contacts: [
        {
          email: "disertantes@aapresid.org.ar",
        },
      ],
    },
  ];

  const invitedCategory: ContactCategory = {
    title: "Invitados",
    contacts: [
      {
        email: "institucionales@aapresid.org.ar",
      },
    ],
  };
  return (
    <div className="mb-12">
      <h2 className="mb-2 text-[40px] font-bold text-primary">
        ¿Tenés alguna duda?
      </h2>
      <p className="mb-8 text-2xl">Te dejamos nuestros contactos</p>

      <div className="grid md:grid-cols-2 md:gap-10 lg:gap-[80px]">
        {/* Columna izquierda: Socio Aapresid, Compra de entradas, Invitados */}
        <div className="space-y-16">
          {/* Socio Aapresid */}
          <div>
            <div className="mb-4 mt-8 rounded-full bg-accent px-[27px] py-[9.5px] text-white">
              <h3 className="text-xl font-semibold">
                {supportCategories[0].title}
              </h3>
            </div>
            <div className="ml-3 md:ml-6">
              {supportCategories[0].contacts.map((contact, contactIndex) => (
                <ContactoCard
                  isSecondary={true}
                  key={contactIndex}
                  contact={contact}
                  nameAs="h4"
                />
              ))}
            </div>
          </div>
          {/* Compra de entradas */}
          <div>
            <div className="mb-4 mt-8 rounded-full bg-accent px-[27px] py-[9.5px] text-white">
              <h3 className="text-xl font-semibold">
                {supportCategories[2].title}
              </h3>
            </div>
            <div className="ml-3 md:ml-6">
              {supportCategories[2].contacts.map((contact, index) => (
                <ContactoCard
                  isSecondary={true}
                  key={index}
                  contact={contact}
                  nameAs="h4"
                />
              ))}
            </div>
          </div>
          {/* Invitados */}
          <div>
            <div className="mb-4 mt-8 max-w-xs rounded-full bg-accent px-[27px] py-[9.5px] text-white">
              <h3 className="text-xl font-semibold">{invitedCategory.title}</h3>
            </div>
            <div className="ml-3 md:ml-6">
              {invitedCategory.contacts.map((contact, index) => (
                <ContactoCard
                  isSecondary={true}
                  key={index}
                  contact={contact}
                  nameAs="h4"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Columna derecha: Mesa de ayuda al expositor, Disertantes */}
        <div className="space-y-16">
          {/* Mesa de ayuda al expositor */}
          <div>
            <div className="mb-4 mt-8 rounded-full bg-accent px-[27px] py-[9.5px] text-white">
              <h3 className="text-xl font-semibold">
                {supportCategories[1].title}
              </h3>
            </div>
            <div className="ml-3 md:ml-6">
              {supportCategories[1].contacts.map((contact, contactIndex) => (
                <ContactoCard
                  isSecondary={true}
                  key={contactIndex}
                  contact={contact}
                  nameAs="h4"
                />
              ))}
            </div>
          </div>
          {/* Disertantes */}
          <div>
            <div className="mb-4 mt-8 rounded-full bg-accent px-[27px] py-[9.5px] text-white">
              <h3 className="text-xl font-semibold">
                {supportCategories[3].title}
              </h3>
            </div>
            <div className="ml-3 md:ml-6">
              {supportCategories[3].contacts.map((contact, index) => (
                <ContactoCard
                  isSecondary={true}
                  key={index}
                  contact={contact}
                  nameAs="h4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenesDuddas;
