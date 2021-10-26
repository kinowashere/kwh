<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Kwh\Jwt\Jwt;

class JwtRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        $jwt = new Jwt(env('JWT_PRIVATE_KEY'));
        return $jwt->isTokenValid($value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message(): string
    {
        return 'JWT is not valid.';
    }
}
