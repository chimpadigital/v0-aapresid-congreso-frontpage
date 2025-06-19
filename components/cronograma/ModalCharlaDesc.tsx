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
import CloseIcon from "../icons/CloseIcon";

const ModalCharlaDesc = ({
  title = "Detalles de la charla",
  description = "Descripción de la charla",
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        type="button"
        className="relative z-[1] flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full border border-transparent bg-accent px-[30px] py-[15.5px] text-lg tracking-wider text-white transition-all duration-500 before:absolute before:-left-[180%] before:top-[560%] before:z-[-1] before:h-[400%] before:w-[160%] before:origin-left before:-rotate-[20deg] before:scale-x-[0.01] before:bg-primary before:transition-transform before:duration-500 hover:border hover:border-transparent hover:border-white hover:before:scale-x-[2] md:w-fit md:min-w-[177px] md:before:-left-[10%] md:before:top-[10%] md:hover:before:scale-x-[1]"
      >
        Ver más detalles
      </button>
      <Modal
        size="2xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-items-end pt-[33px] pr-[42px] pb-0">
                <button onClick={onClose} className="ml-auto text-primary hover:scale-110 transition-all">
                  <CloseIcon size="21"/>
                </button>
              </ModalHeader>
              <ModalBody className="px-[46px] pb-[33px] pt-[33px]">
                <h2 className="mb-[32px] text-4xl font-medium tracking-wider text-primary">
                  {title}
                </h2>
                <p className="mb-5 tracking-wider text-primary">
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

export default ModalCharlaDesc;
