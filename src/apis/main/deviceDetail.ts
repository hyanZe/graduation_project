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

export function getDataLogs(data:number,doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/device/data-logs.json';
    client.handForm(url,doSuccess,{deviceId:data});
}

export function updateDataState(data:any,doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/device/update-err.json';
    console.log('data', data);
    client.handForm(url,doSuccess,{dataId:data.dataId,state:data.state});
}

export function updateThreshold(data:any,doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/device/update-config.json';
    console.log('data', data);
    client.handForm(url,doSuccess,{deviceId:data.deviceId,key:data.key,val:data.val});
}

export function loadThreshold(data:any,doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/device/threshold.json';
    console.log('data', data);
    client.handForm(url,doSuccess,{deviceId:data});
}

export function deviceDetailInfo(data:any,doSuccess: (it: Result<any>) => void) : void{
    const url='/auth/device/detail-info.json';
    console.log('data', data);
    client.handForm(url,doSuccess,{deviceId:data});
}