
# Quote of the Day App

A beautiful, resilient React app that fetches and displays a random quote from the Quotable API. Users can get new quotes and share them easily.

## Features
- Fetches a random quote and author from [Quotable API](https://api.quotable.io/random)
- Clean, modern UI with Tailwind CSS
- Loading and error states for robust UX
- "New Quote" button to fetch another quote
- "Share" button uses native Web Share API or clipboard fallback
- Modular codebase with clear separation of concerns

## Setup Instructions

1. **Clone the repository:**
	 ```bash
	 git clone https://github.com/scodez3-14/DevSoc_task4.git
	 cd DevSoc_task4/frontend
	 ```

2. **Install dependencies:**
	 ```bash
	 npm install
	 ```

3. **Start the development server:**
	 ```bash
	 npm run dev
	 ```
	 The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Build for Production

```bash
npm run build
```

## Technology Stack
- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

## Folder Structure
```
frontend/
	src/
		components/
			QuoteCard.jsx
			Loading.jsx
			ErrorMessage.jsx
		App.jsx
		main.jsx
		index.css
	public/
	index.html
	package.json
	vite.config.js
```

## API Reference
- [Quotable API](https://api.quotable.io/random)

