import React from "react";
import WhatsappIcon from "./icons/WhatsappIcon";
import Emailicon from "./icons/Emailicon";

interface ContactInfo {
  name?: string;
  email: string;
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
      {contact.name &&
        React.createElement(
          nameAs,
          {
            className: `font-bold text-primary ${isSecondary ? "text-xl mb-[24px]" : "text-2xl mb-[30px] "}`,
          },
          contact.name,
        )}
      <a
        href={`mailto:${contact.email}`}
        className="mb-[14px] flex items-center gap-4 lg:gap-[28px] xs:text-lg lg:text-2xl text-primary hover:text-accent"
      >
        <div className="shrink-0">

        <Emailicon />
        </div>
        {contact.email}
      </a>
      {contact.whatsapp && (
        <a
          href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 lg:gap-[28px] text-primary hover:text-accent"
        >
          <WhatsappIcon />
          <div className="xs:text-lg lg:text-2xl">WhatsApp/Tel: {contact.whatsapp}</div>
        </a>
      )}
    </div>
  );
};
