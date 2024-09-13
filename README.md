
# Responsive Calculator with Dark Mode

This project is a responsive calculator built using **HTML**, **CSS**, and **JavaScript**. It includes a **dark mode toggle switch** to enhance user experience, allowing users to switch between light and dark themes. The calculator is designed to be fully functional and visually appealing on both desktop and mobile devices.

## Features

- **Basic Calculations**: Perform standard arithmetic operations (addition, subtraction, multiplication, division, and modulus).
- **Clear and Delete Functionality**: Quickly clear the display or delete the last character.
- **Responsive Design**: The layout adjusts to fit various screen sizes, making it user-friendly on mobile devices.
- **Dark Mode**: Includes a toggle switch for dark mode, allowing users to switch between light and dark themes.
- **Smooth Button Interactions**: Button states are visually distinct on hover and click, with smooth transitions.
  
## Project Structure

```
├── index.html        # Main HTML file
├── style.css         # Stylesheet for design and responsiveness
├── script.js         # JavaScript for functionality
└── README.md         # Project documentation
```

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Kpavan63/responsive-calculator.git
    ```
   
2. **Open the project**:
   - Navigate to the project folder and open `index.html` in a browser to view the calculator.

3. **Use the calculator**:
   - Enter numbers and arithmetic operations using the buttons.
   - Press `C` to clear the display or `DEL` to remove the last character.
   - Use `=` to calculate the result.
   - Toggle the **Dark Mode** switch at the top to switch between light and dark themes.

## Technologies Used

- **HTML5**: Provides the structure and layout of the calculator.
- **CSS3**: For styling, responsiveness, and dark mode transitions.
- **JavaScript**: Handles the calculator's functionality and the dark mode toggle behavior.

## Dark Mode Toggle

The dark mode switch is implemented using a custom CSS toggle button. When the switch is activated, the `dark-mode` class is added to the body, which adjusts colors and background styles across the calculator.

```js
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
```

## Screenshots

### Light Mode

![Light Mode]
![Screenshot 2024-09-13 080938](https://github.com/user-attachments/assets/723b5f02-0bba-42b9-b84a-57604f935b59)

### Dark Mode
![Screenshot 2024-09-13 081146](https://github.com/user-attachments/assets/2b0c9cd3-2ab5-4760-879f-545ecf759b13)

![Dark Mode]

## License

This project is licensed under the MIT License. Feel free to modify and use it for your own purposes.
