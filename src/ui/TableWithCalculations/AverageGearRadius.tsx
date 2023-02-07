import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import { setAverageGearRadius } from "../../bll/AverageGearRadiusData";

// Средний радиус шестерни
export const AverageGearRadius = () => {

    const dispatch = useDispatch()

    // Средний радиус колеса
    const averageWheelRadiusResult = useSelector<AppRootStoreType, number>(state => state.AverageWheelRadiusData.averageWheelRadiusResult)
    // коэффициент увеличения размеров шестерни
    const gearSizeIncreaseRatio = useSelector<AppRootStoreType, number>(state => state.InitialTableData.gearSizeIncreaseRatio)
    // Число зубьев шестерни
    const numberOfGearTeeth = useSelector<AppRootStoreType, number>(state => state.InitialTableData.numberOfGearTeeth)
    // Число зубьев колеса
    const numberOfWheelTeeth = useSelector<AppRootStoreType, number>(state => state.InitialTableData.numberOfWheelTeeth)
    
    let result = averageWheelRadiusResult * gearSizeIncreaseRatio * numberOfGearTeeth / numberOfWheelTeeth

    useEffect(() => {
        dispatch(setAverageGearRadius(result))
    }, [result])

    return (
        <div>
            {result}
        </div>
    )
}