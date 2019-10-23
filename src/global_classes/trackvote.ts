// I am really uncomfortable with the code in this file.
// Something's really wrong but I just don't know what and how to fix.

import { Track } from "../entity/Track"

export default class VoteStorage {
    private storage: LinkedList
    constructor() {
        //TODO: Initialize, and then maybe add a track which was designated for welcoming the listeners ?
    }

    public addVote(track: Track, times: number = 1): void {
        // If track exists add times more vote to it's value, else throw exception
        let pos = this.storage.findTrackPos(track);
        if (pos < 0) {
            throw new Error("Track doesn't exist. Can't add vote");
        } else {
            this.storage.addValue(pos, times);
        }
    }

    public pushTrack(track: Track, value: number = 1): void {
        // If track exists throw exception,
        // else add new track to the list with value "value".
        if (this.storage.findTrackPos(track) < 0) {
            throw new Error("Track already exists. Can't push.");
        } else {
            this.storage.append(track, value);
        }
    }

    public popTrack(track: Track): void {
        // If track exists delete it from the storage,
        // else throw exception
        let pos = this.storage.findTrackPos(track);
        if (pos > -1) {
            this.storage.removeAt(pos)
        } else {
            throw new Error("Track doesn't exist. Can't pop");
        }
    }

    public getNextTrack(): Track {
        let track: Track;
        if (LinkedList.length) {
            let pos = this.storage.findMaxValued();
            track = this.storage.getTrack(pos);
            this.storage.removeAt(pos);
        } else {
            throw new Error("List empty. Can't get next Track");
        }
        return track;
        // Find max voted track delete and then return it.

    }
}

class LinkedNode {
    public track: Track
    public value: number
    public next: LinkedNode | null;

    constructor(track: Track, value: number) {
        this.track = track
        this.value = value
        this.next = null;
    }
}

class LinkedList {
    private head: LinkedNode | null = null;
    private len = 0;

    constructor(headElement?: LinkedNode) {
        this.head = headElement || null;
    }

    public append(track: Track, value: number) {
        let node = new LinkedNode(track, value);
        let current: LinkedNode;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }

    public findTrackPos(track: Track): number {
        // Returning of -1 would mean that the track does not exist.
        if (this.len == 0) return -1;
        let current = this.head;
        let pos = 0;
        while (true) {
            if (current.track.id === track.id) return pos; // found
            if (current.next === null) return -1; // not found
            current = current.next; // check next
        }
    }

    public getTrack(pos: number): Track {

        if (pos < -1 || pos > (this.len - 1)) {
            throw new Error("Out of bounds. Can't get track.");
        } else {
            let current = this.head;
            let index = 0;
            while (true) {
                if (index == pos) return current.track;
                current = current.next;
            }
        }
    }

    public findMaxValued(): number {
        // The caller must make sure that the list is not empty.
        // Otherwise things can get bad. Or we may have a silent error.
        let maxIndex = 0, maxValue = -1;
        let current = this.head;
        for (let pos = 0;/* Handled inside the for */; pos++) {
            if (current.value > maxValue) {
                maxIndex = pos;
                maxValue = current.value;
            }
            if (pos == (this.len - 1)) break; //exit on last position
            current = current.next;
        }
        return maxIndex;
    }

    public addValue(pos: number, value: number) {
        if (pos < -1 || pos > (this.len - 1)) {
            throw new Error("Out of bounds. Can't get position.");
        } else {
            let current = this.head;
            let index = 0;
            while (true) {
                if (index == pos) {
                    current.value += value;
                    return;
                }
                current = current.next;
            }
        }
    }

    public removeAt(pos: number): LinkedNode | null {
        if (pos > -1 && pos < this.len && this.head) {
            let current = this.head;
            let previous: LinkedNode = current;
            let index = 0;

            if (pos === 0) {
                this.head = current.next;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.len--;
            return current;
        } else {
            return null;
        }
    }
}