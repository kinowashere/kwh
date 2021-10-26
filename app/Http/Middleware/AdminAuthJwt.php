<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Kwh\Jwt\Jwt;

class AdminAuthJwt
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        /**
         * If no token is present
         */
        if (!$request->bearerToken()) {
            return response()->json(['error' => 'Unauthorized'], status: 401);
        }

        /**
         * Check for the validity of the token
         */
        $jwt = new Jwt(env('JWT_PRIVATE_KEY'));
        if (!$jwt->isTokenValid($request->bearerToken())) {
            return response()->json(['error' => 'Unauthorized'], status: 401);
        }

        /**
         * If the token doesn't belong to a user
         */

        $token = $jwt::getParsedToken($request->bearerToken());
        $user = User::find($token['payload']['handle']);
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], status: 401);
        }

        /**
         * If the user is not Admin
         */

        if (!$user->roles->contains('role', value: 'admin')) {
            return false;
        }

        return $next($request);
    }
}
