"use client";

import { Modal } from "@/app/components/Modal/Modal";
import { Table, TableConfigType } from "@/app/components/Table/Table";
import { ModalContext, ModalContextProps } from "@/app/context/modalContext";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useContext } from "react";

export const GET_VACATIONS = gql`
  query getVacations {
    vacations {
      name
      start
      end
    }
  }
`;

type Vacation = {
  name: string;
  start: number;
  end: number;
};

export const Vacations = () => {
  const { data } = useQuery<{ vacations: Array<Vacation> }>(GET_VACATIONS);
  const { setModalComponent, closeModal } = useContext(
    ModalContext
  ) as ModalContextProps;

  const tableConfig: TableConfigType<Vacation> = {
    content: [
      {
        header: "name",
        content: (content) => <>{content.name}</>,
      },
      {
        header: "start",
        content: (content) => <>{content.start}</>,
      },
      {
        header: "end",
        content: (content) => <>{content.end}</>,
      },
      {
        header: "actions",
        content: () => (
          <>
            <button>Edit</button>
            <button>Delete</button>
          </>
        ),
        label: <>...</>,
      },
    ],
  };

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
      <Table config={tableConfig} data={data?.vacations} />
    </>
  );
};
