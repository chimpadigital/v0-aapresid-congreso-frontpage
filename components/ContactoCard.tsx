import React from "react";
import WhatsappIcon from "./icons/WhatsappIcon";
import Emailicon from "./icons/Emailicon";

interface ContactInfo {
  name?: string;
  desc?: string;
  email?: string;
  whatsapp?: string;
}

type NameTagType = "h3" | "h4" | "span" | "div";

export const ContactoCard = ({
  contact,
  nameAs = "h4",
  className = "",
  isSecondary = false,
}: {
  contact: ContactInfo;
  nameAs?: NameTagType;
  className?: string;
  isSecondary?: boolean;
}) => {
  return (
    <div className={`${className} mb-9`}>
      {contact.name && (
        <div className="mb-[24px] flex flex-wrap items-center gap-3">
          {React.createElement(
            nameAs,
            {
              className: `font-bold text-primary ${
                isSecondary ? "text-xl " : "text-2xl mb-[30px] "
              }`,
            },
            contact.name,
          )}
          {contact.desc && (
            <span
              className={`text-primary ${isSecondary ? "text-xl" : "text-2xl"}`}
            >
              {contact.desc}
            </span>
          )}
        </div>
      )}
      {contact.email && (
        <a
          href={`mailto:${contact.email}`}
          className="mb-[14px] flex items-center gap-4 text-primary hover:text-accent xs:text-lg lg:gap-[28px] lg:text-2xl"
        >
          <div className="shrink-0">
            <Emailicon />
          </div>
          <span className="underline">{contact.email}</span>
        </a>
      )}
      {contact.whatsapp && (
        <a
          href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-primary hover:text-accent lg:gap-[28px]"
        >
          <WhatsappIcon />
          <div className="underline xs:text-lg lg:text-2xl">
            WhatsApp/Tel: {contact.whatsapp}
          </div>
        </a>
      )}
    </div>
  );
};
