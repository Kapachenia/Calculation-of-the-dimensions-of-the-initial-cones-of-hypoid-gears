import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {setAverageWheelRadiusResult} from "../../bll/AverageWheelRadiusData";
import { useEffect } from "react";

// Средний радиус колеса
export const AverageWheelRadius = () => {

  const dispatch = useDispatch();

  // Гипоидное смещение
  const hypoidDisplacement = useSelector<AppRootStoreType, number>(state => state.InitialTableData.hypoidDisplacement)
  // Коэффициент гипоидного смещения
  const hypoidDisplacementCoefficient = useSelector<AppRootStoreType, number>(state => state.InitialTableData.hypoidDisplacementCoefficient)
  
  let result = hypoidDisplacement / hypoidDisplacementCoefficient

  useEffect(() => {
    dispatch(setAverageWheelRadiusResult(result))
  }, [result])
  
    return (
        <div>
          { result }
        </div>
    )
}