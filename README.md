
  # Is It Duck?

  This is a game where you guess if it is a duck! Have fun playing!

  ## Local Testing
  
  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Local Development

  ### 1) Start the backend (Flask)
  ```bash
  python3 -m venv .venv
  source .venv/bin/activate
  pip install flask
  python backend/app.py
  ```
  
  ### 2) Start the frontend (Vite) in a second terminal
  ```bash
  npm install
  npm run dev
  ```
  
  ### 3) Open the app
  Use the URL Vite prints (typically):
  ```
  http://127.0.0.1:5175/
  ```
  
