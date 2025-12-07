# Retro Color Changer Button

A retro-styled interactive button that changes the page background to different retro colors, animates on press, and plays a click sound.
Live link https://abhijeet-ekka.github.io/Color-flipper/

---

## Demo

- Press the **Change** button to cycle through retro colors.  
- Button moves down while pressed and resets when released.  
- Click sound plays on each press.

---

## Features

- Dynamic background color change using a **retro color palette**.  
- Button press animation using `transform: translate()`.  
- Smooth transitions with `transition` for `transform` and `background`.  
- Audio feedback with a preloaded click sound.  
- Color name displayed above the button.  

---

## Technologies Used

- **HTML5**: Semantic elements and audio integration.  
- **CSS3**: Flexbox layout, transitions, pseudo-elements (`::before`, `::after`), box-shadow, and button styling.  
- **JavaScript**:  
  - Arrays of objects for retro colors.  
  - DOM manipulation (`getElementById`, `querySelector`).  
  - Event listeners (`mousedown`, `mouseup`, `mouseleave`).  
  - Dynamic style updates (`background`, `color`, `transform`).  
  - Audio playback (`Audio` object and `.play()`).

---

## How It Works

1. Button press triggers `mousedown` event:
   - Button moves down (`translate(0, 10px)`).
   - Click sound plays.
2. `mouseup` or `mouseleave` resets button position.
3. Background and button color update based on the next color in the `retroColors` array.
4. Heading displays the current color name.

---

## Lessons Learned

- **Event Handling**: Handling press-and-hold with `mousedown` and reset with `mouseup`/`mouseleave`.  
- **Transitions and Animations**: Smooth visual feedback with CSS transitions and transform.  
- **DOM Manipulation**: Dynamically updating content and styles.  
- **Audio Playback**: Preloading audio and triggering on events.  
- **Arrays of Objects**: Managing data for dynamic UI updates.

---

## Potential Improvements

- Fade animation for heading text.  
- Automatic text color contrast for readability.  
- Clone audio to prevent delays on rapid clicks.  
- Responsive design improvements for mobile devices.

---

## Retro Colors Used

| Name             | Hex      |
|-----------------|----------|
| Vintage Orange   | #FFB347 |
| Muted Coral      | #E27D60 |
| Soft Rose        | #C38D9E |
| Faded Teal       | #85DCCB |
| Retro Aqua       | #41B3A3 |
| Warm Tan         | #E8A87C |
| Faded Yellow     | #F8E9A1 |
| Vintage Brown    | #A1775B |
| Dusty Purple     | #6C5B7B |
| Retro Navy       | #355C7D |
| Retro Pink       | #F67280 |
| Sage Green       | #99B898 |
