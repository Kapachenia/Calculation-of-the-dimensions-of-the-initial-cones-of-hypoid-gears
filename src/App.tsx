import './App.css';
import { AverageWheelRadius } from './ui/TableWithCalculations/AverageWheelRadius';
import { AverageGearRadius } from './ui/TableWithCalculations/AverageGearRadius';
import { TableWithCalculations } from './ui/TableWithCalculations/TableWithCalculations';
import { InitialTable } from './ui/InitialTable';


export type PropsType = {

}

export const App = () => {

  return (
    <div className="App">
      <p>Расчёт размеров начальных конусов гипоидных зубчатых колес и величин, определяющих их взаимное положение (линейные размеры в мм)</p>
      <div>
        {/* Исходные данные */}
        <InitialTable />
        {/* Таблица с расчетами */}
        <TableWithCalculations />
      </div>
    </div>
  );
}
