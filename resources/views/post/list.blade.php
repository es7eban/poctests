@extends('layouts.app')

@section('title','List Posts')

@section('content')
    <table class="table">
        <thead>
            <th>User</th>
            <th>Title</th>
            <th>Text</th>
            <th>Action</th>
        </thead>
        <tbody>
            @foreach($posts as $post)
            <tr>
                <td>{{$post->user_id}}</td>
                <td>{{$post->title}}</td>
                <td>{{$post->text}}</td>
                <td>
                    <a class="btn btn-info" href="{{ route('postEdit',['id' => $post->id]) }}">edit</a>
                    <a class="btn bg-danger" href="{{ route('postDelete',['id' => $post->id]) }}">delete</a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
@endsection