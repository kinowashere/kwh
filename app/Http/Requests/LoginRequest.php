<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     * This will only validate the data, not authenticate the user!
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'handle' => ['required', 'string', 'exists:users,handle'],
            'password' => ['required', 'string']
        ];
    }
}
