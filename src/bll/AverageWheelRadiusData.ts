const initialState = {
    averageWheelRadiusResult: 0
}

type InitialStateType = typeof initialState

export const AverageWheelRadiusData = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-AVERAGE-WHEEL-RADIUS-RESULT":
            return {...state, averageWheelRadiusResult: action.data3}
        default:
            return state
    }
}

export const setAverageWheelRadiusResult = (data3: number) => {
    return {type: "SET-AVERAGE-WHEEL-RADIUS-RESULT", data3} as const
}

type ActionType = ReturnType<typeof setAverageWheelRadiusResult>