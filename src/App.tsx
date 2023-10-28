import React from 'react'
import { createRoot } from 'react-dom'
import Pet from './Pet';

const App = () =>
  (<main>
    <h1>Adopt Me!</h1>
    <Pet name="Godsay" animal="Dog" breed="Unknown">
    First Child
    </Pet>
    <Pet name="Dash" animal="Cat" breed="Cute & Crude">
    Second Child
    </Pet>
    <Pet name="Doink" animal="Lizard" breed="Sticky">
    Third Child
    </Pet>
    </main>)

const container = document.querySelector("#root");
const root = createRoot(container);
const AppElement = React.createElement(App, {}, null);
root.render(AppElement);

