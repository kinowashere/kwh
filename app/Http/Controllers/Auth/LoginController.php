<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Kwh\Jwt\Jwt;

class LoginController extends Controller
{
    public function adminLogin(LoginRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $user = User::find($validated['handle']);

        if (!Hash::check($validated['password'], $user->password)) {
            return response()->json(['error' => 'Invalid password'], status: 401);
        }

        if (!$user->roles->contains('role', value: 'admin')) {
            return response()->json(['error' => 'Not Admin'], status: 401);
        }

        $jwt = new Jwt(env('JWT_PRIVATE_KEY'));

        return response()->json(['token' => $jwt->getToken(['handle' => $user->handle])]);
    }
}
