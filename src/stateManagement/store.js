import calculationSlice from "./calculationSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore(
    {
        reducer: {
            tipValue: calculationSlice.reducer
        }
    }
)

export default store