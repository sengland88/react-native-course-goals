import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.imageStyling} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your Course Goal"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, 
    backgroundColor: '#211b6b',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
      width: '30%',
      marginHorizontal: 8,
  },
  imageStyling: {
      width: 100,
      height: 100,
      margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 10,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    color: "#120438",
    borderRadius: 16
  },
});
