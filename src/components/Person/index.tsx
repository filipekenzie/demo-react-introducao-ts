import { User } from "../../interfaces";

interface PersonProps {
  user: User;
  handleUserAge: (name: string) => string;
  isChecked?: boolean;
}

const Person = ({ user, handleUserAge, isChecked }: PersonProps) => {
  const { name, age } = user;

  return (
    <>
      <div>Olá pessoal!!</div>
      <div>{name}</div>
      <div>{age}</div>
    </>
  );
};

export default Person;
