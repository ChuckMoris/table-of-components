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

    const handleRowClick = (row: number) => {
        const cellsInRow = Array.from({ length: 16 }, (_, i) => String.fromCharCode(65 + i) + row);
        setSelectedCells(prevSelectedCells => {
            const newSelectedCells = [...prevSelectedCells];
            cellsInRow.forEach(cell => {
                if (!newSelectedCells.includes(cell)) {
                    newSelectedCells.push(cell);
                }
            });
            return newSelectedCells;
        });
    };

    const handleColumnClick = (column: string) => {
        const cellsInColumn = Array.from({ length: 4 }, (_, i) => column + (i + 1));
        setSelectedCells(prevSelectedCells => {
            const newSelectedCells = [...prevSelectedCells];
            cellsInColumn.forEach(cell => {
                if (!newSelectedCells.includes(cell)) {
                    newSelectedCells.push(cell);
                }
            });
            return newSelectedCells;
        });
    };

    const handleAllCellsClick = () => {
        const allCells = Array.from({ length: 4 }, (_, i) =>
            Array.from({ length: 16 }, (_, j) => String.fromCharCode(65 + j) + (i + 1))
        ).flat();
        setSelectedCells(allCells);
    };

    const handleCopy = () => {
        let copiedText = '';

        for (let i = 1; i <= 4; i++) {
            for (let j = 'A'.charCodeAt(0); j <= 'P'.charCodeAt(0); j++) {
                const cell = String.fromCharCode(j) + i;
                if (selectedCells.includes(cell)) {
                    copiedText += cell + '\t';
                } else {
                    copiedText += '\t';
                }
            }
            copiedText += '\n';
        }

        navigator.clipboard.writeText(copiedText);
    };

    const handleReset = () => {
        setSelectedCells([]);
    };

    return (
        <div>
            <table style={{ fontSize: '20px' }}>
                <tbody>
                    {Array.from({ length: 4 }, (_, i) => (
                        <tr key={i + 1}>
                            {Array.from({ length: 16 }, (_, j) => (
                                <td
                                    key={String.fromCharCode(65 + j) + (i + 1)}
                                    onClick={() => handleCellClick(String.fromCharCode(65 + j) + (i + 1))}
                                    style={{
                                        backgroundColor: selectedCells.includes(String.fromCharCode(65 + j) + (i + 1)) ? 'yellow' : 'white',
                                        color: 'black',
                                        width: '50px',
                                        height: '50px',
                                        textAlign: 'center'
                                    }}
                                >
                                    {String.fromCharCode(65 + j) + (i + 1)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleCopy}>Copy</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={() => handleRowClick(1)}>Select Row 1</button>
            <button onClick={() => handleRowClick(2)}>Select Row 2</button>
            <button onClick={() => handleRowClick(3)}>Select Row 3</button>
            <button onClick={() => handleRowClick(4)}>Select Row 4</button>
            <button onClick={() => handleColumnClick('A')}>Select Column A</button>
            <button onClick={() => handleColumnClick('B')}>Select Column B</button>
            {Array.from({ length: 14 }, (_, i) => (
                <button key={i + 3} onClick={() => handleColumnClick(String.fromCharCode(67 + i))}>
                    Select Column {String.fromCharCode(67 + i)}
                </button>
            ))}
            <button onClick={handleAllCellsClick}>Select All Cells</button>
        </div>
    );
};

export default Table;
