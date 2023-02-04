import client, {Result} from "@/apis/api-client";
import {SensorDataCount} from "@/views/main/dashboard/Dashboard";

export function getSensorDataCount(doSuccess: (it: Result<SensorDataCount>) => void): void {
    const url='/auth/dashboard/sensor-data-count.json';
    client.handJson(url,doSuccess);
}