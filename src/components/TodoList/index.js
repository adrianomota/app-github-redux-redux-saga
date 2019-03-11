import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, Text, Button } from 'react-native';
import styles from './styles';
import * as TodosActions from '../../store/actions/todos';

const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  <View style={styles.container}>
    {todos.map(todo => (
      <Text
        onPress={() => markAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button onPress={addTodo} title="Add Todo" />
  </View>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

// High order component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
