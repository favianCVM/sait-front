import { Button } from "@chakra-ui/react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import history from "@utils/history";

const GoBackButton = ({
  disabled = false,
  Icon = BsFillArrowLeftCircleFill,
  route = null,
  callBack = () => {},
}) => {
  return (
    <Button
      onClick={() => {
        callBack();
        if (route) history.push(route);
        else history.goBack();
      }}
      bottom={0}
      left={0}
      m="10"
      position="absolute"
      padding="6"
      disabled={disabled}
    >
      <Icon size={28} />
    </Button>
  );
};

export default GoBackButton;
