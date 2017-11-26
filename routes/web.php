<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/posts',301);

Route::get('/posts','PostController@index')->name('posts');

Route::get('/posts/edit/{id}','PostController@edit')->name('postEdit');

Route::post('/posts/update/{id}','PostController@update')->name('postUpdate');

Route::get('/posts/delete/{id}','PostController@destroy')->name('postDelete');