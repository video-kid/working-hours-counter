"use client";

import { Modal } from "@/app/components/Modal/Modal";
import { Table, TableConfigType } from "@/app/components/Table/Table";
import { ModalContext, ModalContextProps } from "@/app/context/modalContext";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { AddForm } from "./components/Form/AddForm";
import { EditForm } from "./components/Form/EditForm";

export const GET_VACATIONS = gql`
  query getVacations {
    vacations {
    id
		details
		end
		last_modified
		name
		start
		created
    }
  }
`;

export const DELETE_VACATION = gql`
mutation updateVacations($id: Int!) {
  delete_vacations (
    where: {id: {_eq: $id}},
  ) {
    affected_rows
    returning {
        id
    }
  }
}
`;


export type Vacation = {
  name: string;
  start: number;
  end: number;
  id: number;
  details: string;
  created: string;
  last_modified: string;
};

export const Vacations = () => {
  const { data } = useQuery<{ vacations: Array<Vacation> }>(GET_VACATIONS);
  const [deleteVacation] = useMutation(DELETE_VACATION);
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
        content: (data) => (
          <>
            <button
              onClick={() => {
                setModalComponent(
                  <Modal closingHandler={closeModal}>
                    <EditForm
                      closingHandler={closeModal}
                      vacationDetails={data}
                    />
                  </Modal>
                );
              }}
              aria-label="edit"
            >
              Edit
            </button>
            <button aria-label="delete" onClick={() => {
                  deleteVacation({ variables: { id: data.id } });
            }}>Delete</button>
          </>
        ),
        label: <>...</>,
      },
    ],
  };

  return (
    <>
      <button
        onClick={() => {
          setModalComponent(
            <Modal closingHandler={closeModal}>
              <AddForm closingHandler={closeModal} />
            </Modal>
          );
        }}
      >
        Add Vacations
      </button>
      <Table config={tableConfig} data={data?.vacations} />
    </>
  );
};
