export default function ArchiveButton(props) {
    return (
        <span id='archiveButton' className="btn" style={{
            transition: '0.3s',
            border: props.showArchive ? '2px solid var(--textColor' : '2px solid grey',
        }} onClick={() => props.setShowArchive(!props.showArchive)} >
            <p style={{
                color: props.showArchive ? 'var(--textColor)' : 'grey'
            }}>
                {
                    props.showArchive
                        ? <svg style={{ verticalAlign: '-0.125em' }} width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112l6.82-8.69a.486.486 0 0 1 .04-.045z" /></g></svg>
                        : <svg style={{ verticalAlign: '-0.125em' }} width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8L1.293 2.707a1 1 0 0 1 0-1.414z" /></g></svg>
                }
                &nbsp;
                Show Archived
            </p>
        </span>
    )
}