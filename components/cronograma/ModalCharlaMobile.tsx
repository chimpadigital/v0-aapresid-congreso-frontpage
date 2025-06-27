"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import CloseIcon from "../icons/CloseIcon";

const ModalCharlaMobile = ({
  title = "Detalles de la charla",
  description = "Descripción de la charla",
  buttonText = "Ver más detalles",
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        type="button"
        className="mt-6 w-full rounded-full bg-accent px-3 py-4 text-[16px] text-white transition-colors hover:bg-[#61bc4f]"
      >
       {buttonText}
      </button>
      <Modal
        size="2xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-items-end pb-0 pr-[20px] pt-[15px]">
                <button
                  onClick={onClose}
                  className="ml-auto text-primary transition-all hover:scale-110"
                >
                  <CloseIcon size="18" />
                </button>
              </ModalHeader>
              <ModalBody className="px-[20px] pb-[33px] pt-[10px]">
                <h2 className="mb-[15px] text-base font-medium tracking-wider text-primary">
                  {title}
                </h2>
                <p className="mb-5 text-sm tracking-wider text-paragraph">
                  {description}
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCharlaMobile;
