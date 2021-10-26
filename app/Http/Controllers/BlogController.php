<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePostRequest;
use App\Http\Requests\DeletePostByIdRequest;
use App\Http\Requests\EditPostRequest;
use App\Http\Requests\GetPostByIdRequest;
use App\Http\Requests\GetRecentBlogRequest;
use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;
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
        $paginatedPosts = Post::orderBy('date_published', 'desc')
            ->where('is_public', true)
            ->where('is_draft', false)
            ->simplePaginate($pageSize)->toArray();
        if (!$paginatedPosts['data']) {
            return response()->json('Not found', status: 404);
        }
        $posts = [
            'posts' => $paginatedPosts['data'],
            'next_page' => (bool) $paginatedPosts['next_page_url'],
            'prev_page' => (bool) $paginatedPosts['prev_page_url'],
            'current_page' => $paginatedPosts['current_page']
        ];
        return response()->json($posts);
    }

    /**
     * Create new Post
     *
     * @param CreatePostRequest $request
     * @return Post
     */
    public function create(CreatePostRequest $request): Post
    {
        $validated = $request->validated();
        return Post::create($validated);
    }

    /**
     * Get Post by ID
     *
     * @param GetPostByIdRequest $request
     * @return Post | JsonResponse
     */
    public function getById(GetPostByIdRequest $request): Post | JsonResponse
    {
        $validated = $request->validated();
        $post = Post::find($validated['id']);
        if (!$post || $post->is_draft || !$post->is_public) {
            return response()->json('Not found', status: 404);
        } else {
            return $post;
        }
    }

    /**
     * Get all Posts with private details like privacy and if it's draft.
     *
     * @return array|Collection
     */
    public function getAllWithDetails(): array|Collection
    {
        return Post::all()->makeVisible(['is_draft', 'is_public']);
    }

    /**
     * Edit / Update a Post by ID
     *
     * @param EditPostRequest $request
     * @return JsonResponse
     */
    public function edit(EditPostRequest $request): JsonResponse
    {
        $validated = $request->validated();
        if (Post::findOrFail($validated['id'])->update($validated)) {
            return response()->json('Post updated');
        }

        return response()->json('Could not update the post', status: 400);
    }

    /**
     * Delete a Post by ID
     *
     * @param DeletePostByIdRequest $request
     * @return JsonResponse
     */
    public function delete(DeletePostByIdRequest $request): JsonResponse
    {
        $validated = $request->validated();
        if (Post::findOrFail($validated['id'])->delete()) {
            return response()->json('Post deleted');
        }

        return response()->json('Could not delete the post', status: 400);
    }
}
