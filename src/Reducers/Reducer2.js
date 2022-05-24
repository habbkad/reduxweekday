const initialState = {
  users: [
    {
      userName: "abu",
      age: 25,
      id: 12213,
    },
    {
      userName: "Kwaku",
      age: 30,
      id: 12212,
    },
    {
      userName: "Abena",
      age: 25,
      id: 21124242,
    },
  ],
  students: [],
};

const Reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "UPDATE_USER":
      const newUsers = state.users.filter(
        (user) => user.id !== action.payload.id
      );
      return { ...state, users: [...newUsers, action.payload] };
    default:
      return state;
  }
};

export default Reducer2;
