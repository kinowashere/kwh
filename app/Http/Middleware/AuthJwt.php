<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Kwh\Jwt\Jwt;

class AuthJwt
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        /**
         * If no token is present
         */
        if (!$request->bearerToken()) {
            return response()->json(['error' => 'Authorization token is not present'], status: 401);
        }

        /**
         * Check for the validity of the token
         */
        $jwt = new Jwt(env('JWT_PRIVATE_KEY'));
        if (!$jwt->isTokenValid($request->bearerToken())) {
            return response()->json(['error' => 'Token is not valid'], status: 401);
        }

        /**
         * If the token doesn't belong to a user
         */

        $token = $jwt::getParsedToken($request->bearerToken());
        if (!User::find($token['payload']['handle'])) {
            return response()->json(['error' => 'Unauthorized'], status: 401);
        }

        return $next($request);
    }
}
