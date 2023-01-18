import client, { Result } from '@/apis/api-client';
import {LoginInfo} from "@/views/login/Login";

export function authLogin(data: LoginInfo, doSuccess: (it: Result<unknown>) => void): void {
    const url='/user/login.json';
    const json=data;
    client.handJson(url,doSuccess,json);
}