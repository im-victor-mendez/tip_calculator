import { createSlice } from "@reduxjs/toolkit";

let bill = 0, tip = 0, numberOfPeople = 1, totalAmount = bill * (tip / 10), tipAmount = totalAmount/numberOfPeople

const initialState = {
    totalAmount,
    tipAmount,
    bill,
    tip,
    numberOfPeople
}

const calculationSlice = createSlice(
    {
        name: 'calculatorSlice',
        initialState,
        reducers: {
            setValue: (state, action) => {
                const payload = action.payload

                switch (payload.id) {
                    case 'bill':
                        bill = payload.value

                        totalAmount = (bill * tip).toFixed(2)
                        break;

                    case 'tip':
                        payload.value = payload.value / 100
                        tip = payload.value

                        totalAmount = (bill * tip).toFixed(2)
                        break;

                    case 'numberOfPeople':
                        numberOfPeople = payload.value

                        totalAmount = (bill * tip).toFixed(2)
                        break;
                
                    default:
                        break;
                }

                return {
                    ...state,
                    [payload.id]: payload.value,
                    totalAmount,
                    tipAmount: (totalAmount / numberOfPeople).toFixed(2)
                }
            }
        }
    }
)

export const { setValue } = calculationSlice.actions

export default calculationSlice