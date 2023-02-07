import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppRootStoreType } from "../../bll/store";
import { setStartingConeAngleData } from "../../bll/StartingConeAngleData";



// Угол начального конуса колеса
export const StartingConeAngle = () => {

    const theAngleOfIntersectionOfTheAxesR = useSelector<AppRootStoreType, number>(state => state.InitialTableData.theAngleOfIntersectionOfTheAxesR)
    const numberOfGearTeeth = useSelector<AppRootStoreType, number>(state => state.InitialTableData.numberOfGearTeeth)
    const numberOfWheelTeeth = useSelector<AppRootStoreType, number>(state => state.InitialTableData.numberOfWheelTeeth)
    const hypoidDisplacementCoefficient = useSelector<AppRootStoreType, number>(state => state.InitialTableData.hypoidDisplacementCoefficient)

    const dispatch = useDispatch()

    // let theAngleOfIntersectionOfTheAxesG = theAngleOfIntersectionOfTheAxesR * 180 / Math.PI

    let cosb = Math.cos(theAngleOfIntersectionOfTheAxesR)
    let sinb = Math.sin(theAngleOfIntersectionOfTheAxesR)

    let result = (cosb + numberOfGearTeeth / numberOfWheelTeeth ) / 
    (sinb * Math.sqrt( 1 - 0.9 * Math.pow(hypoidDisplacementCoefficient, 2)))


    // ctgα = cosα/sinα

    let res = Math.cos(result) / Math.sin(result)

    useEffect(() => {
        console.log(res)
        dispatch(setStartingConeAngleData(result))
      }, [result])

    return (
        <div>
            {result}
        </div>
    )
}