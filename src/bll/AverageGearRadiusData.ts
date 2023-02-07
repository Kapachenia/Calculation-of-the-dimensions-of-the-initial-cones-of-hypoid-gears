const initialState = {
  averageGearRadius: 0
    
}

type InitialStateType = typeof initialState

export const AverageGearRadiusData = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-AVERAGE-GEAR-RADIUS-DATA":
          return {...state, averageGearRadius: action.data1}
            default:
                return state
        }
}

export const setAverageGearRadius = (data1: number) => {
    return {type: "SET-AVERAGE-GEAR-RADIUS-DATA", data1} as const
}

type ActionType = ReturnType<typeof setAverageGearRadius>