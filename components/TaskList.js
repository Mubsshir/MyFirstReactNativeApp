import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableNativeFeedback } from "react-native";
const TaskList = (props) => {
  return (
    <FlatList
      style={styles.listBox}
      data={props.tasks}
      renderItem={(task) => (
        <TouchableNativeFeedback 
        onPress={()=>props.onDelete(task.item.id)} >
          <Text style={styles.listItem} key={task.item.id}>
            {task.item.task}
          </Text>
        </TouchableNativeFeedback>
      )}
    />
  );
};
const styles = StyleSheet.create({
  listBox: {
    marginTop:10,
    padding: 5,
    width:'100%'
  },
  listItem: {
    backgroundColor: "#2195f383",
    fontSize: 25,
    padding: 2,
    borderWidth: 2,
    borderColor: "#2196f3",
    borderRadius: 5,
    paddingLeft: 6,
    color: "#fff",
    marginVertical: 2,
  },
});
export default TaskList;
