<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetRecentBlogRequest;
use App\Models\Post;
use Illuminate\Http\JsonResponse;

class BlogController extends Controller
{
    /**
     * Get most recent Posts in Json
     * @param GetRecentBlogRequest $request
     * @return JsonResponse
     */
    public function getRecent(GetRecentBlogRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $pageSize = ($validated['pageSize'] ?? 10);
        $posts = Post::orderBy('date_published', 'desc')
            ->where('is_public', true)
            ->where('is_draft', false)
            ->simplePaginate($pageSize);
        $status = $posts->toArray()['data'] ? 200 : 404;
        return response()->json($posts, status: $status);
    }
}
