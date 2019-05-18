import {Component, OnInit} from '@angular/core';


@Component({
  selector : 'app-server',
  templateUrl : './app.server.html',
})
export class ServerComponent implements OnInit
{
  serverId: number = 1;
  allowAddServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName: string = '';
  private serverStatus: string = 'offline';

  constructor()
  {
    setTimeout(()=>
    {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit(): void
  {
  }

  getServerStatus()
  {
    return this.serverStatus;
  }

  onServerCreation()
  {
    this.serverCreationStatus = 'Server was created,Name:' + this.serverName;
  }

  onUpdateServerName(event: any)
  {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
