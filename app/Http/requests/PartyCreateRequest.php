<?php

namespace App\Http\Requests;

use App\Models\Party;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class PartyCreateRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', Rule::unique(Party::class)],
            'owner' => ['required', 'string'],
            'presentation' => ['required', 'string'],
            'date_party' => ['required', 'date'],
        ];
    }
}