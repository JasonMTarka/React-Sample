import { Props } from "./common";


export interface CovidTrackerApiResponse {
    "Active Cases_text" : string,
    Country_text: string,
    "Last Update": string,
    "New Cases_text": string,
    "New Deaths_text": string,
    "Total Cases_text": string,
    "Total Deaths_text": string,
    "Total Recovered_text": string
};
  
export interface TrackerFormProps extends Props {
    handleInputChange: any
    handleSubmit: React.MouseEventHandler
};

export interface TrackerRowProps extends Props {
    country: CovidTrackerApiResponse
};

export interface TrackerTableProps extends Props {
    data: CovidTrackerApiResponse[]
};
