import React, { useState, useRef } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
const TaskInput = (props) => {
  const taskRef = useRef("");
  const onChangeHandler = (text) => {
    taskRef.current = text;
  };
  const onPressHandler = () => {
    const task = taskRef.current;
    if (task !== "") {
      props.addTask(task);
    }
  };
  return (
    <Modal visible={props.isAddMode} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add item"
          style={styles.input}
          onChangeText={onChangeHandler}
        />
        <View style={styles.btn}>
          <Button title="Add" onPress={onPressHandler} color={"#00aeff"} />
          <Button
            title="Cancel"
            onPress={() => {
              props.cancelTask();
            }}
            color={"red"}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  input: {
    padding: 2,
    borderColor: "#2196f3",
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
    width: "90%",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    paddingHorizontal: 20,
  },
});

export default TaskInput;
