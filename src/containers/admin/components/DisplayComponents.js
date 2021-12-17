import { useDisclosure, useBoolean, Grid } from "@chakra-ui/react";
import PageHeader from "@components/common/PageHeader";
import { IoAddCircleOutline } from "react-icons/io5";
import ComponentTable from "@components/components/ComponentTable";
import ManageComponent from "@components/components/ManageComponent";
import ComponentCardDisplayer from "@components/components/ComponentCardDisplayer";

const data = [
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
];

const DisplayComponents = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dialogBlocked, setDialogBlocked] = useBoolean(false);

  const handleSubmit = (values) => {
    console.log(values);
    setDialogBlocked.on();
  };

  return (
    <>
      <PageHeader
        title="Componentes"
        action={onOpen}
        actionIcon={<IoAddCircleOutline />}
        actionName="anadir componente"
      />

      <ManageComponent
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
        dialogBlocked={dialogBlocked}
      />

      <ComponentCardDisplayer
        data={[
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
          {
            name: "lagKOKOKOK",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGkaC3ZMU3-5Nbr82mnJzd2wk5WaQSNpzfg&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGkaC3ZMU3-5Nbr82mnJzd2wk5WaQSNpzfg&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
          {
            name: "lag",
            description: "something bored",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU",
          },
        ]}
      />
    </>
  );
};

export default DisplayComponents;
