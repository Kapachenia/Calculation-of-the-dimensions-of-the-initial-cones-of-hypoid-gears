const initialState = {
    numberOfGearTeeth: 10,
    numberOfWheelTeeth: 41,
    hypoidDisplacement: 30,
    theAngleOfIntersectionOfTheAxesR: 1.5708,
    hypoidDisplacementCoefficient: 0.33,
    gearSizeIncreaseRatio: 1.3
}

type InitialTableDataType = typeof initialState

export const InitialTableData = (state: InitialTableDataType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-NUMBER-OF-GEAR-TEETH":
            return {...state, numberOfGearTeeth: action.data1}
        case "SET-NUMBER-OF-WHEEL-TEETH":
            return {...state, numberOfWheelTeeth: action.data2}
        case "SET-HYPOID-DISPLACEMENT":
            return {...state, hypoidDisplacement: action.data3}
        case "SET-THE-ANGEL-OF-INTERSECTION-OF-THE-AXES":
            return {...state, theAngleOfIntersectionOfTheAxesR: action.data4}
        case "SET-HYPOID-DISPLACEMENT-COEFFICIENT":
            return {...state, hypoidDisplacementCoefficient: action.data5}
        case "SET-GEAR-SIZE-INCREASE-RATIO":
            return {...state, gearSizeIncreaseRatio: action.data6}
        default: 
            return state
    }
} 

export const setNumberOfGearTeeth = (data1: number) => {
    return {type: "SET-NUMBER-OF-GEAR-TEETH", data1} as const
}

export const setNumberOfWheelTeeth = (data2: number) => {
    return {type: "SET-NUMBER-OF-WHEEL-TEETH", data2} as const
}

export const setHypoidDisplacement = (data3: number) => {
    return {type: "SET-HYPOID-DISPLACEMENT", data3} as const
}

export const setTheAngleOfIntersectionOfTheAxes = (data4: number) => {
    return {type: "SET-THE-ANGEL-OF-INTERSECTION-OF-THE-AXES", data4} as const
}

export const setHypoidDisplacementCoefficient = (data5: number) => {
    return {type: "SET-HYPOID-DISPLACEMENT-COEFFICIENT", data5} as const
}

export const setGearSizeIncreaseRatio = (data6: number) => {
    return {type: "SET-GEAR-SIZE-INCREASE-RATIO", data6} as const
}

type ActionType = ReturnType<typeof setNumberOfGearTeeth>
                | ReturnType<typeof setNumberOfWheelTeeth>
                | ReturnType<typeof setHypoidDisplacement>
                | ReturnType<typeof setTheAngleOfIntersectionOfTheAxes>
                | ReturnType<typeof setHypoidDisplacementCoefficient>
                | ReturnType<typeof setGearSizeIncreaseRatio>