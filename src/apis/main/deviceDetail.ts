import client, {Result} from "@/apis/api-client";

export function getDeviceDataTypeList(deviceId:number,doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/device/device-data-type-list.json';
    client.handForm(url,doSuccess,{deviceId:deviceId});
}

export function getDeviceSensorList(data:any,doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/device/device-sensor-list.json';
    client.handForm(url,doSuccess,{deviceId:data.deviceId,dataType:data.dataType});
}

export function getSensorDataList(data:any,doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/device/sensor-data-list.json';
    client.handForm(url,doSuccess,{deviceId:data.deviceId,sensorId:data.sensorId});
}