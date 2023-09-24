import { Schema, model, connect, Types } from 'mongoose';

interface ISoldier {
    fullName: string,
    personalNumber: string,
    level: string, 
    mahlaka: string,
    mador: string,
    anaf: string,
    draftDate: Date,
    releaseDate: Date,
    constantApprovals: Types.ObjectId[],
    oneTimeApprovals: IOneTimeApprovals[]
  };


interface IApprovals {
    type: string,
    reason: string
}

interface IOneTimeApprovals {
    approval: Types.ObjectId,
    usesLeft: number
}

interface IWarning {
    type: string
}


interface IAttendent {
    soldierName: string,
    didAttend: boolean,
    warnings?: Types.ObjectId[],
    cooments?: string[]
}

interface IMisdar {
    when: Date
    attendents: IAttendent[]
}

