import React from "react";
import { ContactoCard } from "./ContactoCard";
import { ContactCategory } from "@/lib/types";
import { useTranslations } from "next-intl";

const TenesDuddas = () => {
  const t = useTranslations("tenes-dudas");
  const supportCategories: ContactCategory[] = [
    {
      title: t("socio-aapre"),
      contacts: [
        {
          name: "Mariana Lopez",
          email: "lopez@aapresid.org.ar",
          whatsapp: "+54 9 341 6046233",
        },
        {
          name: "Inscripciones",
          email: "inscripciones@aapresid.org.ar ",
        },
      ],
    },
    {
      title: t("mesa-expositores"),
      contacts: [
        {
          name: "Maite Hernandez Iraola",
          desc: t("patrocinios-a-b-c-d"),
          email: "mesadeayuda2@exponenciar.com.ar",
          whatsapp: "+54 9 11-3413-6373",
        },
        {
          name: "Malena Pulzoni",
          desc: t("sin-patrocicio"),
          email: "mesadeayuda3@exponenciar.com.ar",
          whatsapp: "+54 9 11-3404-0510",
        },
      ],
    },
    {
      title: t("compra-entradas"),
      contacts: [
        {
          name: "Malena Pulzoni",
          whatsapp: "+11-3404-0510",
          email: "mesadeayuda3@exponenciar.com.ar"
        },
      ],
    },
    {
      title: t("disertantes"),
      contacts: [
        {
          email: "mesadeayuda3@exponenciar.com.ar",
        },
      ],
    },
  ];

  const invitedCategory: ContactCategory = {
    title: t("invitados"),
    contacts: [
      {
        email: "institucionales@aapresid.org.ar",
      },
    ],
  };
  return (
    <div id="tenes-dudas" className="mb-12">
      <h2 className="mb-2 text-[40px] font-bold text-primary">{t("titulo")}</h2>
      <p className="mb-8 text-2xl">{t("subtitulo")}</p>

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
