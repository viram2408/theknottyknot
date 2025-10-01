<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /** 
     * List all products 
     */
    public function index()
    {
        return response()->json(
            Product::with('category')->get()
        );
    }

    /** 
     * Show single product 
     */
    public function show(Product $product)
    {
        return $product->load('category');
    }

    /** 
     * Store new product 
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'price'       => 'required|numeric',
            'description' => 'nullable|string',
            'stock'       => 'required|integer|min:0',
            'category_id' => 'nullable|exists:categories,id',
            'image'       => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('products', 'public');
            $data['image_url'] = "/storage/{$path}";
        }

        $product = Product::create($data);

        return response()->json($product->load('category'), 201);
    }

    /** 
     * Update existing product 
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name'        => 'sometimes|string|max:255',
            'price'       => 'sometimes|numeric',
            'description' => 'nullable|string',
            'stock'       => 'sometimes|integer|min:0',
            'category_id' => 'nullable|exists:categories,id',
            'image'       => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            // remove old image
            if ($product->image_url) {
                $old = Str::after($product->image_url, '/storage/');
                Storage::disk('public')->delete($old);
            }
            $path = $request->file('image')->store('products', 'public');
            $data['image_url'] = "/storage/{$path}";
        }

        $product->update($data);

        return response()->json($product->fresh('category'));
    }

    /** 
     * Delete product 
     */
    public function destroy(Product $product)
    {
        if ($product->image_url) {
            $old = Str::after($product->image_url, '/storage/');
            Storage::disk('public')->delete($old);
        }

        $product->delete();

        return response()->noContent();
    }
}
