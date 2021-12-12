import { useDisclosure, useBoolean, Grid } from "@chakra-ui/react";
import PageHeader from "@components/common/PageHeader";
import { IoAddCircleOutline } from "react-icons/io5";
import ComponentTable from "@components/components/ComponentTable";
import ManageComponent from "@components/components/ManageComponent";
import ComponentCard from "@components/components/ComponentCard";

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

      <ComponentTable
        data={data}
        handleDelete={() => {}}
        handleEdit={() => {}}
      />

      <ManageComponent
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
        dialogBlocked={dialogBlocked}
      />

      <Grid
        templateColumns={{
          md: "repeat(3, 1fr)",
        }}
        rowGap="6"
        columnGap="4"
      >
        <ComponentCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU"
          }
          name={"LOREM IPSUM"}
          description="LOREMSOPUMSUKSJD aghksddsad asdgsajkdsa avdgjkasdsaj jasgdjkasb askjd asd"
        />
        <ComponentCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU"
          }
          name={"LOREM IPSUM"}
          description="LOREMSOPUMSUKSJD aghksddsad asdgsajkdsa avdgjkasdsaj jasgdjkasb askjd asd ssss ssssssss sssssssssss ssssssssssssssssssss"
        />
        <ComponentCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU"
          }
          name={"LOREM IPSUM"}
          description="LOREMSOPUMSUKSJD aghksddsad asdgsajkdsa avdgjkasdsaj jasgdjkasb askjd asd"
        />
        <ComponentCard
          image={
            "http://images7.memedroid.com/images/UPLOADED456/5fd465e4f005e.jpeg"
          }
          name={"LOREM IPSUM"}
          description="LOREMSOPUMSUKSJD aghksddsad asdgsajkdsa avdgjkasdsaj jasgdjkasb askjd asd"
        />
        <ComponentCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqgQWqPMtL9jjdMFs5t-0uyIc8I2S9JX6w&usqp=CAU"
          }
          name={"LOREM IPSUM"}
          description="LOREMSOPUMSUKSJD aghksddsad asdgsajkdsa avdgjkasdsaj jasgdjkasb askjd asd"
        />
        
      </Grid>
    </>
  );
};

export default DisplayComponents;
