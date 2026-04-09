// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-D  ·  Implement UsersController
// ─────────────────────────────────────────────────────────────────────────────
// Wire up ALL 5 endpoints under the '/users' path.
// Use ParseIntPipe for the :id param in every route that needs it.
//
//   GET    /users
//   GET    /users/:id
//   POST   /users          (201)
//   PATCH  /users/:id
//   DELETE /users/:id
// ─────────────────────────────────────────────────────────────────────────────

import { Controller } from '@nestjs/common';
// TODO: import all decorators and pipes you need
import { UsersService } from './users.service';
// TODO: import your DTOs

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // TODO: implement the 5 route handlers
}
