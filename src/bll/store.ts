import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { AverageWheelRadiusData } from "./AverageWheelRadiusData";
import { AverageGearRadiusData } from "./AverageGearRadiusData";
import { InitialTableData } from "./InitialTableData";


const rootReducer = combineReducers({
    AverageWheelRadiusData: AverageWheelRadiusData,
    AverageGearRadiusData: AverageGearRadiusData,
    InitialTableData: InitialTableData,
})

export const store = createStore(rootReducer, applyMiddleware(thunk),)

export type AppRootStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev