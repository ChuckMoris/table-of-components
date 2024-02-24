import React, { useState } from 'react';

const Table: React.FC = () => {
    const [selectedCells, setSelectedCells] = useState<string[]>([]);

    const handleCellClick = (content: string) => {
        setSelectedCells(prevSelectedCells => {
            if (prevSelectedCells.includes(content)) {
                return prevSelectedCells.filter(cell => cell !== content);
            } else {
                return [...prevSelectedCells, content];
            }
        });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(selectedCells.join('\t'));
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td onClick={() => handleCellClick('A1')} style={{ backgroundColor: selectedCells.includes('A1') ? 'yellow' : 'white', color: 'black' }}>A1</td>
                        <td onClick={() => handleCellClick('B1')} style={{ backgroundColor: selectedCells.includes('B1') ? 'yellow' : 'white', color: 'black' }}>B1</td>
                        <td onClick={() => handleCellClick('C1')} style={{ backgroundColor: selectedCells.includes('C1') ? 'yellow' : 'white', color: 'black' }}>C1</td>
                        <td onClick={() => handleCellClick('D1')} style={{ backgroundColor: selectedCells.includes('D1') ? 'yellow' : 'white', color: 'black' }}>D1</td>
                        <td onClick={() => handleCellClick('E1')} style={{ backgroundColor: selectedCells.includes('E1') ? 'yellow' : 'white', color: 'black' }}>E1</td>
                        <td onClick={() => handleCellClick('F1')} style={{ backgroundColor: selectedCells.includes('F1') ? 'yellow' : 'white', color: 'black' }}>F1</td>
                        <td onClick={() => handleCellClick('G1')} style={{ backgroundColor: selectedCells.includes('G1') ? 'yellow' : 'white', color: 'black' }}>G1</td>
                        <td onClick={() => handleCellClick('H1')} style={{ backgroundColor: selectedCells.includes('H1') ? 'yellow' : 'white', color: 'black' }}>H1</td>
                        <td onClick={() => handleCellClick('I1')} style={{ backgroundColor: selectedCells.includes('I1') ? 'yellow' : 'white', color: 'black' }}>I1</td>
                        <td onClick={() => handleCellClick('J1')} style={{ backgroundColor: selectedCells.includes('J1') ? 'yellow' : 'white', color: 'black' }}>J1</td>
                        <td onClick={() => handleCellClick('K1')} style={{ backgroundColor: selectedCells.includes('K1') ? 'yellow' : 'white', color: 'black' }}>K1</td>
                        <td onClick={() => handleCellClick('L1')} style={{ backgroundColor: selectedCells.includes('L1') ? 'yellow' : 'white', color: 'black' }}>L1</td>
                        <td onClick={() => handleCellClick('M1')} style={{ backgroundColor: selectedCells.includes('M1') ? 'yellow' : 'white', color: 'black' }}>M1</td>
                        <td onClick={() => handleCellClick('N1')} style={{ backgroundColor: selectedCells.includes('N1') ? 'yellow' : 'white', color: 'black' }}>N1</td>
                        <td onClick={() => handleCellClick('O1')} style={{ backgroundColor: selectedCells.includes('O1') ? 'yellow' : 'white', color: 'black' }}>O1</td>
                        <td onClick={() => handleCellClick('P1')} style={{ backgroundColor: selectedCells.includes('P1') ? 'yellow' : 'white', color: 'black' }}>P1</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleCellClick('A2')} style={{ backgroundColor: selectedCells.includes('A2') ? 'yellow' : 'white', color: 'black' }}>A2</td>
                        <td onClick={() => handleCellClick('B2')} style={{ backgroundColor: selectedCells.includes('B2') ? 'yellow' : 'white', color: 'black' }}>B2</td>
                        <td onClick={() => handleCellClick('C2')} style={{ backgroundColor: selectedCells.includes('C2') ? 'yellow' : 'white', color: 'black' }}>C2</td>
                        <td onClick={() => handleCellClick('D2')} style={{ backgroundColor: selectedCells.includes('D2') ? 'yellow' : 'white', color: 'black' }}>D2</td>
                        <td onClick={() => handleCellClick('E2')} style={{ backgroundColor: selectedCells.includes('E2') ? 'yellow' : 'white', color: 'black' }}>E2</td>
                        <td onClick={() => handleCellClick('F2')} style={{ backgroundColor: selectedCells.includes('F2') ? 'yellow' : 'white', color: 'black' }}>F2</td>
                        <td onClick={() => handleCellClick('G2')} style={{ backgroundColor: selectedCells.includes('G2') ? 'yellow' : 'white', color: 'black' }}>G2</td>
                        <td onClick={() => handleCellClick('H2')} style={{ backgroundColor: selectedCells.includes('H2') ? 'yellow' : 'white', color: 'black' }}>H2</td>
                        <td onClick={() => handleCellClick('I2')} style={{ backgroundColor: selectedCells.includes('I2') ? 'yellow' : 'white', color: 'black' }}>I2</td>
                        <td onClick={() => handleCellClick('J2')} style={{ backgroundColor: selectedCells.includes('J2') ? 'yellow' : 'white', color: 'black' }}>J2</td>
                        <td onClick={() => handleCellClick('K2')} style={{ backgroundColor: selectedCells.includes('K2') ? 'yellow' : 'white', color: 'black' }}>K2</td>
                        <td onClick={() => handleCellClick('L2')} style={{ backgroundColor: selectedCells.includes('L2') ? 'yellow' : 'white', color: 'black' }}>L2</td>
                        <td onClick={() => handleCellClick('M2')} style={{ backgroundColor: selectedCells.includes('M2') ? 'yellow' : 'white', color: 'black' }}>M2</td>
                        <td onClick={() => handleCellClick('N2')} style={{ backgroundColor: selectedCells.includes('N2') ? 'yellow' : 'white', color: 'black' }}>N2</td>
                        <td onClick={() => handleCellClick('O2')} style={{ backgroundColor: selectedCells.includes('O2') ? 'yellow' : 'white', color: 'black' }}>O2</td>
                        <td onClick={() => handleCellClick('P2')} style={{ backgroundColor: selectedCells.includes('P2') ? 'yellow' : 'white', color: 'black' }}>P2</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleCellClick('A3')} style={{ backgroundColor: selectedCells.includes('A3') ? 'yellow' : 'white', color: 'black' }}>A3</td>
                        <td onClick={() => handleCellClick('B3')} style={{ backgroundColor: selectedCells.includes('B3') ? 'yellow' : 'white', color: 'black' }}>B3</td>
                        <td onClick={() => handleCellClick('C3')} style={{ backgroundColor: selectedCells.includes('C3') ? 'yellow' : 'white', color: 'black' }}>C3</td>
                        <td onClick={() => handleCellClick('D3')} style={{ backgroundColor: selectedCells.includes('D3') ? 'yellow' : 'white', color: 'black' }}>D3</td>
                        <td onClick={() => handleCellClick('E3')} style={{ backgroundColor: selectedCells.includes('E3') ? 'yellow' : 'white', color: 'black' }}>E3</td>
                        <td onClick={() => handleCellClick('F3')} style={{ backgroundColor: selectedCells.includes('F3') ? 'yellow' : 'white', color: 'black' }}>F3</td>
                        <td onClick={() => handleCellClick('G3')} style={{ backgroundColor: selectedCells.includes('G3') ? 'yellow' : 'white', color: 'black' }}>G3</td>
                        <td onClick={() => handleCellClick('H3')} style={{ backgroundColor: selectedCells.includes('H3') ? 'yellow' : 'white', color: 'black' }}>H3</td>
                        <td onClick={() => handleCellClick('I3')} style={{ backgroundColor: selectedCells.includes('I3') ? 'yellow' : 'white', color: 'black' }}>I3</td>
                        <td onClick={() => handleCellClick('J3')} style={{ backgroundColor: selectedCells.includes('J3') ? 'yellow' : 'white', color: 'black' }}>J3</td>
                        <td onClick={() => handleCellClick('K3')} style={{ backgroundColor: selectedCells.includes('K3') ? 'yellow' : 'white', color: 'black' }}>K3</td>
                        <td onClick={() => handleCellClick('L3')} style={{ backgroundColor: selectedCells.includes('L3') ? 'yellow' : 'white', color: 'black' }}>L3</td>
                        <td onClick={() => handleCellClick('M3')} style={{ backgroundColor: selectedCells.includes('M3') ? 'yellow' : 'white', color: 'black' }}>M3</td>
                        <td onClick={() => handleCellClick('N3')} style={{ backgroundColor: selectedCells.includes('N3') ? 'yellow' : 'white', color: 'black' }}>N3</td>
                        <td onClick={() => handleCellClick('O3')} style={{ backgroundColor: selectedCells.includes('O3') ? 'yellow' : 'white', color: 'black' }}>O3</td>
                        <td onClick={() => handleCellClick('P3')} style={{ backgroundColor: selectedCells.includes('P3') ? 'yellow' : 'white', color: 'black' }}>P3</td>
                    </tr> <tr>
                        <td onClick={() => handleCellClick('A4')} style={{ backgroundColor: selectedCells.includes('A4') ? 'yellow' : 'white', color: 'black' }}>A4</td>
                        <td onClick={() => handleCellClick('B4')} style={{ backgroundColor: selectedCells.includes('B4') ? 'yellow' : 'white', color: 'black' }}>B4</td>
                        <td onClick={() => handleCellClick('C4')} style={{ backgroundColor: selectedCells.includes('C4') ? 'yellow' : 'white', color: 'black' }}>C4</td>
                        <td onClick={() => handleCellClick('D4')} style={{ backgroundColor: selectedCells.includes('D4') ? 'yellow' : 'white', color: 'black' }}>D4</td>
                        <td onClick={() => handleCellClick('E4')} style={{ backgroundColor: selectedCells.includes('E4') ? 'yellow' : 'white', color: 'black' }}>E4</td>
                        <td onClick={() => handleCellClick('F4')} style={{ backgroundColor: selectedCells.includes('F4') ? 'yellow' : 'white', color: 'black' }}>F4</td>
                        <td onClick={() => handleCellClick('G4')} style={{ backgroundColor: selectedCells.includes('G4') ? 'yellow' : 'white', color: 'black' }}>G4</td>
                        <td onClick={() => handleCellClick('H4')} style={{ backgroundColor: selectedCells.includes('H4') ? 'yellow' : 'white', color: 'black' }}>H4</td>
                        <td onClick={() => handleCellClick('I4')} style={{ backgroundColor: selectedCells.includes('I4') ? 'yellow' : 'white', color: 'black' }}>I4</td>
                        <td onClick={() => handleCellClick('J4')} style={{ backgroundColor: selectedCells.includes('J4') ? 'yellow' : 'white', color: 'black' }}>J4</td>
                        <td onClick={() => handleCellClick('K4')} style={{ backgroundColor: selectedCells.includes('K4') ? 'yellow' : 'white', color: 'black' }}>K4</td>
                        <td onClick={() => handleCellClick('L4')} style={{ backgroundColor: selectedCells.includes('L4') ? 'yellow' : 'white', color: 'black' }}>L4</td>
                        <td onClick={() => handleCellClick('M4')} style={{ backgroundColor: selectedCells.includes('M4') ? 'yellow' : 'white', color: 'black' }}>M4</td>
                        <td onClick={() => handleCellClick('N4')} style={{ backgroundColor: selectedCells.includes('N4') ? 'yellow' : 'white', color: 'black' }}>N4</td>
                        <td onClick={() => handleCellClick('O4')} style={{ backgroundColor: selectedCells.includes('O4') ? 'yellow' : 'white', color: 'black' }}>O4</td>
                        <td onClick={() => handleCellClick('P4')} style={{ backgroundColor: selectedCells.includes('P4') ? 'yellow' : 'white', color: 'black' }}>P4</td>
                    </tr>
                    {/* Добавьте больше строк и ячеек по мере необходимости */}
                </tbody>
            </table>
            <button onClick={handleCopy}>Copy</button>
        </div>
    );
};

export default Table;
