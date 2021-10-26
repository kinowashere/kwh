<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Kwh\Jwt\Jwt;

class UserController extends Controller
{
    /**
     * Gets details of a user that has been authenticated.
     *
     * @param Request $request
     * @return User
     */
    public function getUserDetails(Request $request): User
    {
        $token =  Jwt::getParsedToken($request->bearerToken());
        return User::find($token['payload']['handle']);
    }
}
