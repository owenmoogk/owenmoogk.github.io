import { useState } from 'react'
import Background from './background/Background.js'

export default function NotFoundPage() {
    const [party, setParty] = useState(false)

    function startTheParty(){
        setParty(true)
    }

    return (
        <div className='main'>
            <h1 className='title'>404!</h1>
            <p className='subtitle'>Uh oh, looks like I lost you.</p>
            <p><a href='/'>Take me home</a></p>
            <p>or... we can <a onClick={() => startTheParty()}>party</a>!</p>
            {party
                ? <Background />
                : null
            }
        </div>
    )
}