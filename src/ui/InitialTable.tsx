import { useSelector, useDispatch } from 'react-redux';
import { AppRootStoreType } from "../bll/store";
import { setNumberOfGearTeeth, setNumberOfWheelTeeth, setHypoidDisplacement, setTheAngleOfIntersectionOfTheAxes,
    setHypoidDisplacementCoefficient, setGearSizeIncreaseRatio,  } from "../bll/InitialTableData";
import './InitialTable.css';


export const InitialTable = () => {

const dispatch = useDispatch()

const numberOfGearTeeth = useSelector<AppRootStoreType, number>(state => state.InitialTableData.numberOfGearTeeth)
const numberOfWheelTeeth = useSelector<AppRootStoreType, number>(state => state.InitialTableData.numberOfWheelTeeth)
const hypoidDisplacement = useSelector<AppRootStoreType, number>(state => state.InitialTableData.hypoidDisplacement)
const theAngleOfIntersectionOfTheAxesR = useSelector<AppRootStoreType, number>(state => state.InitialTableData.theAngleOfIntersectionOfTheAxesR)
const hypoidDisplacementCoefficient = useSelector<AppRootStoreType, number>(state => state.InitialTableData.hypoidDisplacementCoefficient)
const gearSizeIncreaseRatio = useSelector<AppRootStoreType, number>(state => state.InitialTableData.gearSizeIncreaseRatio)

// const toRadians = (value: number) => value * Math.PI / 180

    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td>Число зубьев шестерни</td>
                        <td><input type="number" value={numberOfGearTeeth}
                        onChange={ (e) => dispatch(setNumberOfGearTeeth(+e.currentTarget.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Число зубьев колеса</td>
                        <td><input type="number" value={numberOfWheelTeeth} 
                        onChange={ (e) => dispatch(setNumberOfWheelTeeth(+e.currentTarget.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Гипоидное смещение</td>
                        <td><input type="number" value={hypoidDisplacement} 
                        onChange={ (e) => dispatch(setHypoidDisplacement(+e.currentTarget.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Угол скрещивания осей</td>
                        <td><input type="number" value={theAngleOfIntersectionOfTheAxesR} 
                        onChange={ (e) => dispatch(setTheAngleOfIntersectionOfTheAxes(+e.currentTarget.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Коэффициент гипоидного смещения</td>
                        <td><input type="number" value={hypoidDisplacementCoefficient} 
                        onChange={ (e) => dispatch(setHypoidDisplacementCoefficient(+e.currentTarget.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Коэффициент увеличения размеров шестерни (из графика приведенного на фиг. 7)</td>
                        <td><input type="number" value={gearSizeIncreaseRatio} 
                        onChange={ (e) => dispatch(setGearSizeIncreaseRatio(+e.currentTarget.value))} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}