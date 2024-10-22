import { useState } from "react";
import './HomePage.css';

export default function HomePage() {
    const [index, setIndex] = useState(0);

    return (
        <div className="center">
            <h1>This is the home page for MyIMDB!</h1>

            <button type="button" onClick={() => setIndex(index + 1)}>
                Increase Index
            </button>

            <h2>The current value of index is: {index}</h2>
        </div>
    );
}
