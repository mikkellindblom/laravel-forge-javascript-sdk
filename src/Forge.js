import Servers from './core/Servers';
import Services from './core/Services';
import User from './core/User';
import Daemons from './core/Daemons';
import FirewallRules from './core/FirewallRules';
import Jobs from './core/Jobs';

class Forge {
  constructor(token) {
    this.token = token;
    this.user = new User(token);
    this.servers = new Servers(token);
    this.services = new Services(token);
    this.daemons = new Daemons(token);
    this.firewallRules = new FirewallRules(token);
    this.jobs = new Jobs(token);
  }
}

export default Forge;
