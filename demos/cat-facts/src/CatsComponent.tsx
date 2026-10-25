import { useState } from 'react';
import TextModifierComponent from './TextModifierComponent';

function CatsComponent() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [catFacts, setCatFacts] = useState("")

    async function fetchCatFacts() {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("https://catfact.ninja/fact", { signal: AbortSignal.timeout(15000) });
            if (!response.ok) throw new Error('Request failed');
            const data = await response.json();
            if (typeof data.fact !== 'string') throw new Error('Invalid response');
            setCatFacts(data.fact);
        } catch {
            setError("Could not load a cat fact. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="component">
            <h1>Cats</h1>
            <button onClick={fetchCatFacts} disabled={loading} className='cat-button'>
                {loading ? 'Loading…' : 'Click for cat facts!'}
            </button>
            <br />
            <p role="status">{error}</p>
            <textarea aria-label="Cat fact" value={catFacts} readOnly={true} style={{ width: "min(500px, 90vw)", height: "100px" }} />
            <br />
            {catFacts != "" && <TextModifierComponent text={catFacts} />}
        </div>

    )
}

export default CatsComponent