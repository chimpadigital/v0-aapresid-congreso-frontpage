"use client";
import React, { useState } from "react";
import CompartirIcon from "../icons/CompartirIcon";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import RedLinkedin from "../icons/RedLinkedin";
import RedFacebook from "../icons/RedFacebook";
import RedX from "../icons/RedX";
import WhatsappIcon from "../icons/WhatsappIcon";

const ModalCompartir = ({ link = "" }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Restablece el estado después de 2 segundos
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };
  return (
    <>
      <button
        onClick={onOpen}
        className="relative z-[1] flex w-[min(235px,100%)] items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[145%] before:top-[160%] before:z-[-1] before:h-[300%] before:w-[160%] before:-rotate-[35deg] before:bg-secondary before:transition-transform before:duration-500 hover:border-transparent hover:before:scale-[3]"
      >
        <span>Compartir</span>
        <CompartirIcon />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex gap-3 pt-10">
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}`}
                    aria-label="Share on Linked In"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid aspect-square h-[60px] place-items-center rounded-full bg-accent"
                  >
                    <RedLinkedin />
                  </a>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
                    aria-label="Share on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid aspect-square h-[60px] place-items-center rounded-full bg-accent"
                  >
                    <RedFacebook />
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${link}&text=this%20is%20a%20basic%20share%20page`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share Twitter"
                    className="grid aspect-square h-[60px] place-items-center rounded-full bg-accent"
                  >
                    <RedX />
                  </a>

                  <a
                    href={`https://api.whatsapp.com/send?text=¡Mira%20esto!%20${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Whatsapp"
                    className="grid aspect-square h-[60px] place-items-center rounded-full bg-accent text-white"
                  >
                    <WhatsappIcon />
                  </a>

                  <a
                    href={`mailto:?subject=¡Take a look!&body=${link}`}
                    aria-label="Share onInstagram"
                    className="grid aspect-square h-[60px] place-items-center rounded-full bg-accent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="21"
                      viewBox="0 0 29 21"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_8247_22013)">
                        <path
                          d="M25.0576 0.299805H3.94208C2.03025 0.299805 0.474609 1.86853 0.474609 3.79644V17.2032C0.474609 19.1311 2.03025 20.6998 3.94208 20.6998H25.0576C26.9695 20.6998 28.5251 19.1311 28.5251 17.2032V3.79644C28.5251 1.86853 26.9695 0.299805 25.0576 0.299805ZM27.1498 3.79644V17.2032C27.1498 17.5145 27.0821 17.8095 26.9619 18.0754L18.3834 10.4993L26.9619 2.92317C27.0821 3.18913 27.1498 3.48463 27.1498 3.79542V3.79644ZM25.0576 1.68664C25.3719 1.68664 25.6695 1.75746 25.9373 1.88279L15.1554 11.4047C14.782 11.7348 14.2182 11.7348 13.8448 11.4047L3.06246 1.88279C3.33023 1.75695 3.62782 1.68664 3.94208 1.68664H25.0576ZM2.03783 18.0759C1.91758 17.81 1.84988 17.5145 1.84988 17.2037V3.79644C1.84988 3.48514 1.91758 3.19014 2.03783 2.92419L10.6163 10.5003L2.03783 18.0759ZM3.94208 19.313C3.62782 19.313 3.33023 19.2422 3.06246 19.1168L11.7183 11.4729L12.8879 12.5062C13.3477 12.9122 13.9236 13.115 14.4996 13.115C15.0756 13.115 15.6521 12.9122 16.1118 12.5062L17.2815 11.4729L25.9368 19.1168C25.669 19.2427 25.3714 19.313 25.0571 19.313H3.94208Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_8247_22013">
                          <rect
                            width="28.05"
                            height="20.4"
                            fill="white"
                            transform="translate(0.474609 0.299805)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>

                <div className="mt-10 flex w-full justify-between rounded-full border border-primary px-[40px] py-[23px] text-primary">
                  <p className="w-full break-words">{link}</p>
                  <button
                    onClick={handleCopy}
                    className="hidden text-sm font-medium sm:block"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                <button onClick={handleCopy} className="text-primary sm:hidden">
                  {copied ? "Copied!" : "Copy"}
                </button>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCompartir;
