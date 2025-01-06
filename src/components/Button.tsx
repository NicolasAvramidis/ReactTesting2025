//props
interface Props {
  heading: string;
  colour?: "primary" | "secondary" | "success";
  onButtonPress: () => void;
}

const Button = ({ heading, colour = "primary", onButtonPress }: Props) => {
  return (
    <>
      <button
        className={"btn btn-" + colour}
        onClick={() => {
          onButtonPress();
        }}
      >
        {heading}
      </button>
    </>
  );
};

export default Button;
