@extends('layouts.app')

@section('content')
<!-- Navbar -->
<header class="flex justify-between items-center px-8 py-6 bg-cream">
  <h1 class="text-2xl font-cursive">Crochet</h1>
  <nav class="space-x-6 text-sm font-medium">
    <a href="#">Home</a>
    <a href="#">Shop</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <div>🛒</div>
</header>

<!-- Hero -->
<section class="flex flex-col md:flex-row items-center px-8 py-10">
  <div class="flex-1">
    <h2 class="text-4xl font-semibold mb-4">Handmade<br>with love</h2>
    <button class="mt-4 px-6 py-3 bg-peach text-white rounded hover:bg-opacity-80">Shop Now</button>
  </div>
  <div class="flex-1">
    <img src="{{ asset('images/yarn-basket.jpg') }}" alt="Basket" class="w-full max-w-md mx-auto">
  </div>
</section>

<!-- Categories -->
<section class="px-8 py-10">
  <h3 class="text-2xl font-semibold mb-6">Categories</h3>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
    <div class="text-center">
      <img src="{{ asset('images/toy.jpg') }}" class="rounded mb-2">
      <p>Toys</p>
    </div>
    <div class="text-center">
      <img src="{{ asset('images/clothing.jpg') }}" class="rounded mb-2">
      <p>Clothing</p>
    </div>
    <div class="text-center">
      <img src="{{ asset('images/home-decor.jpg') }}" class="rounded mb-2">
      <p>Home Decor</p>
    </div>
    <div class="text-center">
      <img src="{{ asset('images/accessories.jpg') }}" class="rounded mb-2">
      <p>Accessories</p>
    </div>
  </div>
</section>

<!-- Featured Products -->
<section class="px-8 py-10">
  <h3 class="text-2xl font-semibold mb-6">Featured Products</h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-white rounded-lg shadow p-4 text-center">
      <img src="{{ asset('images/booties.jpg') }}" class="mb-2 rounded">
      <p class="font-medium">Baby Bootie</p>
      <p class="text-sm text-gray-500">$15.00</p>
      <button class="mt-3 px-4 py-2 bg-peach text-white rounded hover:bg-opacity-80">Add to Cart</button>
    </div>
    <div class="bg-white rounded-lg shadow p-4 text-center">
      <img src="{{ asset('images/bag.jpg') }}" class="mb-2 rounded">
      <p class="font-medium">Shoulder Bag</p>
      <p class="text-sm text-gray-500">$25.00</p>
      <button class="mt-3 px-4 py-2 bg-peach text-white rounded hover:bg-opacity-80">Add to Cart</button>
    </div>
    <div class="bg-white rounded-lg shadow p-4 text-center">
      <img src="{{ asset('images/blanket.jpg') }}" class="mb-2 rounded">
      <p class="font-medium">Srnale Blanket</p>
      <p class="text-sm text-gray-500">$40.00</p>
      <button class="mt-3 px-4 py-2 bg-peach text-white rounded hover:bg-opacity-80">Add to Cart</button>
    </div>
  </div>
</section>
@endsection
