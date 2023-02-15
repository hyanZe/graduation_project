export interface SensorDataCount {
    dataCountTotal: number;
    dataCountToday: number;
    dataCountLast: number;
    dataCountError: number;
}

export interface SensorCount {
    phUsing: number;
    phTotal: number;
    pUsing: number;
    pTotal: number;
    airTempUsing: number;
    airTempTotal: number;
    baseUsing: number;
    baseTotal: number;
    nUsing: number;
    nTotal: number;
    kUsing: number;
    kTotal: number;
    airWetUsing: number;
    airWetTotal: number;
    baseTempUsing: number;
    baseTempTotal: number;
}

export interface DeviceInfo{
    id:number;
    ip:string;
    deviceName:string;
}

export interface AverageDeviceData{
    ph:number,
    p:number,
    n:number,
    k:number
}

export interface DeviceCondData{
    deviceName:string,
    sensorCountUsing:number,
    sensorCountTotal:number,
}
