Fixes Applied
✅ Fixes SpringValue<number[]> is not assignable to Vector3 error
✅ Uses position.to() to correctly animate [x, y, z] values
✅ Tracks mouse movement globally with useEffect()
✅ Moves the image smoothly in response to mouse movement

🚀 **Final Step: Run Your React App**
sh
Copy
Edit
npm run dev

Then visit http://localhost:5173/ → You’ll see:
✅ Image moves left/right/up/down based on mouse movement
✅ Scales up slightly when hovered
✅ A "Next" button to switch images 🎉

📌 Features
✅ 3D Image Display – Displays images in a 3D environment
✅ Mouse Movement Interaction – Image moves left/right/up/down as the mouse moves
✅ Hover Animation – Image scales up smoothly when hovered
✅ Image Switching – A "Next" button cycles through different images
✅ Smooth Animations – Uses @react-spring/three for fluid transitions

📂 Project Structure
pgsql
Copy
Edit
📂 interactive-3d-viewer
 ├── 📂 public
 │    ├── 📂 textures
 │    │    ├── lion.jpg
 │    │    ├── tiger.jpg
 │    │    ├── elephant.jpg
 ├── 📂 src
 │    ├── App.tsx
 │    ├── index.tsx
 │    ├── styles.css
 ├── index.html
 ├── tsconfig.json
 ├── vite.config.ts
 ├── package.json
 ├── README.md

 ⚙️ Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/YOUR-USERNAME/interactive-3d-viewer.git
cd interactive-3d-viewer
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Run the Project
sh
Copy
Edit
npm run dev
📌 Open http://localhost:5173/ in your browser.

📜 Usage Instructions
Move the mouse → The image follows the cursor
Hover over the image → The image scales up smoothly
Click "Next Image" → Switch to the next 3D image
📦 Dependencies
Package	Description
react-three-fiber	React wrapper for Three.js
@react-three/drei	Utility components for Three.js
@react-spring/three	Smooth animations in Three.js
three	Core 3D rendering library
