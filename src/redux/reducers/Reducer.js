export const currRoll = (state = null, action) => {
  switch (action.type) {
    case "Current_Roll":
      return action.payload;
    default:
      return state;
  }
};

export const currSubmit = (state = false, action) => {
  switch (action.type) {
    case "Is_Submit":
      return action.payload;
    default:
      return state;
  }
};

export const currDate = (state = null, action) => {
  switch (action.type) {
    case "Current_Date":
      return action.payload;
    default:
      return state;
  }
};

export const attendenceList = (state = [], action) => {
  switch (action.type) {
    case "Set_List":
      return action.payload;
    default:
      return state;
  }
};
