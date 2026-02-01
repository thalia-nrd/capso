# Capso
A cozy digital frame where users can personalize their own space 🌸 Add photos, notes, trinkets, and memories. It’s a playful and expressive web app that blends creativity with personal organization.  

---

## ✨ Features

- 🗝️ **Password Chest (Key)** – store private notes or secrets securely behind a password.
- 📝 **Sticky Notes & To-Do Lists** – quickly jot down reminders, tasks, or thoughts.
- 📓 **Diary / Journal (Envelope)** – write password-protected entries and organize them by day.
- 🖼️ **Photo Frames (Polaroid)** – upload favorite photos, automatically cropped to fit the frame.
- 🕒 **Vintage Clock** – a stylish clock for your frame.
- 🦆 **Duck / Throw Bread** – interact with a cute random duck for a little fun.
- 🪞 **Magic Mirror** – displays random fun facts or quotes.

---

## ⚡ Tech Stack

**Frontend**
- React + TypeScript
- Zustand (state management)
- SCSS/CSS (styling)
- React DnD (drag-and-drop support)

**Backend**
- Node.js + Express
- Prisma ORM + PostgreSQL
- JWT Authentication
- Cloudinary (for image uploads)

**Dev Tools**
- ESLint + Prettier + Husky
- Vite (optional frontend dev server)
- pnpm or npm workspaces (for monorepo setup)

---

## 🛡️ Error Handling & Validation

- Password-protected features (Key & Envelope) include error messages for:
  - Wrong passcodes
  - Missing or invalid entries
- File uploads are validated for:
  - File type (images only)
  - Size limits
  - Max number of uploads per item
- All async actions (API calls, uploads) include loading states to prevent UI crashes.
- Graceful fallback for failed requests ensures the app remains usable even if a service fails.
