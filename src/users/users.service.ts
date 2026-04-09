// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-C  ·  Implement UsersService
// ─────────────────────────────────────────────────────────────────────────────
// Create an in-memory service following the same pattern as ProductsService.
//
// Requirements:
//   - Store users in a private array
//   - Pre-populate with at least 2 seed users
//   - Implement: findAll, findOne(id), create(dto), update(id, dto), remove(id)
//   - findOne must throw NotFoundException when user is not found
//
// Interface to use:
//   export interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
//     role: string;
//   }
// ─────────────────────────────────────────────────────────────────────────────

import { Injectable } from '@nestjs/common';
// TODO: import NotFoundException and your DTOs

@Injectable()
export class UsersService {
  // TODO: implement the service
}
