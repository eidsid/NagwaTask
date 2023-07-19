import { useEffect, useState } from "react";
import "./OptionButton.css";
//defined the type of props
interface OptionButtonProps {
  label: string;
  answer?: string;
  isAnswered: boolean;
  func: (label: string) => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  label,
  func,
  answer,
  isAnswered,
}) => {
  //add clicked state to check if the button is clicked or not
  const [Clicked, setClicked] = useState<boolean>(false);

  //check is isAnswered or not ? if not setClick => false
  useEffect(() => {
    if (!isAnswered) setClicked(false);
  }, [isAnswered]);
  // when the button clicked it run the  function from the parent and setClicked(true)
  const handelClick = () => {
    func(label);
    setClicked(true);
  };

  /**  
  *1- to check if the current button is clicked or not,  and if it was the right answer or not, if it was the right answer it  give the button success className
  and if not it give it danger className.
 *
  *2-check if there are answer and the answer === label  or not  if true are answer it give the button success className => to show the right answer to the user

  */
  const classesSetUp = {
    class: `option-button 
  ${Clicked && (answer === label ? "success" : "danger")} 
  ${isAnswered && answer === label && "success"}`,
  };

  return (
    <button
      type="button"
      onClick={handelClick}
      className={classesSetUp.class}
      disabled={isAnswered}
    >
      {label}
    </button>
  );
};

export default OptionButton;
