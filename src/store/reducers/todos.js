const initialState = [
  { id: Math.random(), text: 'Estudar Go Native', completed: true },
  { id: Math.random(), text: 'Estudar Go React', completed: false },
  { id: Math.random(), text: 'Estudar Go Node', completed: true },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'MASK_AS_COMPLETED':
      return state.map(todo => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
}
