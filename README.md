# React Native Calculator

A simple calculator app built in React Native, mimicking the functionality of a standard calculator. This project includes an input display for arithmetic calculations and a functional button layout to perform basic operations.

## Features

1. **Display Input and Result**

   - Displays entered numbers and operations, starting from the bottom and scrolling upwards as more input is added.
   - Shows the calculation result at the bottom after pressing `=`.

2. **Button Functions**

   - Supports basic arithmetic operations: `+`, `-`, `*`, and `/`.
   - Special buttons:
     - **C**: Clears all input.
     - **⌫**: Removes the last character.
     - **=**: Calculates the entered expression and displays the result.

3. **Scrollable Display**
   - Input area scrolls automatically as the input grows, with `ScrollView` inverted to display from the bottom up.
4. **Styling and Layout**
   - Arranged in a grid layout with responsive styling for easy interaction.
   - Dark theme with clear, contrasting button colors for visibility.

## Code Structure

- **State Management**:
  - Uses `useState` for managing input and result.
  - `useRef` and `useEffect` ensure the display stays scrolled to the latest input.
- **Layout with Flexbox**:
  - Organized into display and button sections using Flexbox, providing a clean, responsive layout.

## Usage

This calculator app is perfect for quick calculations and learning React Native basics. The intuitive UI makes it accessible on various screen sizes, thanks to Flexbox and `ScrollView` integration.

---

Feel free to clone and explore this project to see how basic React Native components come together to build a functional, interactive application.
