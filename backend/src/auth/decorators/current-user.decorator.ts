import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

export const CurrentUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request & { user?: unknown }>();
    const user = request.user;
    if (!user) {
      return undefined;
    }
    return data
      ? (user as Record<string, unknown>)[data]
      : user;
  },
);