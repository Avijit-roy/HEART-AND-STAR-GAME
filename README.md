# Heart and Star Game

A playful twist on the classic Tic-Tac-Toe game where **Hearts** challenge **Stars** in an epic battle of strategy and wit. Built with vanilla JavaScript, HTML, and CSS, this game brings charming animations and smooth gameplay to your browser.

## Features

- 💗 **Unique Icons** — Hearts vs. Stars instead of X and O with animated LordIcon designs
- 🎮 **Classic Gameplay** — Strategic Tic-Tac-Toe mechanics with a modern twist
- ✨ **Smooth Animations** — Interactive hover effects and game state animations
- 📱 **Fully Responsive** — Play on desktop, tablet, or mobile devices
- 🎨 **Neumorphism Design** — Beautiful soft shadows and modern UI aesthetics
- 🚀 **Zero Dependencies** — Lightweight and fast-loading game
- ⏱️ **Quick Games** — Play multiple rounds instantly with one-click restart

## How to Play

1. **Click any cell** on the 3×3 grid to place your symbol
2. **Players alternate** — Heart goes first, then Star
3. **Get three in a row** — Horizontally, vertically, or diagonally
4. **Win the round** — Highlight appears when someone wins
5. **Restart anytime** — Click the "Restart" button to play again

### Winning Conditions

A player wins by getting three of their symbols in a line:
- **Horizontal** — Top, middle, or bottom row
- **Vertical** — Left, middle, or right column
- **Diagonal** — Corner to corner

## Live Demo

Play the game here: [Heart and Star Game](https://avijit-roy.github.io/HEART-AND-STAR-GAME/) *(update with your GitHub Pages link)*

## Tech Stack

- **JavaScript (Vanilla)** — Game logic and event handling
- **HTML5** — Semantic markup and structure
- **CSS3** — Neumorphism styling and animations
- **LordIcon** — Beautiful animated icons for Hearts and Stars
- **Tailwind CSS** — Utility-first CSS framework

**Repository composition:** ~60% JavaScript, ~25% CSS, ~15% HTML

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avijit-roy/Heart-and-Star-Game.git
   cd Heart-and-Star-Game
   ```

2. **Open in your browser**
   ```bash
   # macOS
   open index.html
   
   # Windows
   start index.html
   
   # Linux
   xdg-open index.html
   ```

3. **Start playing!**
   - Click cells to play
   - Use the "Restart" button to reset the game

### Run with Local Server (Optional)

For the best experience, run a local server:

**Python 3:**
```bash
python -m http.server 8000
# Open http://localhost:8000
```

**Node.js (http-server):**
```bash
npm install -g http-server
http-server
# Open the provided localhost URL
```

## Project Structure

```
Heart-and-Star-Game/
├── index.html          # Main HTML file (game board and structure)
├── style.css           # Game styling (neumorphism, animations)
├── script.js           # Game logic (players, win conditions, moves)
├── Designer (5).png    # Favicon (Heart and Star icon)
├── README.md           # Project documentation
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## Game Logic

### Win Conditions

The game checks 8 possible winning combinations:
- 3 horizontal rows
- 3 vertical columns
- 2 diagonal lines

### Winning Cell Highlight

When a player wins:
- Winning cells display a **teal border**
- Cells show a **glowing icon animation**
- Game automatically stops to prevent further moves

## Customization

### Change Game Icons

Edit `script.js` and replace the LordIcon URLs to use different icons:

```javascript
// For Heart player
cell.innerHTML = `<lord-icon src="YOUR_ICON_URL"
  trigger="morph" state="morph-heart-broken"
  colors="primary:#000000,secondary:#30e8bd">
</lord-icon>`;

// For Star player
cell.innerHTML = `<lord-icon src="YOUR_ICON_URL"
  trigger="hover" state="hover-wink"
  colors="primary:#000000,secondary:#30e8bd">
</lord-icon>`;
```

### Customize Colors

Update `style.css` to change the game's color scheme:
- Grid background: `.tic-tac-toe-grid`
- Cell styling: `.tic-tac-toe-cell`
- Button styling: `.btn-12`
- Winning highlight: `highlightWinningCells()` in script.js

### Modify Gameplay Speed

Adjust animation timings in `.btn-12:hover:after` and `.btn-12:hover:before` transitions.

## Deployment

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Heart and Star Game"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to **Settings → Pages**
   - Select **main** branch and **/root** folder
   - Click **Save**

3. **Access your game**
   - Your game will be live at: `https://username.github.io/Heart-and-Star-Game`

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `(leave blank)`
3. Set publish directory: `./` (root folder)
4. Deploy with one click

## Browser Support

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Icons not showing** | Check internet connection (LordIcon CDN requires online access) |
| **Game not responsive** | Clear browser cache (Ctrl+Shift+Del) and hard refresh (Ctrl+Shift+R) |
| **Styling looks broken** | Ensure Tailwind CSS CDN is loading (check browser console) |
| **Click events not working** | Try a different browser or clear browser cache |

## Performance

- ⚡ **Lightweight** — Under 50KB total (HTML, CSS, JS)
- 🚀 **Instant Loading** — No build process or compilation needed
- 📊 **Optimized** — No unnecessary re-renders or calculations
- 🔧 **Simple Logic** — Efficient win-checking algorithm

## Future Enhancements

- 🤖 **AI Opponent** — Play against a smart computer player
- 📊 **Score Tracking** — Keep track of wins, losses, and draws
- 🎵 **Sound Effects** — Add audio feedback for moves and wins
- 🌙 **Dark Mode** — Toggle between light and dark themes
- 👥 **Multiplayer** — Play with friends online
- ⏰ **Timer Mode** — Speed-based competitive games
- 📱 **Mobile Touch** — Optimized touch controls and gestures

## Contributing

We welcome contributions! Follow these steps:

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Edit files as needed
   - Test thoroughly in your browser

4. **Commit your changes**
   ```bash
   git commit -m "Add: description of your feature"
   ```

5. **Push and open a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- 🎨 [LordIcon](https://lordicon.com/) — Beautiful animated icons
- 🎯 [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- 💡 Classic Tic-Tac-Toe gameplay inspiration
- 🌟 Community feedback and contributions

## Contact & Support

**Maintainer:** [Avijit-roy](https://github.com/Avijit-roy)

- 💬 [Open an issue](https://github.com/Avijit-roy/Heart-and-Star-Game/issues) for bugs or features
- 🐙 Visit the [GitHub repository](https://github.com/Avijit-roy/Heart-and-Star-Game)
- 📧 Reach out via GitHub profile for questions

---

**Ready to play?** 💗✨ Give the game a try and let us know what you think! If you enjoy it, consider giving it a ⭐ on GitHub.
