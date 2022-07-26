import { configureStore } from "@reduxjs/toolkit";
import employeePollReducer from "../features/employeePoll/employeePollSlice";
import userSliceReducer from "../features/user/userSlice";
import authSliceReducer from "../features/auth/authSlice";

export default configureStore({
  reducer: {
    poll: employeePollReducer,
    user: userSliceReducer,
    auth: authSliceReducer,
  },
});
