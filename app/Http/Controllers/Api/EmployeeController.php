<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Model\Employee;
use Image;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employee=Employee::all();
        return response()->json($employee);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validateData=$request->validate([
            'name'=>'required|unique:employees|max:255',
            'email'=>'require',
            'phone'=> 'require|unique:employees',
            
        ]);
        
        if($request->photo ){
         $position=strpos($request->photo,';');
         $sub = substr($request->photo,0,$position);
         $ext=explode('/',$sub)[1];
         $name=time().".".$ext;
         $img=Image::make($request->photo->resize(240,200));
         $upload_path='backend/employee/';
         $img_url=$upload_path.$name;
         $img->save($img_url);
         $employee= new Employee;
         $employee->name=$request->name;
         $employee->email=$request->email;
         $employee->phone=$request->phone;
         $employee->salary=$request->salary;
         $employee->address=$request->address;
         $employee->nid=$request->nid;
         $employee->joining_date=$request->joining_date;
         $employee->photo=$image-url;
         $employee->save();
        }
        else{
            $employee= new Employee;
         $employee->name=$request->name;
         $employee->email=$request->email;
         $employee->phone=$request->phone;
         $employee->salary=$request->salary;
         $employee->address=$request->address;
         $employee->nid=$request->nid;
         $employee->joining_date=$request->joining_date;

         $employee->save();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
