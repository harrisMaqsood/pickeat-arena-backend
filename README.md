# Multi-Vendor Arena API

A Node.js backend for managing vendors, arenas, and assignments with role-based access control.

## Features

- Arena management with pickup slots
- Vendor creation and menu management
- Assignment system linking vendors to arena slots
- Role-based authentication (Admin/Vendor)
- MongoDB data persistence
- Docker container support

## API Endpoints

### Arenas
| Method | Endpoint             | Description                     | Auth Required |
|--------|----------------------|---------------------------------|---------------|
| POST   | `/arena`             | Create new arena                | Admin         |
| GET    | `/arena/:id/vendors` | Get vendors assigned to arena   | Any           |

### Vendors
| Method | Endpoint             | Description                     | Auth Required |
|--------|----------------------|---------------------------------|---------------|
| POST   | `/vendor`            | Create new vendor               | Public        |
| POST   | `/vendor/:id/menu`   | Add menu item to vendor         | Vendor        |

### Assignments
| Method | Endpoint    | Description                     | Auth Required |
|--------|-------------|---------------------------------|---------------|
| POST   | `/assign`   | Assign vendor to arena slot     | Admin         |

## Quick Start
docker-compose up --build