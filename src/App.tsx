import { createRoot } from 'react-dom/client'
import Pet from './Pet'

const App = () =>
  (<main>
    <h1>Adopt Me!</h1>
    <Pet name="Godsay" animal="Dog" breed="Unknown" />
    <Pet name="Dash" animal="Cat" breed="Cute & Crude" />
    <Pet name="Doink" animal="Lizard" breed="Sticky" />
    </main>)

const container = document.querySelector("#root");
if(container){
  const root = createRoot(container);
  root.render(<App />);
}

