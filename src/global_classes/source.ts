import Config from "../config"
import { spawn, ChildProcessWithoutNullStreams } from "child_process";
export default class Source {
    private process: ChildProcessWithoutNullStreams;
    constructor() {
        this.process = spawn('ices', ['-h', Config.icecast.host, '-p', Config.icecast.port, '-P',
            Config.icecast.password, '-m', Config.icecast.mountPoint, '-n', Config.icecast.streamName,
            '-g', Config.icecast.genre, '-S', Config.icecast.moduleType]);
    }
}