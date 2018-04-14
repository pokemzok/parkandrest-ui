import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HEALTH_CHECK} from '../../environments/environment';
import {ServerStatus} from './serverstatus';

@Injectable()
export class HealthCheckService {

  private serverStatus: ServerStatus;

  constructor (private http: HttpClient) {}

  // TODO: think how to return a value
  healthCheckServer() {
    this.http.get<Response>(HEALTH_CHECK).subscribe(
      value => {
        console.log(value);
        this.serverStatus = ServerStatus.ONLINE; // TODO: get from value.status
      },
      error => {
        console.log(error);
        this.serverStatus = ServerStatus.OFFLINE; // TODO: get from value.status
      },
      () => {
        console.log('Request complete');
      }
    )
  }

  isServerOnline(): boolean {
    return this.serverStatus === ServerStatus.ONLINE;
  }

}
