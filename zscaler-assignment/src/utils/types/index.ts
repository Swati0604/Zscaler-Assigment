export type graphDataType = {
    x: string,
    y: number
}

export type AttrackerDataType = {
    "id": string;
    "type": string,
    "severity": string,
    "kill_chain_phase": string,
    "timestamp": string,
    "attacker.id": string,
    "attacker.ip": string,
    "attacker.name":string,
    "attacker.port": string | number,
    "decoy.id":number,
    "decoy.name": string,
    "decoy.group":string,
    "decoy.ip": string,
    "decoy.port": string | number,
    "decoy.type":string
}