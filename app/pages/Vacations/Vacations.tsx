"use client";

import { Modal } from "@/app/components/Modal/Modal";
import { ModalContext, ModalContextProps } from "@/app/context/modalContext";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useContext } from "react";

export const GET_VACATIONS = gql`
  query getVacations {
    vacations {
      name
    }
  }
`;

export const Vacations = () => {
  const { data } = useQuery(GET_VACATIONS);
  const { setModalComponent, closeModal } = useContext(
    ModalContext
  ) as ModalContextProps;

  return (
    <>
      vac {console.log(data)}
      <button
        onClick={() => {
          setModalComponent(
            <Modal closingHandler={closeModal}>
              <>pajonk</>
            </Modal>
          );
        }}
      >
        open modal
      </button>
    </>
  );
};
