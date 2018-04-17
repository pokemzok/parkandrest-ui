import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HEALTH_CHECK} from '../../environments/environment';
import {ServerStatus} from './serverstatus';

@Injectable()
export class HealthCheckService {

  private serverStatus: ServerStatus = ServerStatus.UNDEFINED;

  constructor(private http: HttpClient) {
  }

  async healthCheckServer(): Promise<ServerStatus> {
    await this.http.get(HEALTH_CHECK).toPromise()
      .then(value => {
        this.serverStatus = ServerStatus.ONLINE; // TODO: get from value.status
      })
      .catch(reason => {
        this.serverStatus = ServerStatus.OFFLINE;
      });
    return this.serverStatus;
  }

  async isServerOnline(): Promise<boolean> {
    switch (this.serverStatus) {
      case ServerStatus.UNDEFINED:
        await this.healthCheckServer();
        return this.isServerOnline();
      default:
        return this.serverStatus === ServerStatus.ONLINE;
    }
  }

}

