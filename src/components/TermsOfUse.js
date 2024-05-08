import { useState } from 'react'

function TermsOfUse(){
    const [showTerms, setShowTerms] = useState(false);

    function handler(){
        setShowTerms(true);
    }
    
    return (
        <section>
            <button onClick={handler}>Click</button>
            {showTerms && <p>By continuing, you accept that we will not indemnify
        you for any damage or harm caused by our products.</p>}

        </section>
    )
}

export default TermsOfUse;