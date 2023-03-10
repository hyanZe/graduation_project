import client, {Result} from "@/apis/api-client";
import {SensorDataCount,SensorCount} from "@/views/main/dashboard/Dashboard";

export function getSensorDataCount(doSuccess: (it: Result<SensorDataCount>) => void): void {
    const url='/auth/dashboard/sensor-data-count.json';
    client.handJson(url,doSuccess);
}

export function getSensorCount(doSuccess: (it: Result<SensorCount>) => void): void {
    const url='/auth/dashboard/sensor-count.json';
    client.handJson(url,doSuccess);
}

export function getDeviceList(doSuccess: (it: Result<any>) => void): void {
    const url='/auth/device/device-list.json';
    client.handJson(url,doSuccess);
}

export function getDeviceAverageData(deviceId:number,doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/dashboard/average-data.json';
    client.handForm(url,doSuccess,{deviceId:deviceId});
}

export function getDeviceCondData(doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/dashboard/device-condition.json';
    client.handForm(url,doSuccess);
}