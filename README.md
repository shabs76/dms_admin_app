# dms_admin_app — Admin UI for Driver Monitoring

This repository contains the **administrator-facing web UI** for monitoring driver behavior, reviewing offenses, and managing vehicle/driver accounts. It is designed to work alongside the backend ingestion service (`dms_express_app`) that receives real-time telemetry from vehicle-installed IoT devices.

## What This UI Supports

Administrators use this UI to:
- Sign in and manage admin/owner accounts.
- Review driver and vehicle information.
- Inspect offense events and supporting evidence (videos/CSV logs).
- Manage users, services, add-ons, payments, and profile settings.
- Complete signup/verification flows for new enterprises and owners.

Key UI entry points live under `src/components/pages/Admin`, `src/components/pages/Offences`, and `src/components/pages/SignupProcess`.

## Backend Integration (dms_express_app)

This UI is intended to sit on top of the backend ingestion service described below. The backend is responsible for collecting telemetry, storing offense records, and exposing data to this admin UI.

**Backend summary (as implemented in `dms_express_app`):**
- **HTTP API**: authentication/verification + evidence uploads
- **Socket.IO**: telemetry streaming (`recordDrive`) and offense reporting (`offense`, `OffenseCall`)
- **Database**: MariaDB via `mysql2`
- **Object Storage**: S3-compatible uploads for video + CSV evidence
- **Forwarding**: emits offense/track payloads to an external real-time system

**Backend endpoints/events used by the platform:**
- `POST /auth/verify` and `POST /auth/logout` for device/session verification
- `POST /upload/offenseVideo` for evidence uploads
- Socket.IO events: `savingSocket`, `recordDrive`, `offense`, `OffenseCall`

**Architecture overview:**
```
IoT Device / Vehicle App
        ↓ (Socket.IO + HTTP uploads)
Backend (dms_express_app)
        ↓ (API + DB)
Admin UI (this repository)
```

> The UI uses `sendToBackendPost` (`src/sharedFunctions/apiCall.js`) with `withCredentials: true` and routes like `/gatway/`, `/gatway/us.php`, and `/gatway/client.php`. In local development you can adjust the `proxy` entry in `package.json` (currently `http://localhost`) to match the backend host/port (for example `http://localhost:5200`).

## Local Development

### 1) Install dependencies
```bash
npm install
```

### 2) Start the UI
```bash
npm start
```

The app runs on `http://localhost:3000` by default.

### 3) Start the backend
Follow the backend README (dms_express_app). Typical options:
```bash
# Docker (from backend repo)
docker compose -f docker-compose-local.yaml up --build

# Or run the backend directly
cd code
npm install
npm run devStart
```
The backend HTTP/Socket server listens on `http://localhost:5200`.

## Available Scripts

- `npm start` — run the development server
- `npm run build` — create a production build
- `npm test` — run tests (Jest/React Testing Library)

## Tech Stack

- React 18 (Create React App)
- Redux Toolkit
- React Router DOM
- Axios

## Security / Privacy Notes

This platform surfaces sensitive data (GPS location, driver identity, vehicle details, and evidence videos). Ensure TLS is enforced end-to-end and backend authentication is hardened before production deployment.

## License

Add your license details here (or include a `LICENSE` file).
