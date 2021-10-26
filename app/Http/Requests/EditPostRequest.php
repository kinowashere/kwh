<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => ['required', 'integer', 'exists:posts'],
            'title' => ['required', 'string', 'max:250'],
            'content' => ['required', 'string', 'max:10000'],
            'date_published' => ['required', 'date'],
            'is_draft' => ['required', 'boolean'],
            'is_public' => ['required', 'boolean']
        ];
    }
}
