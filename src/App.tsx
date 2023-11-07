import { createRoot } from 'react-dom/client'
import Pet from './Pet';
import SearchParams from './SearchParams';
import NoStateSearchParams from './NoStateSearchParams';

const App = () =>
  (<main>
    <h1>Adopt Me!</h1>
    <SearchParams />
    <NoStateSearchParams />
    <Pet name="Godsay" animal="Dog" breed="Unknown" />
    <Pet name="Dash" animal="Cat" breed="Cute & Crude" />
    <Pet name="Doink" animal="Lizard" breed="Sticky" />
    </main>)

const container = document.querySelector("#root");

if(container){
  const root = createRoot(container);
  root.render(<App />);
}

