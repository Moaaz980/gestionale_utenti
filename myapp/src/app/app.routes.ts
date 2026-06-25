import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserTable } from './features/users/components/article-table/user-table';
import { Usercreationform } from './features/users/components/usercreationform/usercreationform';

export const routes: Routes = [
    {path: 'users' , component: UserTable} , 
    {path: 'create' , component: Usercreationform}
];
