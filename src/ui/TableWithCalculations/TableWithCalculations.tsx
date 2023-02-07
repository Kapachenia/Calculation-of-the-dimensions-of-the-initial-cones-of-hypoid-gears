import { AverageWheelRadius } from './AverageWheelRadius';
import { AverageGearRadius } from './AverageGearRadius';
import { StartingConeAngle } from './StartingConeAngle';
import '../../ui/InitialTable.css';

export const TableWithCalculations = () => {
    return (
        <div>
            <table className="table">
            
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Наименование расчитываемого элемента</th>
                        <th>Формула</th>
                        <th>
                            Примерный расчет
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Средний радиус колеса</td>
                        <td></td>
                        <td><AverageWheelRadius /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Средний радиус шестерни</td>
                        <td></td>
                        <td><AverageGearRadius /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Угол начального конуса колеса</td>
                        <td></td>
                        <td><StartingConeAngle /></td>
                    </tr>
                
                
                </tbody>
            </table>
        </div>
    )
}