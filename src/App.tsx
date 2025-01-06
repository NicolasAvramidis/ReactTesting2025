import Alert from "./components/Alert";
import Button from "./components/Button";
//import ListGroup from "./components/ListGroup";

function App() {
  /*let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // function to be passes into prop of ListGroup to handle select item action
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      */

  const handleButtonPress = () => {
    console.log("Button Pressed");
  };

  return (
    <div>
      <Alert>
        Hello World!{" "}
        <Button heading="Press Me!" onButtonPress={handleButtonPress} />{" "}
      </Alert>
    </div>
  );
}

export default App;
