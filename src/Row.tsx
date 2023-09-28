type Props = {
    value: number
    onValueChange: (value: number) => void
    onSignToggle: () => void
    onToggleEnableState: () => void
    onDelete: () => void
    isEnabled: boolean
    isMinus: boolean
    shouldAllowDelete: boolean
}

const Row = ({ value, isEnabled, isMinus, shouldAllowDelete, onValueChange, onSignToggle, onToggleEnableState, onDelete }: Props) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                <button disabled={!isEnabled} className={isMinus ? '' : 'sign-toggle-button-selected'} onClick={onSignToggle} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, flexGrow: 1 }}>+</button>
                <button disabled={!isEnabled} className={isMinus ? 'sign-toggle-button-selected' : ''} onClick={onSignToggle} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, flexGrow: 1 }}>-</button>
            </div>

            <input
                style={{ flexGrow: 1 }}
                name="row-value"
                type="number"
                value={value}
                onChange={(e) => {
                    let parsedValue = parseFloat(e.target.value);
                    if (isNaN(parsedValue)) {
                        parsedValue = 0;
                    }
                    onValueChange(Math.abs(parsedValue));
                }}
                disabled={!isEnabled}
            />

            <button style={{ minWidth: '6rem', flexGrow: 1 }} onClick={onToggleEnableState}>{isEnabled ? 'Disable' : 'Enable'}</button>

            <button style={{ flexGrow: 1 }} disabled={shouldAllowDelete == false} onClick={onDelete}>Delete</button>

        </div>
    )
}

export default Row