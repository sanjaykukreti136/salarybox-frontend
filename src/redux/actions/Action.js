export const currentSelectedRoll = (value) => {
  return {
    type: "Current_Roll",
    payload: value,
  };
};

export const currSelectedDate = (value) => {
  return {
    type: "Current_Date",
    payload: value,
  };
};

export const isSubmit = (value) => {
  return {
    type: "Is_Submit",
    payload: value,
  };
};

export const setAttendence = (value) => {
  return {
    type: "Set_List",
    payload: value,
  };
};
