# Personal Portfolio

A modern, responsive personal portfolio showcasing my skills, projects, work experience, testimonials, and a contact form. Built with cutting-edge web technologies, this portfolio features smooth animations, 3D visuals, and a clean user interface to highlight my expertise as a developer.

![Portfolio Screenshot](public/images/portfolio-screenshot.png)

## Features

- **Interactive 3D Animations**: Engaging visuals like a rotating starfield and Earth model using Three.js.
- **Responsive Design**: Optimized for all devices with Tailwind CSS.
- **Smooth Transitions**: Powered by Framer Motion for fluid animations.
- **Project Showcase**: Tilt-enabled project cards with GitHub links using react-parallax-tilt.
- **Contact Form**: Email integration with EmailJS for seamless communication.
- **Type-Safe Codebase**: Built with TypeScript for robust development.
- **Fast Development**: Powered by Vite for lightning-fast builds and hot module replacement.

## Tech Stack

The portfolio leverages the following libraries and tools to deliver a high-quality user experience:

| Library/Tool | Version | Description |
|--------------|---------|-------------|
| **[React](https://react.dev/)** | ^19.0.0 | Frontend framework for building dynamic user interfaces. |
| **[TypeScript](https://www.typescriptlang.org/)** | ^5.6.2 | Adds static types to JavaScript for improved code reliability. |
| **[Vite](https://vite.dev/)** | ^5.4.8 | Next-generation build tool for fast development and optimized builds. |
| **[Tailwind CSS](https://tailwindcss.com/)** | 3.4.4 | Utility-first CSS framework for rapid and responsive styling. |
| **[Framer Motion](https://www.framer.com/motion/)** | ^12.0.0 | Animation library for smooth and declarative animations. |
| **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)** | ^9.0.1 | React renderer for Three.js to create 3D scenes. |
| **[@react-three/drei](https://github.com/pmndrs/drei)** | ^10.6.5 | Useful helpers and abstractions for `@react-three/fiber`. |
| **[Three.js](https://threejs.org/)** | ^0.169.0 | JavaScript library for creating and animating 3D graphics. |
| **[maath](https://github.com/pmndrs/maath)** | ^0.10.8 | Math utilities for 3D calculations, used in starfield animations. |
| **[@emailjs/browser](https://www.emailjs.com/)** | ^4.0.0 | Client-side email sending for the contact form. |
| **[react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt)** | ^1.7.2 | Adds a tilt effect to project cards for an interactive feel. |

## Installation

Follow these steps to set up the portfolio locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Vixen-1/portfolio.git
   cd portfolio

2. **Install Dependencies**:
  ```bash
   npm install --legacy-peer-deps

3. **Set Up Environment Variables**:
  ```bash
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key

4. **Run the Development Server**:
  ```bash
  npm start