import { getRepository } from "typeorm";
import { Track } from "../entity/Track"

export default class VoteStorage {
    private storage: [Track, number]; // Using tuples is kinda ugly? maybe we should reconsider.
    constructor() {
        //initialize, and then maybe add a track which was designated for welcoming the listeners ?
    }

    public addVote(track: Track, times: number = 1): void {
        //If track exists add times more vote to it's value else throw exception
    }

    public pushTrack(track: Track, value: number = 1): void {
        //If track exists throw exception
        //else add new track to the list with value "value".
    }

    public popTrack(track: Track): void {
        //If track exists delete it from the storage
        //else throw exception
    }

    private getNextTrack(): Track {
        //Find max voted track pop it fusing function popTrack then return it
    }
}