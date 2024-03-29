
# Memory Game

This is a simple memory game built using React. The objective is to match pairs of cards with the same image. Once all pairs are successfully matched, a congratulatory message will appear, and the game will reset.

## Usage

```jsx
import { MemoryGame } from 'components/MemoryGame';

function Home() {
  return <MemoryGame />;
}


export default Home;
```
## Game Logic
The game is comprised of a grid of cards, each containing an image. The cards are shuffled at the start of the game, and the player can click on two cards to reveal their images. If the images match, the cards remain visible; otherwise, they are hidden again after a short delay.

## Code Structure
MemoryGame Component
This component manages the game state, including the cards, their visibility, and the logic for handling card clicks. The game resets when all pairs are successfully matched.

styles.ts
This file contains the styled components for the game layout, including the game container, individual cards, and their front and back images.

## Styling
The game is styled with a responsive layout, ensuring an enjoyable experience on various screen sizes. The background is a gradient from dark blue (#063970) to a lighter blue (#abdbe3).

Feel free to explore and modify the code to suit your preferences or integrate additional features into the game. Have fun playing and enhancing the memory game!
