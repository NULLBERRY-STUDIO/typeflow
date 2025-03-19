# TypeFlow Tuner

<div align="center">
  <img src="https://res.cloudinary.com/dm9gvqa1t/image/upload/v1742349175/5f23fb84262d4fce8ed9c6b3c8dd3b7f_xj7k2m.webp" alt="TypeFlow Tuner Logo" width="200" />
</div>

A modern implementation of the macOS key-repeat testing tool, rebuilt with performance and design in mind.

## Overview

TypeFlow helps you fine-tune your macOS key repeat settings without repeatedly logging out to test changes. This clean, minimal web application provides an interactive environment to test different key repeat speeds and delays, then generates the terminal commands needed to apply those settings to your system.

## Features

- **Test Key Repeat Settings**: Visualize and experience different key repeat speeds directly in the browser
- **Generate Terminal Commands**: Copy-paste terminal commands to set your preferred key repeat settings
- **Dark/Light Mode**: Seamlessly switch between dark and light themes
- **Real-time Visualization**: See how your settings affect typing in real-time
- **Minimalist Design**: Clean typography, simple geometry, and strategic white space for clarity
- **Performance First**: Built with React for minimal JavaScript and optimal performance

## Getting Started

1. Visit the TypeFlow application in your browser
2. Adjust the Initial Delay and Repeat Rate sliders to your preference
3. Test the settings by typing in the visualizer area
4. Copy the generated terminal command
5. Paste and run the command in your macOS Terminal
6. Log out and back in for the changes to take effect

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui component library
- Framer Motion for animations

### Local Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

## License

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
