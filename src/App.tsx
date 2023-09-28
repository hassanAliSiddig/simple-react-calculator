import { useEffect, useState } from 'react';
import './App.css'
import Row from './Row';
import SumDisplay from './SumDisplay';
import AutoScrollToNewRows from './AutoScrollToNewRows';

type RowType = {
  id: string
  value: number
  isEnabled: boolean
  isMinus: boolean
}

const createId = () => {
  // Generate a random number between 10000 (inclusive) and 99999 (inclusive)
  const randomFiveDigits = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  return Date.now().toString() + randomFiveDigits.toString();
}


const createNewRow = (value: number, isEnabled: boolean, isMinus: boolean): RowType => ({id: createId() ,value, isEnabled, isMinus })

const App = () => {

  const savedRowsData = localStorage.getItem('rows');

  const savedRows = savedRowsData ? JSON.parse(savedRowsData) : [createNewRow(0, true, false)];

  const [rows, setRows] = useState<RowType[]>(savedRows)

  useEffect(() => {
    localStorage.setItem('rows', JSON.stringify(rows));
  }, [rows]);

  const handleAddRow = () => setRows([...rows, createNewRow(0, true, false)])

  const handleDeleteRow = (id: string) => setRows(rows.filter((row) => row.id !== id))

  const handleToggleEnableState = (id: string) => setRows(rows.map((row) => (row.id === id ? { ...row, isEnabled: !row.isEnabled } : row)))

  const handleValueChange = (id: string, value: number) => setRows(rows.map((row) => (row.id === id ? { ...row, value } : row)))

  const handleToggleSign = (id: string) => setRows(rows.map((row) =>
    (row.id === id ? { ...row, isMinus: !row.isMinus } : row)
  ));

  const handleReset = () => setRows([createNewRow(0, true, false)]);


  const sum = rows.reduce((acc, { value, isEnabled, isMinus }) => (
    isEnabled ? acc + (isMinus ? -value : value) : acc
  ), 0);

  const displayedSum = +sum.toFixed(10);

  return (
    <>
      <div style={{ maxHeight: '75vh', overflowY: 'auto', padding: '0 1rem', border: '2px solid', borderRadius: '5px' }}>

        <ul style={{ listStyleType: 'none', padding: 0 }}>

          {rows.map((row, index) => (
            <li style={{ padding: '2rem', margin: '1rem 0', borderTop: (index > 0) ? '2px solid' : 0 }} key={row.id}>
              <Row
                {...row}
                onToggleEnableState={() => handleToggleEnableState(row.id)}
                onDelete={() => handleDeleteRow(row.id)}
                onSignToggle={() => handleToggleSign(row.id)}
                onValueChange={(value: number) => handleValueChange(row.id, value)}
                shouldAllowDelete={rows.length > 1}
              />
            </li>
          ))}
          <AutoScrollToNewRows currentLength={rows.length} />
        </ul>
      </div>

      <SumDisplay sum={displayedSum} onAddRow={handleAddRow} onReset={handleReset} />

    </>

  );
}

export default App

