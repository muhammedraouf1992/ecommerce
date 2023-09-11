<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

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
        $last_name = '';
        if ($request->hasFile('image')) {
            $image = $request->image;
            $img_name = uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads/categories'), $img_name);
            $last_name = 'uploads/categories/' . $img_name;
        } else {
            $last_name = 'noimage';
        }


        Category::create([
            'title' => $data['title'],
            'slug' => $data['slug'],
            'description' => $data['description'],
            'image' => $last_name,
            'meta_title' => $request->metaTitle,
            'meta_keyword' => $request->metaKeyword,
            'meta_description' => $request->metaDescription,
            'status' =>  $request->status
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


        $last_name = '';
        if ($request->hasFile('image')) {
            $image = $request->image;
            $img_name = uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads/categories'), $img_name);
            $last_name = 'uploads/categories/' . $img_name;
            if (File::exists(public_path($category->image))) {
                unlink($category->image);
            }
            $category->update([
                'title' => $request->title,
                'slug' => $request->slug,
                'description' => $request->description,
                'meta_title' => $request->metaTitle,
                'meta_keyword' => $request->metaKeyword,
                'meta_description' => $request->metaDescription,
                'status' =>  $request->status,
                'image' => $last_name
            ]);
        }
        $category->update([
            'title' => $request->title,
            'slug' => $request->slug,
            'description' => $request->description,
            'meta_title' => $request->metaTitle,
            'meta_keyword' => $request->metaKeyword,
            'meta_description' => $request->metaDescription,
            'status' =>  $request->status,

        ]);
    }
    public function delete(Category $category)
    {
        $category->delete();
        return response()->json(['message' => 'category deleted successfully'], 200);
    }
}
