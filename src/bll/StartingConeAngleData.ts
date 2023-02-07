const initialState = {
    startingConeAngle: 0
}

type InitialStateType = typeof initialState

// Угол начального конуса
const StartingConeAngleData = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-STARTING-CONE-ANGLE-DATA":
            return {...state, startingConeAngle: action.data1}
    }
}

export const setStartingConeAngleData = (data1: number) => {
    return {type: "SET-STARTING-CONE-ANGLE-DATA", data1} as const
}

type ActionType = ReturnType<typeof setStartingConeAngleData>