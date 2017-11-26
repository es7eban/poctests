@extends('layouts.app')

@section('title','Edit Post')

@section('content')
    <div class="col-lg-5">
        <form method="post" action="{{ route('postUpdate',['id' => $post->id]) }}">
            {{ csrf_field() }}

            <div class="form-group row">
                <label for="user_id">User:</label>
                {{ $post->user_id }}
                {{--<select name="user_id" class="form-control" id="user_id">
                    <option value="1">{{ $post->user_id }}</option>
                </select>--}}
            </div>
            <div class="form-group row">
                <label for="title">Title:</label>
                <input name="title" type="title" class="form-control" id="tile" value="{{ $post->title }}">
            </div>
            <div class="form-group row">
                <label for="text">Text:</label>
                <textarea name="text" id="text" class="form-control" cols="30" rows="10">{{ $post->text }}</textarea>
            </div>
            <div class="form-group row">
                <input class="btn-success" type="submit" value="update">
            </div>
        </form>
    </div>
@endsection