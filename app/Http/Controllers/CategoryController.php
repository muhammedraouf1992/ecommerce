<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $data = Category::all();
        return response()->json(['data' => $data, 'message' => 'all categories'], 200);
    }
    public function visible()
    {
        $data = Category::where('status', '0')->get(['id', 'title']);
        return response()->json(['data' => $data, 'message' => 'all categories'], 200);
    }
    public function store(Request $request)
    {


        $data = $request->validate([
            'title' => ['required', 'max:191'],
            'slug' => ['required', 'max:191'],
            'description' => ['required', 'max:191'],
        ]);

        $status = $request->status ? '1' : '0';
        Category::create([
            'title' => $data['title'],
            'slug' => $data['slug'],
            'description' => $data['description'],

            'meta_title' => $request->metaTitle,
            'meta_keyword' => $request->metaKeyword,
            'meta_description' => $request->metaDescription,
            'status' =>  $status
        ]);
        return response()->json([
            'message' => 'category added', 200
        ]);
    }
    public function show($id)
    {
        $data = Category::find($id);
        return response()->json(['data' => $data, 'message' => 'single categories'], 200);
    }
    public function update(Request $request, Category $category)
    {

        $data = $request->validate([
            'title' => ['required', 'max:191'],
            'slug' => ['required', 'max:191'],
            'description' => ['required', 'max:191'],
        ]);
        $status = $request->status ? '1' : '0';

        $category->update([
            'title' => $data['title'],
            'slug' => $data['slug'],
            'description' => $data['description'],
            'meta_title' => $request->metaTitle,
            'meta_keyword' => $request->metaKeyword,
            'meta_description' => $request->metaDescription,
            'status' =>  $status
        ]);
    }
    public function delete(Category $category)
    {
        $category->delete();
        return response()->json(['message' => 'category deleted successfully'], 200);
    }
}
