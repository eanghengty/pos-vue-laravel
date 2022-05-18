<?php



Route::group(
    [
        'middleware'=>'api',
        'namespace' => 'App\Http\Controllers',
        'prefix'=>'auth'
    ],function($router){
        Route::post('login','AuthController@login');
        Route::post('logout','AuthController@logout');
        Route::post('signup', 'AuthController@signup');
        Route::post('refresh', 'AuthController@refresh');
        Route::post('me', 'AuthController@me');
    }
);

Route::apiResource('/employee','Api\EmployeeController');
