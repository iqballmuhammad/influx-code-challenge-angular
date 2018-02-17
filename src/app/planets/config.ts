import { Planet } from './planet';

export interface Config{
    results: number;
    page: number;
    pages: number;
    data: Planet[];
}