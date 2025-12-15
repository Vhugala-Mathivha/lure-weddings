# Lure Weddings – Django + React (Vite + TS + Tailwind)

## Stack
- Backend: Django, DRF, django-cors-headers
- Frontend: Vite, React, TypeScript, Tailwind + custom luxury theme CSS
- API base: `VITE_API_BASE` (defaults to `http://localhost:8000`)

## Quickstart
```bash
# Backend
cd backend
python -m venv .venv
source .venv/bin/activate  # on Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata seed.json
python manage.py runserver 0.0.0.0:8000

# Frontend
cd ../frontend
npm install
npm run dev  # runs on http://localhost:5173
```

## Project structure
- backend/
  - manage.py, weddingplanner/ (settings, urls), core/ (models, serializers, views, urls), seed.json, requirements.txt
- frontend/
  - Vite React TS app with Tailwind, theme.css, components (Navbar, Hero, Inspiration, Services, Gallery, VowWriter, Footer), lib/api.ts, env config.

## Notes
- CORS allowed for `http://localhost:5173`
- Buttons:
  - “Write Vows” → scrolls to vow section; submit calls `/api/vows` stub, shows generated text.
  - “Find Inspiration” → scrolls to inspiration section.
  - Services “Access Tool” → smooth scroll to relevant sections.
  - Inspiration “Generate” → POST `/api/inspiration`, shows placeholder image/card.
- Replace placeholder image URLs in `seed.json` later.