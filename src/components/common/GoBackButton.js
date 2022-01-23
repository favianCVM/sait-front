import { Button } from "@chakra-ui/react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import history from "@utils/history";

const GoBackButton = ({
  disabled = false,
  Icon = BsFillArrowLeftCircleFill,
  route = null,
  callBack = () => {},
  isAbsolute = true,
  ...props
}) => {
  return (
    <Button
      border="2px"
      onClick={() => {
        callBack();
        if (route) history.push(route);
        else history.goBack();
      }}
      bottom={0}
      left={0}
      mb={{
        base: isAbsolute ? "20" : "0",
        md: isAbsolute ? "10" : "0",
      }}
      ml={{
        base: isAbsolute ? "4" : "0",
        md: isAbsolute ? "10" : "0",
      }}
      position={isAbsolute ? "absolute" : "block"}
      padding="6"
      disabled={disabled}
      {...props}
    >
      <Icon size={28} />
    </Button>
  );
};

export default GoBackButton;
