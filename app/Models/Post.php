<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Post
 *
 * @mixin Builder
 */
class Post extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at', 'is_draft', 'is_public'];
    protected $casts = [
        'is_draft' => 'boolean',
        'is_public' => 'boolean'
    ];
    protected $fillable = ['title', 'content', 'date_published', 'is_draft', 'is_public'];
}
