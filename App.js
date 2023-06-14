import React, { useRef, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isAddMode, setIsMode] = useState(false);
  const addTask = (task) => {
    setTasks((prev) => [...prev, { id: Math.random().toString(), task: task }]);
    setIsMode(false);
  };
  const onDelete = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id != id);
    });
  };
  const onCancel = () => {
    setIsMode(false);
  };
  return (
    <View style={styles.container}>
      <Button
        title="Add Your Task"
        onPress={() => {
          setIsMode(true);
        }}
      />
      <TaskInput
        addTask={addTask}
        isAddMode={isAddMode}
        cancelTask={onCancel}
      />
      <TaskList tasks={tasks} onDelete={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "#f3e9e9",
  },
});

export default App;
