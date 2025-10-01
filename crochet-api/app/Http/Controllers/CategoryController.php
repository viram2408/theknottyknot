<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller {
    public function index(){ return Category::orderBy('name')->get(); }
    public function show(Category $category){ return $category; }
    public function store(Request $request){
        $data = $request->validate(['name'=>'required|string|max:100']);
        $data['slug'] = Str::slug($data['name']);
        return Category::create($data);
    }
    public function update(Request $request, Category $category){
        $data = $request->validate(['name'=>'required|string|max:100']);
        $category->update(['name'=>$data['name'], 'slug'=>Str::slug($data['name'])]);
        return $category;
    }
    public function destroy(Category $category){ $category->delete(); return response()->noContent(); }
}
