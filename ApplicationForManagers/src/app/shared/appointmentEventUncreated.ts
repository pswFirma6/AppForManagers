import { StepEvent } from "../shared/stepEvent";


export class AppointmentEventUncreated {
    id:number;
    name: string;
    clickTime: Date;
    applicationName:string;
    timeSpan: number;
    doctorId: number;
    eventsStep: StepEvent[];
    createdApp: boolean;
}
