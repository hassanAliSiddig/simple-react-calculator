type Props = {
    sum: number
    onReset: () => void
    onAddRow: () => void
}

const SumDisplay = ({sum, onReset, onAddRow}: Props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <button style={{ marginTop: '1rem' }} onClick={onReset}>Reset</button>

        <div style={{ marginTop: '1rem', fontSize: '2rem' }}>Total: <b>{sum}</b></div>

        <button style={{ marginTop: '1rem' }} onClick={onAddRow}>Add Row</button>

      </div>
  )
}

export default SumDisplay