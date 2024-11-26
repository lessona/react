import { Button } from "../button/button";
import { Text } from "../text/text";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button mode="secondary" size="large" disabled={isActive} onClick={onClick}>
      Restaurant:<Text>{title} </Text>
    </Button>
  );
};
